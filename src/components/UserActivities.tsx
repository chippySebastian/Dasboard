import React from 'react';
import  "./UserActivities.css";

interface UserActivityProps {
  activities: { id: number; title: string; body: string; userId:number }[];
  id:number;
}

const UserActivities: React.FC<UserActivityProps> = ({ activities,id }) => {
  console.log(activities.length);
  console.log(id);
  return (
    <div className="user-activities">
    <h3>User Activities</h3>
    <div className="activities-grid">
      {activities.filter((activity)=>{
        return activity.userId==id;
      }).map((activity) => (
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