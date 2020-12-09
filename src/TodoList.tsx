import React from 'react'
import { Button } from 'antd';
import { DeleteOutlined,CheckOutlined } from '@ant-design/icons';

interface Props {
    todo: Todo; // your props validation
}

export const TodoList: React.FC<Props> = ({todo}) => {
    return (
        <div className= "p-5">

            
            <li> {todo.text}   <Button type="primary" shape="round" icon={<DeleteOutlined />}  size="small"  className= " mb-2 float-right"></Button>
            
            <Button type="primary" shape="round" icon={<CheckOutlined />}  size="small"  className= " mb-2 float-right"></Button>  
            </li>
        </div>
    )
}   
