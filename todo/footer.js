import React from 'react';
import ClassNames from 'classnames';

class Footer extends React.Component {

    render() {
        const {
            activeLength,
            hascompleted
        } = this.props;

    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeLength}</strong>{''}
                item{activeLength === 1 ? '' : 's' }{''}
                left
            </span>
            <ul className="todo-filters">
                <li><a href="">All</a></li>
                <li><a href="">Active</a></li>
                <li><a href="">Compelted</a></li>
            </ul>
            <button className= {ClassNames("todo-delete-completed", {
                    hidden: !hasCompleted
                    })}
                    onClick = {this.props.clearCompleted}
            >
                Clear Completed
            </button>
        </footer>

    )


    }


}


export default Footer;