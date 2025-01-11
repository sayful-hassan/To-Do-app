import './App.css';
import './App.css';
import {useState} from 'react';

function App() {
  const [todos, setTodos]=useState([])   /*  given a state for listing storage as array */
  const [todo, setTodo]=useState('')     /*  given a state for typing status as string */

  return (
    <div className='app'>
      <div className='mainHeading'>
        <h1>ToDo List</h1>
      </div>
      <div className='subHeading'>
        <h2>Whoops, You can dump it here</h2>
      </div>
      <div className='input'>
      <input value={todo} onChange={(event)=>setTodo(event.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i  onClick={()=>setTodos([...todos,{id:Date.now(), text:todo, status:false}])} className="fas fa-plus"></i> 
      </div>
      <div className="todos">
       { todos.map((obj)=>{
        return(

         <div className="todo">
          <div className="left">
            <input onChange={(event)=>{
              console.log(event.target.checked)
              console.log(obj)
              setTodos(todos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=event.target.checked

                }
                return obj2
                
              }))
            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>)
        })}
      </div>

    </div>


  );
}

export default App;
