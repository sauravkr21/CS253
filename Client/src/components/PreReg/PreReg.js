
import React from 'react';
import "./PreReg.css";

const PreRegistration = () => {
 
  const navigateTo = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <div className="">
        <div className="course-btn">
         
          <input id="searchcourse" type="text"  placeholder="search courses" />
          <button type="button" onClick={() => navigateTo('/courses')}>Search</button> g
          
          {/* Updated onClick handlers to use the navigateTo function */}
          <button id="coursebuttton" onClick={() => navigateTo('/Courses.js')}>Add Course</button>
          <button id ="timetablebutton" onClick={() => navigateTo('timetable.html')}>Timetable</button>
          <button id="dropcoursebutton" onClick={() => navigateTo('DropCourse.html')}>Drop Course</button>
          <button id="coursedescriptionbutton" onClick={() => navigateTo('CourseDescription.html')}>Course Description</button>
        </div>
        </div>
        <div className="content">
          <table className="calendar">
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
          </table>
        </div>
      {/* </div> */}
    </>
  );
}

export default PreRegistration;
