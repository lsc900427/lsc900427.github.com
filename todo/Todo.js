import React from 'react';
import ClassNames from 'clasnames';

class Todo extends React.Component {
    componentDidUpdate(prevProps) {
        if(this.props.isEditing && !prevProps.isEditing) {
            this._inputDom.focus();
            this._inputDom.value = this.props.text;
        }
    }
    handleKeyDown = e => {
        const text = e.target.value;
        if(!text || e.keyCode != 13) {
            return;
        }
        this.props.saveTodo(text);
    };

    render() {
        const {
            text,
            deleteTodo,
            isEditing,
            editTodo,
            cancelEdit,
            isDone,
            toggleTodo
        } = this.props;

        return(
            <li className = {ClassNames('todo-item', {
                editing: isEditing,
                completed: isDone
            })}>
                <button className="toggle"
                        onClick = {toggleTodo}
                >
                </button>
                <div className="todo-item_view">
                    <div className="todo-item__view__text"
                         onDoubleClick = {editTodo}
                    >
                        {text}
                    </div>
                    <button
                        className="todo-item__destroy"
                        onClick={deleteTodo} />
                </div>
                <input type="text"
                       ref = {ref => this._inputDom = ref}
                       className="todo-item__edit"
                       onKeyDown = {this.handleKeyDown}
                       onBlur = {cancelEdit}
                />


            </li>

        )
    }


}

export default Todo;