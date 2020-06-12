import React from "react";
import PropTypes from "prop-types"

const styles = {
    li: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: '0.5rem 1rem',
        border: "1px solid #ccc",
        borderRadius: "4px",
        marginBottom: "0.5rem"
    },
    input: {
        marginRight: "1rem"
    }
}

function TodoItem({ todoItem, index, onChangeTodoItemSelection }) {
    const classes = []

    if(todoItem.completed) classes.push("todo-is-done");

    return (
        <li style={styles.li}>
            <span className={classes.join(" ")}>
                <input
                    type="checkbox"
                    capture={todoItem.completed}
                    style={styles.input}
                    className={"todo-item-checkbox"}
                    onChange={() => onChangeTodoItemSelection(todoItem.id)}
                />
                <strong>{ index + 1 }</strong>
                &nbsp;
                {todoItem.title}
                &nbsp;
                {todoItem.description}
            </span>

            <button className={"remove-btn"}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todoItem: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem
