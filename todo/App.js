class App extends React.Component {
    state = {
        todos: [
            {
                text: 'hungry',
                isDone: false,
                id: 1000
            },
            {
                text: 'tired',
                isDone: false,
                id: 1001
            },
            {
                text: 'happy',
                isDone: false,
                id: 1002
            },
        ],
        editingId: null
    };

    addTodo = text => {
        this.setState({
            todos: [...this.state.todos, {
                text: text,
                isDone: false,
                id: Date.now()
            }]
        });
    };

    deleteTodo = id => {
        const newTodos = [...this.state.todos];
        const deleteIndex = newTodos.findIndex(v => v.id === id);
        newTodos.splice(deleteIndex, 1);
        this.setState({
            todos: newTodos
        });
    };

    editTodo = (id) => {
        this.setState({
            editing: id
        });
    };

    saveTodo = (id, newText) => {
        const newTodos = [...this.state.todos];
        const editIndex = newTodos.findIndex(v => v.id ===id);
        newTodos[editIndex] = Object.assign({}, newTodos[editIndex], {
            text: newText
        });
        this.setState({
            todos: newTodos,
            editingId: null
        });
    };

    cancelEdit = () => {
        this.setState({
            editingId: null
        });
    };

    toggleTodo = id => {
        const newTodos = [...this.state.todos];
        const editIndex = newTodos.findIndex(v => v.id === id);
        newTodos[editIndex] = Object.assign({}, newTodos[editIndex], {
            isDone: !newTodos[editIndex].isDone
        });
        this.setState({
            todos: newTodos
        });
    };

    toggleAll = () => {
        const newDone = this.state.todos.some(v => !v.isDone);
        const newTodos = this.state.todos.map(v =>
            Object.assign({}, v, {
            isDone: newDone
            })
            );
        this.setState({
            todos: newTodos
        });
    }

    clearCompleted = () => {
        const newTodos = this.state.todos.filter(v => !v.isDone);
        this.setState({
            todos: newTodos
        });
    }

    render() {
        const {
            todos,
            editingId
        } = this.state;

        const activeLength = todos.filter(v => !v.isDone).length
        const hasCompleted = todos.findIndex(v => v.isDone) > 0;

        return(
            <div className="todo-app">
                <Header addTodo = {this.addTodo}
                        toggleAll = {this.toggleAll}
                        isAllDone = {todos.every(v => v.isDone)}
                />
                <TooList todos = {todos}
                         editingId = {editingId}
                         deleteTodo = {this.deleteTodo}
                         saveTodo = {this.saveTodo}
                         editTodo = {this.editTodo}
                         cancelEdit = {this.cancelEdit}
                         toggleTodo = {this.toggleTodo}
                />
                <Footer activeLength = {activeLength}
                        clearCompleted = {this.clearCompleted}
                        hasCompleted = {hasCompleted}
                />
            </div>
        );

    }


};

export default App;




