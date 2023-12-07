import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
class TodoList extends React.Component{
    constructor(props){
        super(props);
    
        }
        handleDelete = (idToDelete) => {
            // Call a function to handle the deletion based on the ID
            // For now, let's assume you have a function named deleteTodo in the parent component
            this.props.onDelete(this.state.idToDelete);
          };
        render(){
            return(
                <>
               <div className='table_todolist'>
                 <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                         <th>item</th>
                        <th>Action</th>
                     </tr>
                        </thead>
                 <tbody>
                 {this.props.todoList &&
                 this.props.todoList.map(function(el){
                    return(
                        <tr key={el.id}>
                           <td>{el.id} </td>
                          <td>{el.todo} </td>
                          <td>
                     
                      <Button variant="secondary" gap={2}   onClick={() => this.handleEdit(el.id)}>EDIT</Button>
                       <Button variant="outline-danger" onClick={() => this.handleDelete(el.idToDelete)}>Delete</Button>
                    </td>
                     </tr>
                      )
                 })}
                 </tbody>
                </Table>
                </div>
                </>
            )
        }
    }


export default TodoList;