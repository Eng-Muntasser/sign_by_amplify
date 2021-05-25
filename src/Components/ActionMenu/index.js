import React from 'react';
import { Menu  } from 'antd';
import {EditOutlined,DeleteOutlined} from '@ant-design/icons';

const ActionMenu  = ({OnEditClick}) =>{
    return(
        <Menu className='actionMenu'>
        <Menu.Item onClick={OnEditClick}>
                <span>
                    Edit
                    <EditOutlined />
                </span>
        </Menu.Item>
        <Menu.Item>
            <span>
                Delet
                <DeleteOutlined />
            </span>
        </Menu.Item>
    </Menu>
    );
}
export default ActionMenu;