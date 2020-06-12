import React from "react";
import TodoList from "./todo/TodoList";

function App() {
    const [todoItems, setTodoItems] = React.useState([
                {id: 1, title: "todo", description: "todo something", completed: false},
                {id: 2, title: "todo", description: "todo something", completed: false},
                {id: 3, title: "todo", description: "todo something", completed: false},
                {id: 4, title: "todo", description: "todo something", completed: false}
            ])

    function toggleTodoItem(id) {
        setTodoItems(
            todoItems.map(todoItem => {
                if(todoItem.id === id) todoItem.completed = !todoItem.completed
                return todoItem
            })
        )
    }

    return (

        <div className="wrapper">
            <h1>My todo-list</h1>

            <TodoList todoItems={todoItems} onChangeTodoItemSelection={toggleTodoItem}/>

        </div>
    );
}

export default App;
