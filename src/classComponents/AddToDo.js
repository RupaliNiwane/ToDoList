import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

class AddToDo extends React.Component{
    constructor(props){
        super(props);
        this.state={
          todo:[]  
        };
      
       this.onchangehandler=this.onchangehandler.bind(this);
       this.onSave = this.onSave.bind(this);
     } 
     onchangehandler(event){
          this.setState({
            todo:event.target.value
          });
          }

       onSave(){
       this.props.update(this.state.todo);
           } 

        render(){
            return(
                <>
              <div className='Addtodo_page'>
              <InputGroup className="mb-3">
               <Form.Control
              placeholder="TodoList type Here"
               aria-describedby="basic-addon2"
               onChange={this.onchangehandler}
                />
               <Button onClick={this.onSave} variant="outline-secondary" id="button-addon2">
                 Save
               </Button>
               </InputGroup>
               </div>
              
                </>
             
            );
        }
    }


export default AddToDo;