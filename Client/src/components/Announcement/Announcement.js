// import React from 'react';

// const Announcement =()=>{
//   return (
//     <div>
//       This is Announcement
//     </div>
//   )
// }

// export default Announcement




import React from 'react';
import "./Announcement.css";
import PreRegistration from '../PreReg/PreReg';

const announcements = [
  { 
    id: 1, 
    title: 'pre-Registration 2024-25 I', 
    date: 'March 15, 2024', 
    description: "Announcement for the upcoming semester 2024-25 I is going to start from March 15, 2024 to March 15, 2024. You can do registration with the help of SmartTutor."
  },
  { 
    id: 2, 
    title: 'New Course Available', 
    date: 'March 20, 2024', 
    description: `Dear students,\n\nThe Department of Design is offering three **new** courses in the upcoming
    semester. Here are the details.\n\nDES 641A: Industry 4.0 and Industrial Internet of Things\nInstructor: A. Behera\nM-Th 12.00\n\n\nDES 638A: Human Machine Interaction\nInstructor: G. Prabhakar\nM-Th 14.00\n\n\nDES 640A: Design for Human Machine Systemic Relationships\nInstructor: V. Kant\nM(15.35) and T(14.00)\n\nYou may consider these as you opt for electives.`
  },
  { 
    id: 3, 
    title: 'New Forum Created', 
    date: 'April 1, 2024', 
    description: 'A new forum has been created for the course "Course Name". Please join and participate in discussions.'
  },
];

// Component for individual announcements
const AnnouncementItem = ({ title, date, description }) => {
  return (
    <div className="announcement-item">
      <h2>{title}</h2>
      <p><strong>Date:</strong> {date}</p>
      <p className="description">{description}</p>
    </div>
  );
};

const Announcement = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Announcements</h1>
      {/* Mapping through announcements data to display each announcement */}
      {announcements.map(announcement => (
        <AnnouncementItem key={announcement.id} title={announcement.title} date={announcement.date} description={announcement.description} />
      ))}
    </div>
  );
};

export default Announcement;
