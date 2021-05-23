import React ,{useState} from 'react';
import { Auth } from 'aws-amplify';
import { Form,message,notification } from 'antd';
import {useHistory} from 'react-router-dom';
import RegistrationForm from './RegistrationForm';


const UserRegistraion = () =>{
    const [loading, setLoading] = useState(false);
    const [registForm] = Form.useForm();
    const history = useHistory();
    const NameOnChange = (e) =>{
        registForm.setFieldsValue({name:e.target.value});
    }
    const phoneOnChange = (e) =>{
        registForm.setFieldsValue({phone:e.target.value});
    }
    const emailOnChange = (e) =>{
        registForm.setFieldsValue({email:e.target.value});
    }
    const passwordOnChange = (e) =>{
        registForm.setFieldsValue({password:e.target.value});
    }
    const sucsessMessage = () =>{
        message.success('Sign up successfully');
    }
    const OnFinish = async(values) =>{
        setLoading(true);
        try {
            const { user } = await Auth.signUp({
                username: values.name,
                password: values.password,
                attributes: {
                    email: values.email,
                    phone_number: values.phone,
                    name: values.name
                }
            });
            if(user){
                sucsessMessage();
                localStorage.setItem('unConfUser',values.name);
                history.push('/Confirm_Registration');
            }
        } catch (error) {
            console.log('error signing up:', error.message);
            setLoading(false);
            let errorName ='';
            let errorPass ='';
            if(error.message.includes('username')){
                errorName='Enter a valid user name (user name must not contain space)';
            }
            if(error.message.includes('password')){
                errorPass='password must: be more than 6 character & contain: upper and lower case, symbol, numbers';
            }
            return notification.error({
                message: 'server say\'s',
                description: (errorName !== ''|| errorPass !== '')? `${errorName} \n ${errorPass}` : error.message
            });
        }
    }
    return(
       <RegistrationForm registForm={registForm} NameOnChange={NameOnChange} phoneOnChange={phoneOnChange} emailOnChange={emailOnChange} passwordOnChange={passwordOnChange} OnFinish={OnFinish} loading={loading} />
    );
}
export default UserRegistraion