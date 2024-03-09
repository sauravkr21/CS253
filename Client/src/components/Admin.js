import React, { useState } from 'react';
import './Admin.css';

const initialCourseData = [
  {
    id: 1,
    branch: 'CSE',
    courseId: 'CS253',
    courseName: 'SOFTWARE ENGINEERING AND DEVELOPMENT',
    credits: 12,
    time: '10:00 to 10:50 TWThF',
    instructor: 'Dr. Indranil Saha',
    status: 'Active',
    remarks: 'N/A',
  },
  {
    id: 2,
    branch: 'CSE',
    courseId: 'CS201',
    courseName: 'DATA STRUCTURES AND ALGORITHMS',
    credits: 10,
    time: '11:00 to 11:50 TWThF',
    instructor: 'Dr. Rajesh Kumar',
    status: 'Active',
    remarks: 'N/A',
  },
  {
    id: 3,
    branch: 'CSE',
    courseId: 'CS350',
    courseName: 'DATABASE MANAGEMENT SYSTEMS',
    credits: 9,
    time: '12:00 to 12:50 TWThF',
    instructor: 'Dr. Aparna Datt',
    status: 'Active',
    remarks: 'N/A',
  },
  {
    id: 4,
    branch: 'CSE',
    courseId: 'CS401',
    courseName: 'COMPUTER NETWORKS',
    credits: 9,
    time: '13:00 to 13:50 TWThF',
    instructor: 'Dr. Amit Kumar',
    status: 'Active',
    remarks: 'N/A',
  },
  // Add more courses here
];

const App = () => {
  const [formData, setFormData] = useState({
    branch: '',
    courseId: '',
    courseName: '',
    credits: '',
    time: '',
    instructor: '',
    status: 'Active', // Default status
    remarks: '',
  });
  const [courseData, setCourseData] = useState(initialCourseData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCourseData([...courseData, { ...formData, id: courseData.length + 1 }]);
    setFormData({
      branch: '',
      courseId: '',
      courseName: '',
      credits: '',
      time: '',
      instructor: '',
      status: 'Active',
      remarks: '',
    });
  };

  return (
    <div className="admin-container">
      <h1>Admin Page</h1>
      <form onSubmit={handleSubmit}>
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
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((course, index) => (
              <tr key={course.id}>
                <td>{index + 1}</td>
                <td>{course.branch}</td>
                <td>{course.courseId}</td>
                <td>{course.courseName}</td>
                <td>{course.credits}</td>
                <td>{course.time}</td>
                <td>{course.instructor}</td>
                <td>{course.status}</td>
                <td>Action</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="form-group">
          <label htmlFor="branch">Branch:</label>
          <input type="text" id="branch" name="branch" value={formData.branch} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="courseId">Course ID:</label>
          <input type="text" id="courseId" name="courseId" value={formData.courseId} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="courseName">Course Name:</label>
          <input type="text" id="courseName" name="courseName" value={formData.courseName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="credits">Credits:</label>
          <input type="text" id="credits" name="credits" value={formData.credits} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input type="text" id="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="instructor">Instructor:</label>
          <input type="text" id="instructor" name="instructor" value={formData.instructor} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select id="status" name="status" value={formData.status} onChange={handleChange} required>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="remarks">Remarks:</label>
          <input type="text" id="remarks" name="remarks" value={formData.remarks} onChange={handleChange} required />
        </div>
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default App;
