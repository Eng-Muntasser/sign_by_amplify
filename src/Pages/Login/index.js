import React ,{useState} from 'react';
import { Auth } from 'aws-amplify';
 import {useHistory} from 'react-router-dom';
import { Row,Col,Form,Button,message,notification,Spin } from 'antd';
import {TextInput,PasswordInput} from '../../Components';
import {connect} from 'react-redux';
import {setSignInOutFlag} from '../../Redux/actions';
import {Link} from 'react-router-dom';
import {UserOutlined} from '@ant-design/icons';
import './style.css';

const Login = ({props,setSignInOutFlag}) =>{
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    let history = useHistory();
    const NameOnChange = (e) =>{
        form.setFieldsValue({email:e.target.value});
    }
    const PasswordOnchange = (e) =>{
        form.setFieldsValue({password:e.target.value});
    }
    const successLogIN = () =>{
        message.success('Log in Successfully');
    }
    const errorNotifcation = (error) =>{
        console.log(error);
        notification.error({
            message: 'server say\'s',
            description: error?.message.includes('Incorrect')? 'Incorrect E-mail or password' : error.message
        });
    }
    const OnFinish = async(values) =>{
        setLoading(true);
        try {
            let email = values.email;
            let password =values.password;
            const user = await Auth.signIn(email, password);
            if(user){
                console.log('alphaUser',user);
                localStorage.setItem('UserKeys',user);
                successLogIN();
                localStorage.setItem('userTokenAmp', user.signInUserSession.accessToken.jwtToken);
                history.push('/');
                setSignInOutFlag();
            }
        } catch (error) {
            console.log('error signing in', error);
            setLoading(false);
            errorNotifcation(error);
        }
    }
    return( 
        <div className='LoginMain'>
            <Row justify='center' align='middle' className='FullWidthHeight' style={{width:'100%',height:'100%'}}>
                <Col xl={8} lg={18} md={20} sm={20} xs={20} className='LoginCardContain'>
                    <Row justify='center' align='middle' style={{width:'100%'}}>
                        <Col lg={16} md={20} sm={20} xs={20}>
                            <div className='signinTaitleContain'>
                                <UserOutlined className='signInIcon'/>
                                <h1 className='signInTitle'>Sign In</h1>
                            </div>
                        </Col>
                        <Col lg={22} md={22} sm={23} xs={23}>
                            <Form
                            layout='vertical'
                            labelAlign='left'
                            size='large'
                            className='LoginFormContain'
                            onFinish={OnFinish}
                            form={form}
                            >
                                <Form.Item
                                label="EMAIL:"
                                name="email"
                                rules={[{ required: true,type: "email",message: 'Please input a valid Email!' }]}
                                className='labelModifcation'
                                >
                                    <TextInput PlaceHolder='E-mail' OnChange={NameOnChange}/>
                                </Form.Item>
                                <Form.Item
                                label="PASSWORD:"
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                                className='labelModifcation'
                                >
                                    <PasswordInput PlaceHolder='Enter password' setPasswordValue={PasswordOnchange}/>
                                </Form.Item>
                                <Form.Item>
                                    {
                                        !loading?
                                        <Button 
                                        type="primary" 
                                        htmlType="submit"
                                        block={true}
                                        className='signInBtn'
                                        >
                                            SIGN IN
                                        </Button>
                                        :<Spin className='logInSpinner'/>
                                    }
                                </Form.Item>
                            </Form>
                            <Link to='/Register'>
                                <Button 
                                type="primary"
                                htmlType="submit"
                                block={true}
                                className='NewUserBtn'
                                >
                                    NEW USER?
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
export default connect(
    null,
    {setSignInOutFlag}
)(Login);