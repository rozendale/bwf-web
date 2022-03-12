import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';


function Register() {
    const { authData } = useAuth
    return (
        <div>
            <Link to={`/`}>home</Link>
            <br/>Register
        </div>
    );
}

export default Register;
