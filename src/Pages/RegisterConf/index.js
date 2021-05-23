import React,{useState} from 'react';
import { Auth } from 'aws-amplify';
import { Row,Col,Form,Button,message,Spin } from 'antd';
import {useHistory} from 'react-router-dom';
import {TextInput} from '../../Components';
import './style.css';

const ConfirmRegist = () =>{
    const [loading, setLoading] = useState(false);
    const [confRegistForm] = Form.useForm();
    let history = useHistory();
    const codeOnChange = (e) =>{
        confRegistForm.setFieldsValue({verificationCode:e.target.value})
    }
    const verifSuccess = () =>{
        message.success('your account has been confirmed');
    }
    const onFinish = async(value) =>{
        setLoading(true);
        let code= value.verificationCode;
        //Remember to chec if it not null localStorage.getItem('unConfUser') Lol
        let username= localStorage.getItem('unConfUser');
        try {
            const Resp =await Auth.confirmSignUp(username, code);
            if(Resp){
                verifSuccess();
                history.push('/');
            }
        } catch (error) {
            setLoading(false);
            console.log('error confirming sign up', error);
        }
    }
    return(
        <div className='LoginMain'>
            <Row justify='center' align='middle' className='FullWidthHeight'>
                <Col xl={8} lg={20} md={20} sm={20} xs={20}  className='confRegistCardContain'>
                    <Row justify='center' align='middle'>
                        <Col lg={19} md={20} sm={20} xs={20}>
                            <div className='signinTaitleContain'>
                                <h1 className='regConfTiltleText'>Confirm Registration</h1>
                            </div>
                        </Col>
                        <Col lg={22} md={22} sm={23} xs={23}>
                            <Form 
                            layout='vertical'
                            className='confRegistrationFormContain'
                            size='large'
                            form={confRegistForm}
                            onFinish={onFinish}
                            >
                                <Form.Item
                                label="Verification Code:"
                                name="verificationCode"
                                rules={[{ required: true, message: 'Please input your Verification Code!' }]}
                                >
                                    <TextInput PlaceHolder='Verification Code' OnChange={codeOnChange} AllowClear={true} Size='large'/>
                                </Form.Item>
                                <Form.Item>
                                    {
                                        !loading?
                                        <Button 
                                        type="primary" 
                                        htmlType="submit"
                                        block={true}
                                        className='Registerbtn'
                                        >
                                            SUBMIT
                                        </Button>
                                        :<Spin/>
                                    }
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
export default ConfirmRegist;