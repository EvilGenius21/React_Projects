import { useEffect, useState } from 'react'
import {TodoProvider,Todocontext,useTodo} from './Context/Todocontext'
import TodoForm from './Components/TodoForm'
import Items from './Components/Items'

function App() {
const[todos,setTodos]=useState([]) // ab se jo todos hai ye array hai saare todo ki jo apan likhege
// defining all functionality
// use to add new task requires  msg
 const addtodo=(todo)=>{
  // ye jo todo ki value hai  vo apan ko form se mili hai || form ki input field se
  setTodos(prev=>[...prev,{id:Date.now(),...todo}])
  // now in above agar mei direct setTodos ko todo kr deta toh saari purani value destroy ho jati isliye prev callc=back aur destructing ka use kar ke purani value bhi rakhi nayi assign ki aur id dusri ho data .now leli
 }

 //use to update the do requires id and new msg
 const edittodo=(id,todo)=>{
  setTodos(prev=>prev.map((prevtodo)=>prevtodo.id===id ? todo:prevtodo))
 }
 // now in above apna ne map use kiya to ittreate every value of the array todos checked ki uski id apan jo id dhund rahe hai uske equal hai kay agr hai so just edit id aur nhi just as it is

 // use to remove task
 const removetodo=(id)=>{
  setTodos(prev=>prev.filter((prevto)=>prevto.id !== id))
 }
 // now in above apne ne fliter use kiya aur jo value id ke euqal nhi hai ussko anne diya jo same hai usko nhi aane diya

 // use to toggle if task is completed or not
 const toggle=(id)=>{
  setTodos(prev=>prev.map((prevtodo)=>prevtodo.id===id? {...prevtodo,completed:!prevtodo.completed} :prevtodo))

 }


 // now we will bring local storage into the picture 
 // firstly we will  get the dataq locally saved in local storage

useEffect(()=>{
   const todos=JSON.parse( localStorage.getItem("todos"))
  // geeting the data in parse format to prevent the strcture
  if(todos ){
    setTodos(todos)
  }
  // checking if there ar anytodo
},[])
// will get activated if todos in present in local storage

useEffect(()=>{
localStorage.setItem('todos',JSON.stringify(todos))
},[todos])



 // yaad rakna apn ko toggle karna hai na ki true sirf rehene dena hai
  return (
    <>
    {/*  ab sabse main part ki ham  Provider use kar ke vo saari props ya value batege jiska access sabko milega */}
    <TodoProvider value={{todos,addtodo,removetodo,edittodo,toggle}}> 
    
    <div className=" w-full h-screen flex justify-center items-center flex-wrap bg-purple-500 " > 
    <div className=" bg-gray-700 max-w-2xl w-full mx-auto  rounded-2xl py-3 px-4   fixed top-20  text-white shadow-lg" > 
     <h1 className=" text-red-500  text-center font-bold  text-xl "> Manage Your Task</h1>
      <div className="mb-5">
        <TodoForm />
      </div>
      <div className=" flex flex-wrap gap-y-1">
      {/*  now items will come out in loop one after another adding one by one */}

      {todos.map((todo)=>(
        // now it is important to give div a key as many div will be created so for rect to differ we need to assign them key
        <div key={todo.id} className='w-full'>
                <Items todo={todo}/>
        </div>
      ))}
      </div>
    </div>
    </div>
    </TodoProvider>
    </>
  )
}

export default App
// backdrop-blur-sm 
