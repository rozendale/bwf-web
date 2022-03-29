import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { Button, TextField, Grid } from '@material-ui/core';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
// import EmailIcon from '@mui/icons-material/Email';
import { uploadAvatar } from '../../services/user-services';
import { changePass } from '../../services/user-services';
import {NotificationManager} from 'react-notifications';


function Account() {
    const { authData } = useAuth();
    // const [ username, setUsername] = useState('');
    // const [ email, setEmail] = useState('');
    const [ oldPassword, setOldPassword] = useState('');
    const [ password, setPassword] = useState('');
    const [ password2, setPassword2] = useState('');
    const [ image, setImage ] = useState();
    const passMatch = () => password === password2;

    const uploadFile = async e => {
        e.preventDefault();
        const uploadData = new FormData();
        uploadData.append('image', image, image.name);

        //console.log(authData && authData)
        const uploaded = await uploadAvatar(authData.user.profile.id, uploadData);
        if(uploaded){
            NotificationManager.success("You have changed your avatar!");
        } else {
            NotificationManager.error("Error. Avatar has failed!");
        }
    }
    const submitChangePass = async e => {
        e.preventDefault();
        if(passMatch()){
            const passData = await changePass(
                {old_password: oldPassword, new_password: password}, 
                authData.user.id,
                authData.token
            );
            if(passData) NotificationManager.success("You have changed your password!");
        } else {
            //console.log("password doesn't match!")
            NotificationManager.warning("Password doesn't match!");
        }
    }
    return (
        <div>
            <Link to={`/`}>home</Link>
            <h2>Change Avatar</h2>
            <form onSubmit={uploadFile}>
                <label>
                    <p>Upload your avatar</p>
                    <TextField type="file" onChange={e => setImage(e.target.files[0])}/>
                </label>
                <Button type="submit" variant="contained" color="primary">Upload file</Button>
            </form>
            <br/>
            <h2>Change Password</h2>
            <form onSubmit={submitChangePass}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <VpnKeyIcon />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="sinput-with-icon-grid"
                            label="Old password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            onChange={ e => setOldPassword(e.target.value)}
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
                            label="New password"
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
                            label="Repeat new password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            onChange={ e => setPassword2(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary"
                >
                    Change password
                </Button>
            </form>
        </div>
    );
}

export default Account;
