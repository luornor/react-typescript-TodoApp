export interface Todo{
    id:number;
    todo: string;
    isDone: boolean;
}

// import React, { useReducer } from 'react'

// type Actions = 
//    | {type: "add",payload:string}
//    | {type: "remove",payload:number}
//    | {type: "done",payload:number};

// const TodoReducer = (state: Todo[], action:Actions) =>{
//     switch (action.type){
//         case "add"
//     }
// }
// const ReducerExample = () => {
//     const [state,dispatch] = useReducer(TodoReducer,[])
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ReducerExample
