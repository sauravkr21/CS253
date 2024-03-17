import React, { useState, useEffect } from 'react';
import "./PreReg.css";
import {useNavigate} from 'react-router-dom';

const PreRegistration = () => {
  const[userData,setUserData] =useState();
  const navigate =useNavigate();
  const callPrePage =async()=>{
    try{
       const res = await fetch('/preregistration',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
        },
        credentials:"include",
       });

       const data = await res.json();
       console.log(data);
       setUserData(data);
       if(!res.status===200){
        const error =new Error(res.error);
        throw error;
       }

    }catch(err){
         console.log(err);
         navigate('/login');
    }
  }
  useEffect(()=>{
    callPrePage();
  },[]);
  const initialCourses = [
    { id: 1, branch: 'CSE', courseId: 'CS253', courseName: 'SOFTWARE ENGINEERING AND DEVELOPMENT', credits: 12, time: 'T (RM101) W (RM101) F (RM101) 10:00-11:00', instructor: 'Dr. Indranil Saha', status: 'Active' },
    { id: 2, branch: 'CSE', courseId: 'ESO207', courseName: 'DATA STRUCTURES AND ALGORITHMS', credits: 12, time: 'M (L07) W (L07) Th (L07) 12:00-13:00', instructor: 'Dr. Nitin Saxena', status: 'Active' },
    { id: 3, branch: 'EE ', courseId: 'EE698R', courseName: 'ADVANCED TOPICS IN MACHINE LEARNING', credits: 9, time: 'T (L16) Th (L16) 17:15-18:30', instructor: 'Dr. Aparna Datt', status: 'Active' },
    { id: 4, branch: 'BSBE', courseId: 'BSE322A', courseName: 'BIOINFORMATICS & COMPUTATIONAL BIOLOGY', credits: 10, time: 'M (L01) Th (L01) 12:00-13:15', instructor: 'Dr. Nitin Gupta', status: 'Active' },
    // Add your remaining initial courses here
    { id: 5, branch: 'CSE', courseId: 'CS201A', courseName: 'Mathematics for Computerscience I', credits: 10, time: 'M (L01) Th (L01) 9:00-10:00', instructor: 'Dr. rajat mittal', status: 'Active' },
    { id: 6, branch: 'CSE', courseId: '202M', courseName: 'Mathematics for Computerscience II', credits: 10, time: 'M (L01) Th (L01) 8:00-9:00', instructor: 'Dr. Mahendra Agrwal', status: 'Active' },
    { id: 7, branch: 'CSE', courseId: '203M', courseName: 'Mathematics for Computerscience III', credits: 10, time: 'M (L01) Th (L01) 16:00-17:00', instructor: 'Dr. Subhajit Roy', status: 'Active' },
    { id: 8, branch: 'CSE', courseId: '220A', courseName: 'Hardware Development', credits: 12, time: 'M (L01) Th (L01) 11:00-12:00', instructor: 'Dr. Mainak Chaudhry', status: 'Active' },
  
    // Your initial courses array, omitted for brevity
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    if (!value.trim()) {
      setSearchResults([]);
      return;
    }
    const results = initialCourses.filter(course =>
      course.courseName.toLowerCase().includes(value.toLowerCase()) ||
      course.courseId.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleAddCourse = (course) => {
    if (!courses.some(c => c.id === course.id)) {
      setCourses([...courses, course]);
    }
  };

  const handleDelete = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  // Parse course time for timetable generation
  const parseCourseTime = (timeString) => {
    const dayMappings = { M: 'Monday', T: 'Tuesday', W: 'Wednesday', Th: 'Thursday', F: 'Friday' };
    const matches = timeString.match(/([MTWThF]+) \(\w+\) ([\d:]+)-([\d:]+)/);
    if (!matches) return [];

    const [ , days, startTime, endTime ] = matches;
    return days.split('').flatMap(day => {
      if (dayMappings[day]) {
        return { day: dayMappings[day], startTime, endTime };
      }
      return [];
    });
  };

  // Generate timetable based on selected courses
  const generateTimetable = () => {
    const timetable = {};
    for (let hour = 7; hour <= 20; hour++) {
      const time = `${hour < 10 ? '0' : ''}${hour}:00`;
      timetable[time] = { Monday: '', Tuesday: '', Wednesday: '', Thursday: '', Friday: '', Saturday: '', Sunday: '' };
      
      courses.forEach(course => {
        parseCourseTime(course.time).forEach(({ day, startTime, endTime }) => {
          if (startTime <= time && time < endTime) {
            timetable[time][day] = course.courseName;
          }
        });
      });
    }
    return timetable;
  };

  const [timetable, setTimetable] = useState(generateTimetable());

  useEffect(() => {
    setTimetable(generateTimetable());
  }, [courses]); // Recalculate timetable when courses change

  return (
    <>
      <div className="course-search">
        <input
          type="text"
          placeholder="Search courses by name or ID..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {searchResults.map(course => (
          <div key={course.id} className="search-result">
            {course.courseName} ({course.courseId})
            <button onClick={() => handleAddCourse(course)}>Add</button>
          </div>
        ))}
      </div>

      <div className="selected-courses">
        <h2>Selected Courses</h2>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Branch</th>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Credits</th>
              <th>Time Slot</th>
              <th>Instructor</th>
              <th>Status</th>
              <th>Drop</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course.id}>
                <td>{index + 1}</td>
                <td>{course.branch}</td>
                <td>{course.courseId}</td>
                <td>{course.courseName}</td>
                <td>{course.credits}</td>
                <td>{course.time}</td>
                <td>{course.instructor}</td>
                <td>{course.status}</td>
                <td><button onClick={() => handleDelete(course.id)}>Drop</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="content">
        <table className="calendar">
          <thead>
            <tr>
              <th>Time/Day</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(timetable).map(time => (
              <tr key={time}>
                <td>{time}</td>
                {Object.values(timetable[time]).map((course, i) => (
                  <td key={i} className={course ? 'highlighted timetable-cell' : 'timetable-cell'}>
                    {course}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PreRegistration;



