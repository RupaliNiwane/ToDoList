import React ,{ useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

 const AddToDo = ({update})=>{
    const [todoText,setTodoText]=useState();

     const onSave =()=>{
      update(todoText);
      setTodoText('');
    }
     const  onchangehandler=(e)=>{
        setTodoText(e.target.value)
    }
       
    return(
        <>
      <div className='Addtodo_page'>
      <InputGroup className="mb-3">
       <Form.Control
      placeholder="Type Here Name"
       aria-describedby="basic-addon2"
       onChange={onchangehandler}
       value={todoText}
        />
       <Button onClick={onSave} variant="outline-secondary" id="button-addon2">
         Save
       </Button>
       </InputGroup>
       </div>
       </>
      )
      
 }

export default AddToDo;