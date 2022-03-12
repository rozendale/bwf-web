import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GroupList from './group-list';
import GroupDetail from './group-detail';
import Register from './register';
import About from './about';
import Contact from './contact';
import { useAuth } from '../hooks/useAuth';


function Main() {
  const { authData } = useAuth();

  return (
    <div className="main">
      {authData && <h3>{authData.user.username}mmmmm</h3>}
      <Routes>
        <Route path="/" element={<GroupList/>}/>
        <Route path="/details/:groupId" element={<GroupDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Main;
