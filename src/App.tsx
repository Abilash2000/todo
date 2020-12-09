import React, {useState} from 'react';
import './App.css';
  import { Input,Button } from 'antd';
  import { DeleteOutlined,CheckOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';

// var todos = []
var todos:Array<Todo> = [
  // {text:"ho" , completed: true},
  // {text:"ho" , completed: true}

]



const App: React.FC = () => {

  const [TodoInput, setTodoInput] = useState('');
  
  const [AllTodo, setAllTodo] = useState(todos);

  function handleAddTodo(){

    if (TodoInput !== '' ) {
      setAllTodo ([...AllTodo,{id:AllTodo.length ,text:TodoInput, completed: false }])

    setTodoInput('')
    }
    
    


  }


  function OnComplete(todo:Todo) {

    let comp = !todo.completed

    setAllTodo(
      AllTodo.map(item => 
          item.id === todo.id 
          ? {...item, completed : comp} 
          : item 
  ))
    
        console.log(AllTodo);
        

  }

  function OnDelete(todo:Todo) {


    setAllTodo(
      AllTodo.filter(item => 
          item.id !== todo.id 
    
      ))
    
        console.log(AllTodo);
        

  }



 

  return (
    <div className="App">.
    <div className="mt-10">
    <p className = "text-center text-5xl font-mono font-bold text-green-500" >Welcome to the ToDO App</p>
    </div>
<div className="container mx-auto mt-8 bg-gray-100 ">
<br/>

  <div className="flex m-4">
    
<Input placeholder="Add Todo" value = {TodoInput} onChange= {(value) => {
  setTodoInput(value.target.value)
}}/>
<Button type="primary" shape="round"  size="large" className = "ml-5" onClick= {handleAddTodo}>Add</Button>
<br/>
</div>
<br/>

  <ul>  
    {AllTodo.map(todo => {


      return(
        
        <div className= "  ">

            <div className = { todo.completed ? ' p-5 md- 5 line-through bg-green-200': 'p-5' }>
        <li  className = { todo.completed ?"text-2xl text-green-500 " : "text-2xl text-gray-400" }> {todo.text} 
        
        <Button  ghost shape="circle" icon={<DeleteOutlined   style={{ color: "#EF4444"}} />}  size="large"  onClick= {()=>OnDelete(todo)}  className= " ml-2 float-right"  style={{ border : "none"}} ></Button>
        <Button  ghost shape="circle" icon={<CheckOutlined  style={{ color: "#2563EB"}}/>}  size="large" onClick= {()=>OnComplete(todo)} className= " mb-2 float-right"  style={{ border : "none"}}  ></Button>  
        </li>
        </div>
    </div>

      )
    })}
    
 
   </ul>
      
   </div>


      </div>
  );
}

export default App;
