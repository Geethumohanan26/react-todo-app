// import React,{useState,useEffect} from 'react';

// import { useInsertionEffect } from "react";

// function Counter() {
//   const [count,setCount]=useState(0)
//   useEffect(()=>{
//     console.log('Mounting...');

//   })

  
  
//   return (
//     <div>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//       <h1>Hello I am component {count}</h1>
//     </div>
//   );
// }

// export default Counter;

// import React,{useState,useEffect} from "react";
// function Counter(){
//   const[count,setCount]=useState(0)
//   useEffect(()=>{
//     console.log('Mounting');
//     return()=>{
//       console.log('Unmounting')
// });
//   },[]);
//   return(
//     <div>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//       <h1>Hello I am component{count}</h1>
//     </div>
//   );
// }
// export default Counter;




// import React,{useState,useEffect}  from 'react';



// function Counter() {
//   const[count,setCount]=useState(0)
// const[count2,setCount2]=useState(0)
  
//   useEffect(()=>{
//     console.log('Mounting....');
//     console.log('Unmounting...');
//     console.log('Updating...+count');
//   },[count])
//   return (
//     <div>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//       <h1>Hello I am component{count}</h1>
//       <button onClick={()=>setCount2(count2+1)}>Increment</button>
//       <h1>Hello I am component2{count2}</h1>
//     </div>
//   );
// }

// export default Counter;



// import React, { useState,useEffect } from 'react'

// function Counter() {
//   const[count,setCount]=useState(0)
//   useEffect(()=>{
//     console.log('Mounting...');

// //   })
// //   return()=>{
// //     console.log('Unmounting...');
  
  
// // },[count];
// }
//   return (
//     <div>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//       <h1>Hello I am component{count}</h1>
//     </div>
//   );
// }

// export default Counter;



import React from 'react'

function Counter({title,count}) {
  return (
    <div>
      <h1>{title} {count}</h1>
    </div>
  );
}

export default Counter;
