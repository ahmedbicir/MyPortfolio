// import React, { useState, useEffect } from 'react'
// // import ahmed from '../image/CIRDAY.jpg';


// function Counter() {
//     const [state, updateState] = useState({
//         count: 0,

       
//     })
  

//     const handleAddition = () => {
//         updateState({
//             ...state, count: state.count + 1,

//         })
//     }

//     const handleMinus = () => {
//         updateState({
//             ...state, count: state.count - 1
//         })
//     }

//     // hassan
//     const [sh, UpdateSH] = useState({
//         hassan: 0,

       
//     })
  

//     const handleAdd = () => {
//         UpdateSH({
//             ...sh, hassan: sh.hassan + 1,

//         })
//     }

//     const handleM= () => {
//         UpdateSH({
//             ...sh, hassan: sh.hassan - 1
//         })
//     }

    
//     return (
//         <div className='parent'>
//             <section className="sectOne">
//                 <h1>Farmaajo</h1>

//             <div className='count'>{state.count}</div>

//             <div className='btn'>
//                 <button onClick={handleAddition} className="btn1">+</button>
//                 <button onClick={handleMinus} className="btn2">-</button>
//             </div>
          
//             </section>

//             <section className="sectOne">
//             <h1>Hassan SH </h1>


//                     <div className='count'>{sh.hassan}</div>

//                     <div className='btn'>
//                         <button onClick={handleAdd} className="btn1">+</button>
//                         <button onClick={handleM} className="btn2">-</button>
//                     </div>

//             </section>
//         </div>
//     )
// }

// export default Counter
