import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import VpnKeyIcon from '@mui/icons-material/VpnKey';
// import EmailIcon from '@mui/icons-material/Email';
import { uploadAvatar } from '../../services/user-services';


function Account() {
    // const [ username, setUsername] = useState('');
    // const [ email, setEmail] = useState('');
    // const [ password, setPassword] = useState('');
    // const [ password2, setPassword2] = useState('');
    const { authData } = useAuth();
    const [ image, setImage ] = useState();
    //const { authData } = useAuth

    const uploadFile = async e => {
        e.preventDefault();
        const uploadData = new FormData();
        uploadData.append('image', image, image.name);
        console.log(authData && authData)
        await uploadAvatar(authData.user.profile.id, uploadData);
    }
    return (
        <div>
            <Link to={`/`}>home</Link>
            <h2>Account</h2>
            <form onSubmit={uploadFile}>
                <label>
                    <p>Upload your avatar</p>
                    <TextField type="file" onChange={e => setImage(e.target.files[0])}/>
                </label>
                <Button type="submit" variant="contained" color="primary">Upload file</Button>
            </form>
        </div>
    );
}

export default Account;
