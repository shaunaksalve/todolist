import { List ,ListItem, ListItemText,Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React from 'react';
import "./Todo.css"
import db from "./firebase"

function Todo(props) {
  return(

      <List className='todo_list'>
          <ListItem>
              <ListItemText primary={props.todo.todo} ></ListItemText>
          </ListItem>
          <DeleteForeverIcon onClick={event=>{db.collection('todos').doc(props.todo.id).delete()}}></DeleteForeverIcon>
          {/* <Button >Delete</Button> */}
      </List>
  )
 
  
}

export default Todo;
