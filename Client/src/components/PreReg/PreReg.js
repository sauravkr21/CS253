import React, { useState } from 'react';
import "./PreReg.css";

const PreRegistration = () => {
  // Initial course data for demonstration
  const initialCourses = [
    { id: 1, branch: 'CSE', courseId: 'CS253', courseName: 'SOFTWARE ENGINEERING AND DEVELOPMENT', credits: 12, time: 'T (RM101) W (RM101) F (RM101) 10:00-11:00', instructor: 'Dr. Indranil Saha', status: 'Active' },
    { id: 2, branch: 'CSE', courseId: 'ESO207', courseName: 'DATA STRUCTURES AND ALGORITHMS', credits: 12, time: 'M (L07) W (L07) Th (L07) 12:00-13:00', instructor: 'Dr. Nitin Saxena', status: 'Active' },
    { id: 3, branch: 'EE', courseId: 'EE698R', courseName: 'ADVANCED TOPICS IN MACHINE LEARNING', credits: 9, time: 'T (L16) Th (L16) 17:15-18:30', instructor: 'Dr. Aparna Datt', status: 'Active' },
    { id: 4, branch: 'BSBE', courseId: 'BSE322A', courseName: 'BIOINFORMATICS & COMPUTATIONAL BIOLOGY', credits: 10, time: 'M (L01) Th (L01) 12:00-13:15', instructor: 'Dr. Nitin Gupta', status: 'Active' },
    // Add your remaining initial courses here
    { id: 5, branch: 'CSE', courseId: 'CS201A', courseName: 'Mathematics for Computerscience I', credits: 10, time: 'M (L01) Th (L01) 9:00-9:00', instructor: 'Dr. rajat mittal', status: 'Active' },
    { id: 6, branch: 'CSE', courseId: '202M', courseName: 'Mathematics for Computerscience II', credits: 10, time: 'M (L01) Th (L01) 9:00-9:00', instructor: 'Dr. Mahendra Agrwal', status: 'Active' },
    { id: 7, branch: 'CSE', courseId: '203M', courseName: 'Mathematics for Computerscience III', credits: 10, time: 'M (L01) Th (L01) 9:00-9:00', instructor: 'Dr. Subhajit Roy', status: 'Active' },
    { id: 8, branch: 'CSE', courseId: '220A', courseName: 'Hardware Development', credits: 12, time: 'M (L01) Th (L01) 11:00-12:00', instructor: 'Dr. Mainak Chaudhry', status: 'Active' },
   
    
  ];

  const [courses, setCourses] = useState(initialCourses); // Courses already selected for pre-registration
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]); // To hold search results

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    if (!value.trim()) {
      setSearchResults([]);
      return;
    }
    // Filter through initialCourses for matching names or IDs
    const results = initialCourses.filter(course =>
      course.courseName.toLowerCase().includes(value.toLowerCase()) ||
      course.courseId.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleAddCourse = (course) => {
    // Prevent adding duplicate courses
    if (!courses.find(c => c.id === course.id)) {
      setCourses([...courses, course]);
    }
  };

  const handleDelete = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

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
          <div key={course.id}>
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

      {/* Your timetable section remains unchanged */}
      <div className="content">
        {/* Timetable content goes here */}
        <table className="calendar">
          <thead>
            <tr>
              <th>Time</th>
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
            {/* Calendar rows */}
            <tr><td>7 AM</td></tr>
            <tr><td>8 AM</td></tr>
            <tr><td>9 AM</td></tr>
            <tr><td>10 AM</td></tr>
            <tr><td>11 AM</td></tr>
            <tr><td>12 PM</td></tr>
            <tr><td>1 PM</td></tr>
            <tr><td>2 PM</td></tr>
            <tr><td>3 PM</td></tr>
            <tr><td>4 PM</td></tr>
            <tr><td>5 PM</td></tr>
            <tr><td>6 PM</td></tr>
            <tr><td>7 PM</td></tr>
            <tr><td>8 PM</td></tr>
          </tbody>
        </table>
      </div>


      
    </>
  );
};

export default PreRegistration;