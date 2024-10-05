import React from 'react';
import  "./UserActivities.css";

interface UserActivityProps {
  activities: { id: number; title: string; body: string }[];
}

const UserActivities: React.FC<UserActivityProps> = ({ activities }) => {
  return (
    <div className="user-activities">
    <h3>User Activities</h3>
    <div className="activities-grid">
      {activities.map((activity) => (
        <div key={activity.id} className="activity-card">
          <h4>{activity.title}</h4>
          <p>{activity.body}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default UserActivities;