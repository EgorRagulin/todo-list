import React from 'react';
import TodoList from "./todo/TodoList";

function App() {
    const todoItems = [
        {id: 1, title: "todo", description: "todo something", completed: false},
        {id: 2, title: "todo", description: "todo something", completed: false},
        {id: 3, title: "todo", description: "todo something", completed: false},
        {id: 4, title: "todo", description: "todo something", completed: false},
    ]

    return (

        <div className='wrapper'>
            <h1>My todo-list</h1>

            <TodoList todoItems={todoItems}/>

        </div>
    );
}

export default App;
