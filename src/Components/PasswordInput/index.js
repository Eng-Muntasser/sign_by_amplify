import React from 'react';
import { Input } from 'antd';

const PasswordInput = ({Size,PlaceHolder,setPasswordValue}) =>{
    return(
        <Input.Password
        visibilityToggle={true}
        size={Size}
        placeholder={PlaceHolder}
        onChange ={setPasswordValue}
        />
    );
}
export default PasswordInput;