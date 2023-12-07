import React,{useState} from 'react'
import AddToDo from './AddToDo';
import TodoList from './TodoList';
import Card from 'react-bootstrap/Card';

const Todo = ()=>{
 const [todoList,setTodoList]=useState([]);
//  const [todoText,settodoText]=useSate([]);
 
  const updateTodoState =(todoText)=>{
    setTodoList([...todoList,{
      id:Date.now(),//1.math.ramdom
      todo:todoText,
      status:1
    }]);
  }

  const markAsDone = (id)=>{
   // upadate state cooresponding to this is-change the state
   // stutau will be chnage 
   const temp = todoList.map(el=>{
   if(el.id==id){
    return{...el,status:2}
   }else{
    return el;
   }
 })
      setTodoList(temp);
  } 

  const onDelete = (id)=>{
    // upadate state cooresponding to this is-change the state
    // stutau will be chnage 
    const del = todoList.map(el=>{
    if(el.id==id){
     return{...el,status:3}
    }else{
     return el;
    }
  })
       setTodoList(del);
   } 
   
   const editButton = (todoText) => {
    const edit = prompt('EditButton', todoText);
    if (edit !== null ) {
      // Check if the user clicked "Cancel"
      const updatedList = todoList.map((el) =>
        el.todo === todoText ? { ...el, todo: edit } : el
      );
      
      setTodoList(updatedList);
    }
  };
 

 return(
  <> 
    <Card className='container bg-light'>
    <AddToDo update={updateTodoState}/>
    <TodoList todoList ={todoList}  markAsDone={markAsDone} onDelete={onDelete} editButton={editButton} />
    </Card>
  </>
)

}

export default Todo;
