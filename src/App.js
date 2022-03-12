//import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header';
import ErrorPage from './components/error-page';
import Main from './components/main';
// import GroupDetail from './components/group-detail';
// import About from './components/about';
// import Contact from './components/contact';
import Sidebar from './components/sidebar';
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from './hooks/useAuth'

function App() {

  const user = JSON.parse(localStorage.getItem('bwf-user'));

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AuthProvider user={user}>
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
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
