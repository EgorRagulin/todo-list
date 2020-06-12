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

function TodoItem({ todoItem, index }) {
    return (
        <li style={styles.li}>
            <span>
                <input type="checkbox" style={styles.input}/>
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
