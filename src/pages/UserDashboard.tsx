import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserProfile from '../components/UserProfile';
import UserActivities from '../components/UserActivities';
import { ThreeDots } from 'react-loader-spinner';

// Define TypeScript interfaces for user and activity data
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface Activity {
  id: number;
  title: string;
  body: string;
}

const UserDashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Separate data fetching into a reusable function
  const fetchData = async () => {
    try {
      setLoading(true);
      const [userResponse, activitiesResponse] = await Promise.all([
        axios.get<User>('https://jsonplaceholder.typicode.com/users/1'),
        axios.get<Activity[]>('https://jsonplaceholder.typicode.com/posts?userId=1'),
      ]);
      setUser(userResponse.data);
      setActivities(activitiesResponse.data);
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Loader component
  if (loading) {
    return (
      <div className="loader-container">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#3da89c"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      </div>
    );
  }

  // Error handling
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  // Render UserProfile and UserActivities
  return (
    <div className="user-dashboard">
      {user && (
        <UserProfile 
          id={user.id} 
          name={user.name} 
          email={user.email} 
          phone={user.phone} 
          website={user.website} 
        />
      )}
      <UserActivities activities={activities} />
    </div>
  );
};

export default UserDashboard;
