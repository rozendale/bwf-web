import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GroupList from './group-list';
import GroupDetail from './group-detail';
import About from './about';
import Contact from './contact';


function Main() {

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<GroupList/>}/>
        <Route path="/details/:groupId" element={<GroupDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Main;
