import { useContext } from "react";
import { createContext } from "react";

 export const Todocontext=createContext({  // apan  yaha ke parameters of context provider ko pass kar sakte ho
// apan ne paramter  as object liya hai
todos:[
//   { // har do jo naya aai ga vo is array mei add hota jaega
//  id:1,
//  todo:"msg of todo",
//  completed:false,
// }
],// ye toh saare to do (task ) aate jae ge vo hai
// ab functiionality
addtodo:(todo)=>{},// add new task aur apne ne yaha bata diya hai ki ye ek method hoga || id chaiye new task ko assign karne ke liye
removetodo:(id)=>{}, // remove ke liye id chaiye koi dusra remove na ho jae
edittodo:(id,todo)=>{}, // id ,msg chaiye jo chane karna hai
toggle:(id)=>{}
}); 

 export const TodoProvider=Todocontext.Provider

  export const useTodo=()=>{
    return useContext(Todocontext)
  }
   // we wrote usetodo hook just to ensure that whatever parameters are required by the user will be filterd by this hook


