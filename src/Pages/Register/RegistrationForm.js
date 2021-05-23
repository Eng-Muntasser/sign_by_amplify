import React from 'react';
import { Row,Col,Form,Button,Spin } from 'antd';
import {TextInput,PasswordInput} from '../../Components';
import {UserAddOutlined} from '@ant-design/icons';
import './style.css';

const RegistrationForm = ({registForm,OnFinish,NameOnChange,phoneOnChange,emailOnChange,passwordOnChange,loading}) =>{
    return(
        <div className='LoginMain'>
        <Row justify='center' align='middle' className='FullWidthHeight'>
            <Col xl={10} lg={20} md={20} sm={20} xs={20} className='RegistCardContain'>
                <Row justify='center' align='middle'>
                    <Col lg={16} md={20} sm={20} xs={20}>
                        <div className='signinTaitleContain'>
                            <UserAddOutlined className='signInIcon'/>
                            <h1 className='signInTitle'>Sign up</h1>
                        </div>
                    </Col>
                    <Col lg={22} md={22} sm={23} xs={23}>
                        <Form 
                        layout='vertical'
                        className='RegistrationFormContain'
                        size='large'
                        form={registForm}
                        onFinish={OnFinish}
                        >
                            <Form.Item
                            label="Name:"
                            name="name"
                            rules={[{ required: true, message: 'Please input your Name!' }]}
                            >
                                <TextInput PlaceHolder='Name must not include spaces' OnChange={NameOnChange} AllowClear={true} Size='large'/>
                            </Form.Item>
                            <Form.Item
                            label="Phone:"
                            name="phone"
                            rules={[{ required: true, message: 'Please input your Phone number!' },
                            () => ({
                                validator(_, value) {
                                  if (!isNaN(value)) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(new Error('OooPs Phone onley Accebts number!'));
                                },
                              }),
                            ]}
                            >
                                <TextInput PlaceHolder='Phone Number' OnChange={phoneOnChange} AllowClear={true} Size='large'/>
                            </Form.Item>
                            <Form.Item
                            label="EMAIL:"
                            name="email"
                            rules={[{ required: true,type: "email",message: 'Please input a valid Email!' }]}
                            >
                                <TextInput PlaceHolder='E-mail' OnChange={emailOnChange} AllowClear={true} Size='large'/>
                            </Form.Item>
                            <Form.Item
                            label="PASSWORD:"
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <PasswordInput PlaceHolder='contain upper and lower case, sympols and number' setPasswordValue={passwordOnChange}/>
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
export default RegistrationForm;