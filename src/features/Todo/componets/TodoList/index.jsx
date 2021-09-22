import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
};

TodoList.defaultProps = {
    todoList: [],
};


function TodoList(props) {
    const { todoList, onTodoClick } = props;

    const handleTodoClick = (todo, idx) => {
        if (!onTodoClick) return;

        onTodoClick(todo, idx);
    }



    return (
        <ul className="todo-list">
            {todoList.map((todo, idx) => (
                <li
                    onClick={() => handleTodoClick(todo, idx)}
                    key={todo.id}
                    className={classnames({
                        "todo-item": true,
                        completed: todo.status === 'completed'
                    })
                    }>
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}


export default TodoList;