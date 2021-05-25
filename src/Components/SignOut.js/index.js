import React from 'react';
import { Auth } from 'aws-amplify';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { Button } from 'antd';
import {setSignInOutFlag} from '../../Redux/actions';
import {LogoutOutlined} from '@ant-design/icons';

const SignOut = ({setSignInOutFlag, setLoading}) =>{
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
        <Button onClick={handleSignOut} block={true}>
            <LogoutOutlined />
            Sign out
        </Button>
    );
}
export default connect(
    null,
    {setSignInOutFlag}
)(SignOut)