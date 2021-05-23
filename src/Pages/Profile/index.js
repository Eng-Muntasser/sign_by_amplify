import React from 'react';
import './style.css';

const UserProfile = () =>{
    const handleTempSignOut = ()=>{
        localStorage.removeItem('userTokenAmp');
    }
    return(
        <div className='UserProfileMain'>
            <h1 onClick={handleTempSignOut} className='UserWelcoming'> Welcome Back {localStorage.getItem('unConfUser')}</h1>
        </div>
    );
}
export default UserProfile;