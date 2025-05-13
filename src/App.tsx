// import React from 'react';
import './App.css';
import * as React from "react";
import TodoList from "./TodoList.tsx";
// import ClassCom from './ClassCom.tsx'
// import FuncCom from './FuncCom.tsx';

const App: React.FC = () => {
    // 예시 객체
    const person = {
        name: '1ch',
        age: 30,
        height: 160
    };

    // 일반적 방식
    /*
    const name = person.name;
    const age = person.age;
    const height = person.height;
     */

    // 구조 분해 할당 방식 - 인덱스 별로 값 할당
    const { name, age, height } = person;

    console.log(name);
    console.log(age);
    console.log(height);
    // let title = "To Do List"

    // 일반적 방식
    /*
    const colors = ['red', 'green', 'blue'];
    const red = colors[0];
    const green = colors[1];
    const blue = colors[2];

    console.log(red);
    console.log(green);
    console.log(blue);
    */

    // 구조 분해 할당 (Destructing)
    const colors = ['red', 'green', 'blue'];
    const [red, green, blue] = colors;

    console.log(red);
    console.log(green);
    console.log(blue);

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