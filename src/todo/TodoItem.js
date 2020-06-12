import React from "react";
import PropTypes from "prop-types"

function TodoItem({ todoItem, index }) {
    return <li><strong>{ index + 1 }</strong> {todoItem.title} | {todoItem.description}</li>
}

TodoItem.propTypes = {
    todoItem: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem
