import React from "react";
import TodoList from "./todo/TodoList";
import Context from "./context";
import TodoListIsEmpty from "./todo/TodoListIsEmpty";
import CreateTodoItem from "./todo/CreateTodoItem";
import LocalStorageService from "./local-storage/LocalStorageService"


function App() {
    const localStorage = LocalStorageService("to-do-items")

    const [todoItems, setTodoItems] = React.useState(
        localStorage.getTodoItemsFromLocalStorage()
    )

    function toggleTodoItem(id) {
        let toggledTodoItems = todoItems.map(todoItem => {
            if(todoItem.id === id) todoItem.completed = !todoItem.completed
            return todoItem
        })

        localStorage.setTodoItemsInLocalStorage(toggledTodoItems)

        setTodoItems(toggledTodoItems)
    }

    function createTodoItem(title, description) {
        const id = generateUniqueId()

        let newTodoItem = todoItems ?
            todoItems.concat([{
                id,
                title,
                description,
                completed: false
            }]) :
            [{
                id,
                title,
                description,
                completed: false
            }]

        localStorage.setTodoItemsInLocalStorage(newTodoItem)

        setTodoItems(newTodoItem)
    }

    function removeTodoItem(id) {
        let filtredTodoItems = todoItems.filter(todoItem => todoItem.id !== id)

        localStorage.setTodoItemsInLocalStorage(filtredTodoItems)

        setTodoItems(filtredTodoItems)
    }

    function generateUniqueId() {
        let maxTodoItemId = 0

        if (todoItems && todoItems.length > 0) {
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

                { (!todoItems || todoItems.length === 0) ?
                    <TodoListIsEmpty /> :
                    <TodoList todoItems={todoItems} onChangeTodoItemSelection={toggleTodoItem}/>
                }

                <CreateTodoItem createTodoItem={createTodoItem}></CreateTodoItem>
            </div>
        </Context.Provider>
    );
}

export default App;
