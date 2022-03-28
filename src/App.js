//import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/header';
import ErrorPage from './components/error-page';
import Main from './components/layout/main';
// import GroupDetail from './components/group-detail';
// import About from './components/about';
// import Contact from './components/contact';
import Sidebar from './components/layout/sidebar';
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from './hooks/useAuth';

function App() {

  const user = JSON.parse(localStorage.getItem('bwf-user'));

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider user={user}>
        <Router>
          <div className="App">
            <Header/>
            <div className="general-content">
              <Sidebar/>
              <Routes>
                <Route path="/*" element={<Main />} />
                {/* <Route path="/group/:groupId" element={<GroupDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} /> */}

                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
