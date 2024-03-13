

// import React from 'react';
// import "./PreReg.css";

// const PreRegistration = () => {
//   return (
//     <>
    
//       <div className="flex-container">
//         <div className="course-btn">
        
//             <input type="text" placeholder="what you are looking for?"> <button type="submit"></button> </input>
//            <button onClick={() => window.location.href='/Courses.js'} >Add Course</button>
//           <button onClick={() => window.location.href='timetable.html'}>Timetable</button>
//           <button onClick={() => window.location.href='DropCourse.html'}>Drop Course</button>
//           <button onClick={() => window.location.href='CourseDescription.html'}>Course Description</button>
//            </div>

//         <div className="content">
//           <table className="calendar">
//             <tr>
//               <th>Time</th>
//               <th>Monday</th>
//               <th>Tuesday</th>
//               <th>Wednesday</th>
//               <th>Thursday</th>
//               <th>Friday</th>
//               <th>Saturday</th>
//               <th>Sunday</th>
//             </tr>
//             {/* Correct the rows according to your needs */}
//             <tr>
//               <td>7 AM</td>
//               {/* Other <td> elements as necessary */}
//             </tr>
//             <tr>
//               <td>8 AM</td>
//             </tr>
//             <tr>
//               <td>9 AM</td>
//             </tr>
//             <tr>
//               <td>10 AM</td>
//             </tr>
//             <tr>
//               <td>11 AM</td>
//             </tr>
//             <tr>
//               <td>12 PM</td>
//             </tr>
//             <tr>
//               <td>12 PM</td></tr>
//               <tr>
//               <td>14 PM</td></tr>
              
//             <tr>
//               <td>16 PM</td></tr>
//               <tr>
//               <td>17 PM</td></tr>
//               <tr>
//               <td>18 PM</td></tr>
//               <tr>
//               <td>19 PM</td></tr>
//               <tr>
//               <td>20 PM</td></tr>

//             {/* Repeat <tr>...</tr> for each time slot */}
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default PreRegistration;

import React from 'react';
import "./PreReg.css";

const PreRegistration = () => {
 
  const navigateTo = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <div className="flex-container">
        <div className="course-btn">
         
          <input id="searchcourse" type="text"  placeholder="search courses" />
          <button type="button" onClick={() => navigateTo('/courses')}>Search</button> 
          
          {/* Updated onClick handlers to use the navigateTo function */}
          <button id="coursebuttton" onClick={() => navigateTo('/Courses.js')}>Add Course</button>
          <button id ="timetablebutton" onClick={() => navigateTo('timetable.html')}>Timetable</button>
          <button id="dropcoursebutton" onClick={() => navigateTo('DropCourse.html')}>Drop Course</button>
          <button id="coursedescriptionbutton" onClick={() => navigateTo('CourseDescription.html')}>Course Description</button>
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
            <tr><td>1 PM</td></tr> {/* Fixed duplicate "12 PM" and incorrect "14 PM" */}
            <tr><td>2 PM</td></tr> {/* Assuming "14 PM" was meant to be "2 PM" */}
            <tr><td>3 PM</td></tr> {/* Adjusted the PM times correctly */}
            <tr><td>4 PM</td></tr>
            <tr><td>5 PM</td></tr>
            <tr><td>6 PM</td></tr>
            <tr><td>7 PM</td></tr>
            <tr><td>8 PM</td></tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default PreRegistration;
