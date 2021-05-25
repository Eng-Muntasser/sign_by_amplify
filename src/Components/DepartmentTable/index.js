import React from 'react';
import { Row,Col,Table,Dropdown  } from 'antd';
import {CaretDownOutlined} from '@ant-design/icons';
import ActionMenu from '../ActionMenu';

const DepartmentTable = ({tableData, TableHeaders, OnEditClick}) =>{
    const columns  = [
        {
            title:'Department Name',
            dataIndex: 'departmentName',
            key: 'departmentName',
            align: 'center'
        },
        {
            title:'Department Parent Id',
            dataIndex: 'departmentParentId',
            key: 'departmentParentId',
            align: 'center'
        },
        {
            title:'Action',
            dataIndex: 'action',
            key: 'action',
            render: () =>(
                <Row justify='center'  style={{width:'100%'}}>
                    <Col span={12}>
                        <Dropdown
                        trigger={['click']}
                        overlay={
                            <ActionMenu OnEditClick={OnEditClick}/>
                        }
                        placement="bottomLeft" arrow
                        >
                            <span className='selectActionDef'>
                                Select Action
                                <CaretDownOutlined />
                            </span>
                        </Dropdown>
                    </Col>
                </Row>
            ),
            align: 'center'
        }
    ];
    const data = [
        {
            key:'1a',
            departmentName:'Department1 ',
        },
        {
            key:'sa',
            departmentName:'Department2',
        },{
            key:'3a',
            departmentName:'Department3',
        },
    ];
    return(
        <Table columns={TableHeaders? TableHeaders:columns}
            dataSource={tableData? tableData:data}
            className='tableInner'
            bordered
        />
    );
}
export default DepartmentTable;