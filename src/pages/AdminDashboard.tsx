import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
interface User {
  id: number;
  name: string;
  email: string;
}

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios('https://jsonplaceholder.typicode.com/users');
        const data =  response.data;
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(users.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = users.slice(startIndex, startIndex + rowsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

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



  return (
    <div className="Admin-dashboard">
      <h1>Admin Dashboard</h1>
  
      <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>User Dashboard</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td><a href={`/users/${user.id}`}>Show</a></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={{ marginTop: '20px' }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            style={{
              marginRight: '5px',
              padding: '5px 10px',
              backgroundColor: currentPage === index + 1 ? '#3b5877' : 'lightgray',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
