import React from "react";
import TodoList from "./todo/TodoList";
import Context from "./context";
import TodoListIsEmpty from "./todo/TodoListIsEmpty";
import CreateTodoItem from "./todo/CreateTodoItem";

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

    function createTodoItem(title, description) {
        const id = generateUniqueId()

        setTodoItems(
            todoItems.concat([{
                id,
                title,
                description,
                completed: false
            }])
        )
    }

    function removeTodoItem(id) {
        setTodoItems(todoItems.filter(todoItem => todoItem.id !== id))
    }

    function generateUniqueId() {
        let maxTodoItemId = 0

        if (todoItems.length > 0) {
            todoItems.forEach((todoItem => {
                if(maxTodoItemId < todoItem.id) maxTodoItemId = todoItem.id
            }))
        }

        return maxTodoItemId + 1
    }

    return (
        <Context.Provider value={{ removeTodoItem }}>
            <div className="wrapper">
                <h1>My todo-list</h1>

                { (todoItems.length === 0) ?
                    <TodoListIsEmpty /> :
                    <TodoList todoItems={todoItems} onChangeTodoItemSelection={toggleTodoItem}/>
                }

                <CreateTodoItem createTodoItem={createTodoItem}></CreateTodoItem>
            </div>
        </Context.Provider>
    );
}

export default App;
