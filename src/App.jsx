//useState
//  import {useState} from 'react';
// import "./App.css";

// function App() {
//     const[tasks,setTasks]=useState([]);
//     const[task,setTask]=useState("");
//     const addTask=()=>{
//         console.log(task);
//         setTasks([...tasks,task]);
//         setTask("");
//     }
//     const deleteTask=(index)=>{
//       const updatedTasks = tasks.filter((_,i)=>i !==index);
//       setTasks(updatedTasks);
//     };
//   return (
//     <div>
//       <h1>To Do List</h1>
//       <div className='inputbox'>
//         <input type='text'placeholder='Enter task' value={task}onChange={(e)=>setTask(e.target.value)}/>
//         <button onClick={addTask}>Add</button>

//       </div>
//       <div className='tasks'>
//         {tasks.map((t,i)=>(
//             <div className='task' key={i}>
//                 <input type='checkbox'/>
//                 <span>{t}</span>
//                 <button onClick={()=>deleteTask(i)}>Delete</button>

//             </div>
//         ))}

//       </div>
//     </div>
//   );
// }

// export default App;
// // 


// UseEffect


// import {useState,useEffect } from 'react';


// function App(){
//   const data={
//     Kerala:"Trivandrum",
//     Karnataka:"Bengaluru",
//     Tamilnadu:"Chennai"
//   };
//   const[selectedState,setSelectedState]=useState("Kerala")
//   const[selectedStateCapital,setSelectedStateCapital]=useState("Trivandrum")
//   const changeState=(e)=>{
//     setSelectedState(e.target.value);
//   }
//     useEffect(()=>{
//       setSelectedStateCapital(data[selectedState]);
// },[selectedState]);
  

     
//     return(
//       <div>
//         <select onChange={changeState}>
//           <option value='Kerala'>Kerala</option>
//            <option value='Karnataka'>Karnataka</option>
//         </select>
//         <p>selectedState is:{selectedState}</p>
//         <p> capital of selectedState:{selectedStateCapital}</p>
//       </div>
//     );
    
  
  
//   }
// export default App;



import {useState} from 'react';
import "./App.css";

function App() {
  const[tasks,setTasks]=useState([])
  const[task,setTask]=useState("")
  const addTask=()=>{
    console.log(task);
    setTasks([...tasks,task])
    setTask("")
  };
  const updateTask=(index)=>{
    const updatedTasks=[...tasks];
    updatedTasks[index]=task;
    setTasks(updatedTasks);
  };
  const deleteTask=(index)=>{
    const updatedTasks=tasks.filter((_,i)=>i !==index)
    setTasks(updatedTasks)
  }
  return (
    <div className='App'>
      <h1>To Do List</h1>
      <div className='inputbox'>
        <input type='text'placeholder='Enter task' value={task}onChange={(e)=>{setTask(e.target.value)}}/>
        <button onClick={addTask}>Add</button>
      </div>
      <div className='tasks'>
        {tasks.map((t,i)=>(
          <div className='task' key={i}>
            <input type='checkbox'/>
            <span>{t}</span>
            <button onClick={()=>updateTask(i)}>Update</button>
            <button onClick={()=>deleteTask(i)}>Delete</button>

          </div>
        ))}

      </div>
      
    </div>
  );
}

export default App;
