import React, {useState} from 'react';
import { Auth } from 'aws-amplify';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {setSignInOutFlag} from '../../Redux/actions';
import { Button,Spin } from 'antd';
 import {LogoutOutlined} from '@ant-design/icons';
import './style.css';

const UserProfile = ({setSignInOutFlag}) =>{
    const [loading, setLoading] = useState(false);
    let history = useHistory();
    const handleSignOut = async()=>{
        setLoading(true);
        localStorage.removeItem('userTokenAmp');
        try {
            await Auth.signOut({ global: true });
        } catch (error) {
            console.log('error signing out: ', error);
        }
        setSignInOutFlag();
        history.push('/');
    }
    return(
        <div className='UserProfileMain'>
            <h1 className='UserWelcoming'> Welcome Back</h1>
            {
                !loading?
                <Button onClick={handleSignOut}>
                    <LogoutOutlined />
                    Loging out
                </Button>
                : <Spin/>
            }
        </div>
    );
}
export default connect(
    null,{setSignInOutFlag}
)(UserProfile);