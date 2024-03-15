import React, { useState } from 'react';
import "./PreReg.css";

const PreRegistration = () => {
  // State to hold the list of courses
  const [courses, setCourses] = useState([]);
  
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
