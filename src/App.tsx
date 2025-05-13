// import React from 'react';
import './App.css';
import * as React from "react";
import TodoList from "./TodoList.tsx";
// import ClassCom from './ClassCom.tsx'
// import FuncCom from './FuncCom.tsx';

const App: React.FC = () => {
    // let title = "To Do List"

    return (
        <div>
            <TodoList title = "Todays list">

            </TodoList>
        </div>
    )

    // const divStyle: React.CSSProperties = {
    //     backgroundColor: 'rebeccapurple',
    //     color: 'lightyellow',
    //     fontSize: '2em',
    //     textAlign: 'center'
    // };

//     return (
//         <div className='title'>
//             <ClassCom>
//
//             </ClassCom>
//             <FuncCom>
//
//             </FuncCom>
//             <div>
//                 ID<br></br>
//                 <input type = 'text'></input>
//             </div>
//             <div>
//                 Password<br></br>
//                 <input type = 'password'></input>
//             </div>
//             {/*JSX 에서 주석을 사용하는 방법*/}
//         {/*<div style = {divStyle}>*/}
//             <h1>{title}</h1>
//         </div>
//     );

}
export default App;