import React, { useState } from 'react';
import "./PreReg.css";
import {useNavigate} from 'react-router-dom';

const PreRegistration = () => {
<<<<<<< HEAD
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
=======
  // State to hold the list of courses
  const [courses, setCourses] = useState([]);
>>>>>>> 58dd85df1daf08f7c502dfa2ab56b3480a2cba43
  
  // State to hold the input values for adding a new course
  const [newCourseName, setNewCourseName] = useState('');
  const [newCourseId, setNewCourseId] = useState('');
  const [newCourseTimings, setNewCourseTimings] = useState('');
  const [newCourseInstructor, setNewCourseInstructor] = useState('');
  const [newCourseBranch, setNewCourseBranch] = useState('');
  const [newCourseCredits, setNewCourseCredits] = useState('');

  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState('');

  // State to manage the visibility of the add course form
  const [showAddCourseForm, setShowAddCourseForm] = useState(false);

  // Function to handle adding a new course
  const handleAddCourse = () => {
    if (newCourseName.trim() !== '' && newCourseId.trim() !== '' && newCourseTimings.trim() !== '' && newCourseInstructor.trim() !== '' && newCourseBranch.trim() !== '' && newCourseCredits.trim() !== '') {
      const timings = newCourseTimings.split(',').map(timing => {
        const [day, timeRange] = timing.trim().split(' ');
        const [start, end] = timeRange.split('-').map(time => parseInt(time.split(':')[0]));
        return { day, start, end };
      });
      
      const newCourse = {
        name: newCourseName,
        id: newCourseId,
        timings: timings,
        instructor: newCourseInstructor,
        branch: newCourseBranch,
        credits: newCourseCredits
      };
      
      setCourses([...courses, newCourse]);
      
      // Reset input fields
      setNewCourseName('');
      setNewCourseId('');
      setNewCourseTimings('');
      setNewCourseInstructor('');
      setNewCourseBranch('');
      setNewCourseCredits('');

      // Hide the add course form after adding the course
      setShowAddCourseForm(false);
    }
  };

  // Function to handle dropping a course
  const handleDropCourse = (index) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
  };

  const generateTimetableGrid = () => {
    // Weekdays array
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    // Initialize the timetable grid
    const timetableGrid = [];
    // Generate rows for each hour
    for (let i = 8; i < 19; i++) {
      const timeSlot = `${i.toString().padStart(2, '0')}:00`;
      const row = (
        <tr key={timeSlot}>
          <td>{timeSlot}</td>
          {weekdays.map((day, index) => {
            const coursesInTimeSlot = courses.filter(course =>
              course.timings.some(timing =>
                timing.day === day &&
                timing.start <= i && i < timing.end
              )
            );
            const isClash = coursesInTimeSlot.length > 1;
            return (
              <td key={index} className={`timetable-cell ${isClash ? 'clash-cell' : ''}`}>
                {coursesInTimeSlot.map((course, index) => (
                  <div key={index} className="course-info">
                    {course.id} {/* Only display course ID */}
                  </div>
                ))}
              </td>
            );
          })}
        </tr>
      );
      timetableGrid.push(row);
    }
    return timetableGrid;
  };
  
  // Function to filter courses based on search query
  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pre-registration">
      <h1>Pre-Registration Page</h1>

      {/* Button to toggle the visibility of the add course form */}
      <div className="add-course-button">
        <button onClick={() => setShowAddCourseForm(!showAddCourseForm)}>New Course</button>
      </div>
      {/* Add course form */}
      {showAddCourseForm && (
        <div className="add-course">
          <input
            type="text"
            placeholder="Course ID"
            value={newCourseId}
            onChange={(e) => setNewCourseId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Course Name"
            value={newCourseName}
            onChange={(e) => setNewCourseName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Timings (Day HH:MM-HH:MM, Day HH:MM-HH:MM, ...)"
            value={newCourseTimings}
            onChange={(e) => setNewCourseTimings(e.target.value)}
          />
          <input
            type="text"
            placeholder="Instructor"
            value={newCourseInstructor}
            onChange={(e) => setNewCourseInstructor(e.target.value)}
          />
          <input
            type="text"
            placeholder="Branch"
            value={newCourseBranch}
            onChange={(e) => setNewCourseBranch(e.target.value)}
          />
          <input
            type="number"
            placeholder="Credits"
            value={newCourseCredits}
            onChange={(e) => setNewCourseCredits(e.target.value)}
          />
          <button onClick={handleAddCourse}>Add Course</button>
        </div>
      )}
      <div className="course-list">
        <h2>Course List</h2>
        {/* Search input field */}
        <input
          type="text"
          placeholder="Search courses"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* Course list table */}
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Branch</th>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Credits</th>
              <th>Time slot</th>
              <th>Instructor</th>
              <th>Add/Drop</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{course.branch}</td>
                <td>{course.id}</td>
                <td>{course.name}</td>
                <td>{course.credits}</td>
                <td>{course.timings.map(timing => `${timing.day} ${timing.start}-${timing.end}`).join(', ')}</td>
                <td>{course.instructor}</td>
                <td>
                  <button onClick={() => handleDropCourse(index)}>Add/Drop</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="timetable">
        <h2>Timetable</h2>
        <table>
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
            {generateTimetableGrid()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreRegistration;
