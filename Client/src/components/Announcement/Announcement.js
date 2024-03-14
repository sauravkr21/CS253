import React from 'react';
import "./Announcement.css";

const Announcement = () => {
  // Sample announcement data (can be fetched from an API or stored in state)
  const announcements = [
    {
      id: 1,
      title: 'Important Announcement',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris id elit molestie ultricies.',
      date: '2024-03-14',
    },
    {
      id: 2,
      title: 'Update on Schedule',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      date: '2024-03-10',
    },
    // Add more announcements as needed
  ];

  return (
    <div className="announcement-container">
      <h1>Announcements</h1>
      {announcements.map((announcement) => (
        <div key={announcement.id} className="announcement">
          <h2>{announcement.title}</h2>
          <p>{announcement.content}</p>
          <p className="announcement-date">Date: {announcement.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Announcement