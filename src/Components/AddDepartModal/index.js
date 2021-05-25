import React from 'react';
import { Row,Col,Modal,Select } from 'antd';
import TextInput from '../TextInput';

const AddDepatModal = ({Visability,OnCancel,Width,Options}) =>{
    const {Option} = Select;
    return(
        <Modal
        visible={Visability}
        title='Add Department'
        onCancel={OnCancel}
        width={Width}
        >
            <Row justify='space-between'>
                <Col span={11}>
                    <TextInput PlaceHolder='Departments'/>
                </Col>
                <Col span={7}>
                    <Select defaultValue='Department1' style={{width:'100%'}}>
                        {
                            Options.map((option)=>(
                                <Option value='option' key={option}>{option}</Option>
                            ))
                        }
                    </Select>
                </Col>
            </Row>
        </Modal>
    );
}
export default AddDepatModal;