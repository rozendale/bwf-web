import React, { useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { auth } from '../services/user-services';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';


function Sidebar() {
  const [ username, setUsername] = useState('');
  const [ password, setPassword] = useState('');
  const { authData, setAuth } = useAuth(null);
  const handleSubmit = async e => {
    e.preventDefault();
    const data = await auth({username, password})
    // localStorage.setItem('bwf-user', JSON.stringify(data))
    setAuth(data);
  }
  const logout = () => {
    setAuth(null);
  }

  return (
    <div className="sidebar">
      {!authData ?
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircleIcon />
            </Grid>
            <Grid item>
              <TextField 
                id="input-with-icon-grid" 
                label="Username"
                onChange={ e => setUsername(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <VpnKeyIcon />
            </Grid>
            <Grid item>
              <TextField
                id="sinput-with-icon-grid"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                onChange={ e => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button color="primary" variant="contained" type="submit">
            Login
          </Button>
          <Link to={`/register`}>Register</Link>
        </form>
      :
        <div>
          <p>{authData.user.username}</p>
          <Button color="primary" variant="contained" onClick={() => logout()}>
            Logout
          </Button>
        </div>
      }
    </div>
  );
}

export default Sidebar;
