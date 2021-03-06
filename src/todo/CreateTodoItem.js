import React, {useState} from "react";
import PropTypes from "prop-types"
import "./CreateTodoItemForm.css"

function useInput(defaultValue = "") {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(""),
        value: () => value
    }
}

function CreateTodoItem({ createTodoItem }) {
    const title = useInput("")
    const description = useInput("")

    function submitHandler(event) {
        event.preventDefault()

        let titleValue = title.value()
        let descriptionValue = description.value()

        if(titleValue.trim() && descriptionValue.trim()) {
            createTodoItem(titleValue, descriptionValue)
            title.clear()
            description.clear()
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Title:</label>
            <input {...title.bind} placeholder="Enter title" />
            <label>Description:</label>
            <input {...description.bind} placeholder="Enter description" />
            <button type={"submit"}>Add to-do</button>
        </form>
    )
}

CreateTodoItem.propTypes = {
    createTodoItem: PropTypes.func.isRequired
}

export default CreateTodoItem
