import React from 'react';
import Todo from './Todo';


class TodoList extends React.Component {
    render() {
        const {
            todos,
            deleteTodo,
            saveTodo,
            editTodo,
            editingId,
            cancelEdit,
            toggleTodo
        } = this.props

        const TodoList = todos.map(({id, text, isDone}) => (
            <Todo text = {text}
                  isDone = {isDone}
                  key = {id}
                  isEditing = {editingId === id}
                  cacelEdit = {cancelEdit}
                  editTodo = {() => editTodo(id)}
                  deleteTodo = {() => deleteTodo(id)}
                  saveTodo = {(text) => saveTodo(id, text)}
                  toggleTodo = {() => toggleTodo(id)}
            />
        ))

        return(
            <div className="todo-app__main">
                <ul className="todo-list">
                    {TodoList}
                </ul>
            </div>
        )


    }
}

export default TodoList;


1.