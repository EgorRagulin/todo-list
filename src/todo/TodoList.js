import React from "react";
import PropTypes from "prop-types"
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: "none",
        margin: 0,
        padding: 0,
    }
}

function TodoList(props) {
    return (
        <ul style={styles.ul}>
            { props.todoItems.map((todoItem, index) => {
                return <TodoItem todoItem={todoItem} key={todoItem.id} index={index} onChangeTodoItemSelection={props.onChangeTodoItemSelection}/>
            }) }
        </ul>
    )
}

TodoList.propTypes = {
    todoItems: PropTypes.arrayOf(Object).isRequired
}

export default TodoList
