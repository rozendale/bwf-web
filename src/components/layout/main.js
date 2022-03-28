import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GroupList from '../group/group-list';
import GroupDetail from '../group/group-detail';
import Register from '../user/register';
import Account from '../user/account';
import About from '../about';
import Contact from '../contact';
import { useAuth } from '../../hooks/useAuth';


function Main() {
  const { authData } = useAuth();
  console.log(authData)

  return (
    <div className="main">
      {/* {authData && <h3>{authData.user.username}</h3>} */}
      <Routes>
        <Route path="/" element={<GroupList/>}/>
        <Route path="/details/:groupId" element={<GroupDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Main;
