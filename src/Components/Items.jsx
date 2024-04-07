import React, { useState } from 'react'
import { useTodo } from '../Context/Todocontext'


function Items({ todo }) {

  const [editable, seteditable] = useState(false)
  // to know if todois editable or not
  const [todoMsg, settodoMsg] = useState(todo.todo)
  // to know if the msg is changed or not

  const { edittodo, toggle, removetodo } = useTodo()

  const isupdateable = () => {
    edittodo(todo.id, { ...todo, todo: todoMsg })

    // phele liya todo aur usko chnage kar diya/ edit kar diya ab usko wapas uneditable bana hai

    seteditable(false)
    // now above function changes the current state to do and make it editable  and takes edittodo and changes it msg to new mesg 
  }
  const iscompleted = () => {
    toggle(todo.id)

  }



  return (
    <>
      <div className={`  my-3 font-mono  gap-x-2 bg-slate-300 rounded-xl p-2 shadow-lg  inline-flex w-full  text-black ${todo.completed ? "bg-yellow-200" : "bg-slate-300"} `}>
        {/*  input checkbox */}
        <input type="checkbox" className='cursor-pointer' checked={todo.completed} onChange={iscompleted} />
        {/* input text  */}
        <input type="text " className={` border outline-none   w-full rounded-2xl ${todo.completed ? "line-through" : ' '} 
        ${editable ? "  border-black border-dotted" : "  border outline-none"}   ${todo.completed ? "bg-yellow-200" : "bg-slate-300"} ${todo.completed ? "line-through" : " "} `} value={todoMsg} readOnly={!editable} onChange={(e) => settodoMsg(e.target.value)} />
        {/* Edit button  */}
        <button className={`${editable ? 'bg-red-600' : ' bg-blue-500'} inline-flex p-3 w-10 h-10  rounded-lg justify-center items-center `}
          onClick={() => {
            if (todo.completed) return;

            if (editable) {
              isupdateable();
            } else seteditable((prev) => !prev);
          }} disabled={todo.completed}> {editable ? "📁" : "✏️"}</button>
        {/* Delete button */}
        <button className='inline-flex p-3 w-10 h-10  rounded-lg justify-center items-center bg-white' onClick={() => { removetodo(todo.id) }}>  ❌</button>

      </div>
    </>
  )
}

export default Items
