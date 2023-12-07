import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

 const TodoList =({todoList,markAsDone,onDelete,editButton})=>{

   const handleDone =(id)=>{
    markAsDone(id)
   }
     const handleDelete = (id)=>{
        onDelete(id)
     }
     const handleEdit =(todo)=>{
        editButton(todo)
     };

    return(
        <>
       <div className='table_todolist'> 
         <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>NO</th>
                 <th>item</th>
                <th>Action</th>
             </tr>
          </thead>
         <tbody>
         { todoList.map(function(el,key){
            return(
                <tr className={ el.status ===2?'mark-done':'' || el.status ===3?'hidden':''} >
                   <td>{key+1} </td>
                  <td>{el.todo} </td>
                  <td>
             
              <Button variant="secondary"  onClick={() => handleDone(el.id)}>
              Done </Button>
               <Button className='btn btn-danger'onClick={() =>handleDelete(el.id)}>
               Delete</Button>
               <Button  className='btn btn-success' onClick={() =>handleEdit(el.todo)}>
               Edit</Button>
            </td>
             </tr>
              )
         })}
         </tbody>
        </Table>
        </div>
        </>
    );
}

export default TodoList;