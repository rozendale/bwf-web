import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { Button, Grid, TextField } from '@material-ui/core';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EmailIcon from '@mui/icons-material/Email';
import { register } from '../../services/user-services';
import { auth } from '../../services/user-services';
//import { SettingsInputAntennaSharp } from '@mui/icons-material';


function Register() {
    const { setAuth } = useAuth();
    const history = useNavigate();
    const [ username, setUsername] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ password2, setPassword2] = useState('');
    const passMatch = () => password === password2;
    //const { authData, setRegister } = useAuth(null);
    //const { authData } = useAuth
    const handleSubmit = async e => {
        e.preventDefault();
        if(passMatch()){
            const regData = await register({username, email, password, profile: {is_premium: false}})
            if(regData){
                const data = await auth({username, password});
                console.log(regData);
                console.log(password);
                console.log(data);
                setAuth(data);
                history('/account');
            }
            // localStorage.setItem('bwf-user', JSON.stringify(data))
            //setRegister(regData);
        } else {
            console.log("password doesn't match!")
        }
      }
// PASSWORD IS NOT SAVED IN REGISTER!!!!!
    return (
        <div>
            <Link to={`/`}>home</Link>
            <br/>Register
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
                    <EmailIcon />
                    </Grid>
                    <Grid item>
                    <TextField 
                        id="input-with-icon-grid" 
                        label="Email"
                        onChange={ e => setEmail(e.target.value)}
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
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                    <VpnKeyIcon />
                    </Grid>
                    <Grid item>
                    <TextField
                        id="sinput-with-icon-grid"
                        label="Repeat password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        onChange={ e => setPassword2(e.target.value)}
                    />
                    </Grid>
                </Grid>
                <Button color="primary" variant="contained" type="submit">
                    Sign Up
                </Button>
            </form>
            <Link to={`/`}>back</Link>
        </div>
    );
}

export default Register;
