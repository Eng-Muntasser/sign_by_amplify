import React, {useState,useEffect} from 'react';
import { API } from 'aws-amplify';
import { Button,Spin,Row,Col } from 'antd';
import {SignOut,DepartmentTable,AddDepatModal} from '../../Components';
 import {PlusOutlined} from '@ant-design/icons';
import './style.css';

const UserProfile = () =>{
    const [loading, setLoading] = useState(false);
    const [addModal, setAddModal] = useState(false);
    useEffect(()=>{
        const fetchDepartment = async() =>{
            const apiName = 'All_Departments';
            const path = 'v1/Department/All'; 
            const myInit = { 
                headers: {
                    // 'AccessKey': 'AKIAWJXHB7DRNS7KNCBG',
                    // 'SecretKey': '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',
                    // "Access-Control-Allow-Origin": "'*'",
                    //mimicing Postman
                    // Authorization:'AWS4-HMAC-SHA256 Credential=AKIAWJXHB7DRNS7KNCBG/20210525/us-east-1/execute-api/aws4_request, SignedHeaders=host;x-amz-date, Signature=c48ce387d17bc246893ab8693ebcc79c1a9e9c0aefcb6a4061252e57c348b5c8'
                }
            }
            try{
                const deps = await API.get(apiName,path, myInit);
                console.log('server deps', deps);
            }catch(err){
                console.log('fetch Deps', err)
            }
        }
        fetchDepartment();
    },[])
    return(
        <div className='UserProfileMain LoginMain'>
            <AddDepatModal 
            Visability={addModal} 
            OnCancel={()=>setAddModal(false)} Width='80%'
            Options={['Department1','Department2','Department3']}
            />
            <Row justify='end' className='headerMain' align='middle'>
                <Col xl={14} lg={14} md={15} sm={15}>
                    <p className='departManagTiltle'>Department Managment</p>
                </Col>
                <Col xl={4} lg={4} md={4} sm={4}>
                    {
                        !loading
                        ?<SignOut setLoading={setLoading}/>
                        : <Spin/>
                    }                
                </Col>
            </Row>
            <Row justify='end' className='AddDepBtn'>
                <Col span={4}>
                    <Button block={true} onClick={()=>setAddModal(true)}>
                        <PlusOutlined />
                        Add
                    </Button>
                </Col>
            </Row>
            <Row justify='center' className='tabelContainer'>
                <DepartmentTable tableData={false} 
                TableHeaders={false}
                OnEditClick={()=>setAddModal(true)}
                />
            </Row>
        </div>
    );
}
export default UserProfile;