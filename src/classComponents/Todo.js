import React from 'react'
import AddToDo from './AddToDo';
import TodoList from './TodoList';

class Todo extends React.Component{
    constructor(props){
        super(props);
       this.state ={
        todoList:[]
         };

         this.updateTodoState=this.updateTodoState.bind(this);
         this.onDelete=this.onDelete.bind(this);
        }
   updateTodoState(todoText){
       this.setState({
         todoList:[
           ...this.state.todoList,
          {
          id:Date.now(),
          todo:todoText
          }]
    });
   } 
   onDelete(idToDelete) {
    // Filter out the item with the specified idToDelete
    const updatedList = this.state.todoList.filter((item) => item.id !== idToDelete);
    this.setState({
      todoList: updatedList,
    });
  }

       render(){
            return(
                <> 
                  <AddToDo update={this.updateTodoState}/>
                  <TodoList todoList ={this.state.todoList} onDelete={this.onDelete}/>
                </>
            )
        }
    }


export default Todo;
