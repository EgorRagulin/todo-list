import React from "react";
import PropTypes from "prop-types"

function LocalStorageService(key) {
    return {
        setTodoItemsInLocalStorage: function(todoItems) {
            localStorage.setItem(key, JSON.stringify(todoItems));
        },
        getTodoItemsFromLocalStorage: function() {
            return JSON.parse(localStorage.getItem(key));
        }
    }
}

LocalStorageService.propTypes = {
    key: PropTypes.string.isRequired
}

export default LocalStorageService

