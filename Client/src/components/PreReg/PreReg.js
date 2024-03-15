import React, { useState } from 'react';
import "./PreReg.css";

const PreRegistration = () => {
  const navigateTo = (url) => {
    window.location.href = url;
  };

  const [courses, setCourses] = useState([
    { id: 1, branch: 'CSE', courseId: 'CS253', courseName: 'SOFTWARE ENGINEERING AND DEVELOPMENT', credits: 12, time: 'T (RM101) W (RM101) F (RM101) 10:00-11:00', instructor: 'Dr. Indranil Saha', status: 'Active' },
    { id: 2, branch: 'CSE', courseId: 'ESO207', courseName: 'DATA STRUCTURES AND ALGORITHMS', credits: 12, time: 'M (L07) W (L07) Th (L07) 12:00-13:00', instructor: 'Dr. Nitin Saxena', status: 'Active' },
    { id: 3, branch: 'EE', courseId: 'EE698R', courseName: 'ADVANCED TOPICS IN MACHINE LEARNING', credits: 9, time: 'T (L16) Th (L16) 17:15-18:30', instructor: 'Dr. Aparna Datt', status: 'Active' },
    { id: 4, branch: 'BSBE', courseId: 'BSE322A', courseName: 'BIOINFORMATICS & COMPUTATIONAL BIOLOGY', credits: 10, time: 'M (L01) Th (L01) 12:00-13:15', instructor: 'Dr. Nitin Gupta', status: 'Active' },
  ]);

  const handleDelete = (id) => {
    const updatedCourses = courses.filter(course => course.id !== id);
    setCourses(updatedCourses);
  };

  // Function to simulate adding a course
  const handleAddCourse = () => {
    const newCourse = {
      id: courses.length + 1,
      branch: 'ME',
      courseId: ' 
      
      ME101',
      courseName: 'Introduction to Mechanical Engineering',
      credits: 4,
      time: 'M (L02) W (L02) F (L02) 09:00-10:00',
      instructor: 'Dr. Mechanical Genius',
      status: 'Active',
    };

    setCourses([...courses, newCourse]);
  };

  return (
    <>
      {/* Section with buttons at the top */}
      <div className="course-btn">
        <input id="searchcourse" type="text" placeholder="search courses" />
        <button type="button" onClick={() => navigateTo('/courses')}>Search</button>
        <button id="coursebuttton" onClick={handleAddCourse}>Add Course</button>
        <button id="coursedescriptionbutton" onClick={() => navigateTo('/courses')}>Course Description</button>
      </div>

      {/* Selected courses section */}
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
              <th>Edit/Drop</th>
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

      {/* Timetable section */}
      <div className="content">
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