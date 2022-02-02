import { useEffect, useState } from 'react';
import { Button,FormControl,Input,InputLabel } from '@mui/material'
import './App.css';
import Todo from './Todo';
import db from "./firebase"
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

useEffect(()=>{
db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{             //This code loads up when App.js loads 
  // console.log(snapshot.docs.map(doc=>doc.data()));
  setTodos(snapshot.docs.map(doc=>({id:doc.id, todo:doc.data().todo}))
)})
},[])  //==> If you put a variable inside it, it will load whenever the component inside changes

  const addTodo = (event) => {
    setTodos([...todos, input])
    event.preventDefault()
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }
  return (
    <div className="App">
      <h1>Hello User</h1>
      <form>
        <FormControl>
          <InputLabel >Write a ToDo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type='submit' onClick={addTodo} variant="contained">Add Todo</Button>
      </form>

      <ul>
        {todos.map(todo => (
         <Todo todo={todo} />
        ))}

      </ul>
    </div>
  );
}

export default App;
