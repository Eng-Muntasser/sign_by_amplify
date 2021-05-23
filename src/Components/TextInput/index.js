import React from 'react';
import { Input } from 'antd';

const TextInput = ({Size,OnpressEnter,PlaceHolder,OnChange,AllowClear}) =>{
    return(
        <Input
        size={Size}
        onPressEnter={OnpressEnter}
        placeholder={PlaceHolder}
        onChange={OnChange}
        allowClear={AllowClear}
        />
    );
}
export default TextInput