import React from 'react';
import "./UserProfile.css";

interface UserProfileProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string
}

const UserProfile: React.FC<UserProfileProps> = ({ id, name, email, phone, website }) => {
  return (
    <div className="user-profile">
    <div className="profile-card">
      <img
        src={`https://robohash.org/${id}?set=set2&size=150x150`}
        alt="User Avatar"
        className="profile-image"
      />
      <div className="profile-details">
        <h2>{name}</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Website:</strong> {website}</p>
      </div>
    </div>
  </div>
  );
};

export default UserProfile;