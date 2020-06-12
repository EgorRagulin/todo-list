import React, {useState} from "react";
import PropTypes from "prop-types"

const styles = {
    form: {
    }
}

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
        <form style={styles.form} onSubmit={submitHandler}>
            <input {...title.bind} />
            <input {...description.bind} />
            <button type={"submit"}>Add to-do</button>
        </form>
    )
}

CreateTodoItem.propTypes = {
    createTodoItem: PropTypes.func.isRequired
}

export default CreateTodoItem
