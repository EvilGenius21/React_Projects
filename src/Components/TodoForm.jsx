import React, { useState } from 'react'
import { useTodo } from '../Context/Todocontext';

function TodoForm() {
   const [todo,setTodo]=useState('') // for single task or todo
  

   const {addtodo}=useTodo()
   const add=(e)=>{
    e.preventDefault();
    // const todo
    // if(todo) return 
  // yaha pe jo {} vo destructing ke liye use kiye gaye hai
    addtodo({todo:todo,completed:false}) // as id is already asigned in app.jsx we just need to assign the message or completed status
    setTodo(" ") // after submission reset the input field to blank 
   }
   

  return (
   <>
   <form  onSubmit ={add} className='flex font-mono' >
   <input type="text" placeholder='Enter Your task'  value={todo} onChange={(e)=>setTodo(e.target.value)}  className=" w-full outline:none text-white bg-gray-500 rounded-xl px-3 py-1  outline-none" />
   {/*  now whatever is writeened goes into the setTodo */}
   <button type='submit' className='bg-red-500 text-white  mx-2 p-2 font-bold rounded-lg'  >  Add</button>
   </form>
   
   
   </>
  )
}

export default TodoForm
