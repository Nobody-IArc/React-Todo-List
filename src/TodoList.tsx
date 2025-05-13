import * as React from "react";
import './App.css';
import {useState} from "react";

type Todo = {
    id: number;
    text: string;
    isDone: boolean;
}

// interface MyComponentProps {
//     title: string;
// }

// const TodoList: React.FC<MyComponentProps> = ({title}) => {
//     return (
//         <div className = 'container'>
//             <h1>{title}</h1>
//         </div>
//     )
// }

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: 'Coffee', isDone: false },
        { id: 2, text: 'Game', isDone: false },
        { id: 3, text: 'Study', isDone: false },
    ]);
    return (
        <div>
            <h1 className='titlebk'>Today</h1><p></p>
            <div className='container'>
                <div className='board'>
                    <ul>
                        <li>{todos[0].text}</li>
                        <li>{todos[1].text}</li>
                        <li>{todos[2].text}</li>
                    </ul>
                </div>
            </div>
        </div>
        // <div className = "container">
        //     <h1>Today</h1>
        //     <div>
        //         <ul>
        //             <li>
        //                 {todos[0]}
        //             </li>
        //             <li>
        //                 {todos[1]}
        //             </li>
        //             <li>
        //                 {todos[2]}
        //             </li>
        //         </ul>
        //     </div>
        // </div>
    )
}

export default TodoList;