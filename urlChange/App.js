import React from 'react';
import TodoList from './TodoList';
import Footer from './Footer';
import Header from './Header';

    class App extends React.Component {
        state = {
            todos: [{
                text: 'hungry',
                isDone: false,
                id: 1000
            },
            {
                text: 'hungry',
                isDone: false,
                id: 1000
            },
            {
                text: 'hungry',
                isDone: false,
                id: 1000
            }],
            editingId: null
        }


    addTodo = text => {
        this.setState({
            todos: [...this.state.todos, {
                text : text,
                isDone: false,
                id: Date.now()
            }]
        });
    }

    render() {

        return(

        )

    }

};
