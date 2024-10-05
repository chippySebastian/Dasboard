import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';  // Import UserDashboard
import AdminDashboard from './pages/AdminDashboard'; // Import AdminDashboard

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/users/:id" element={<UserDashboard />} />  {/* Route for UserDashboard */}
        <Route path="/" element={<AdminDashboard />} />  {/* Route for AdminDashboard */}
      </Routes>
    </Router>
  );
};

export default App;
