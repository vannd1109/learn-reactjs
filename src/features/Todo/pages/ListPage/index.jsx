import React, { useEffect, useMemo, useState } from 'react';
import TodoList from '../../componets/TodoList';
import queryString from 'query-string';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoForm from '../../componets/TodoForm';

ListPage.propTypes = {};

function ListPage(props) {
  let initTodoList = [
    {
      id: 1,
      title: 'Reactjs',
      status: 'new',
    },
    {
      id: 2,
      title: 'Nodejs',
      status: 'completed',
    },
    {
      id: 3,
      title: 'PHP',
      status: 'new',
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStarus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);

    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);

    setFilteredStatus(params.status || 'all');
  }, [location.search]);

  const handleTodoClick = (todo, idx) => {
    // clone current array to the new one
    const newTodoList = [...todoList];

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };

    // update todo list
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowCompletedClick = () => {
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowNewClick = () => {
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  let renderedTodoList = useMemo(() => {
    return todoList.filter((todo) => (filteredStarus === 'all') | (filteredStarus === todo.status));
  }, [todoList, filteredStarus]);

  const handleTodoFormSubmit = (values) => {
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    };

    const newTodoList = [...todoList, newTodo];

    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>Todo Form</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h3>TodoList</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <button onClick={handleShowAllClick}>Show All</button>
      <button onClick={handleShowCompletedClick}>Show Completed</button>
      <button onClick={handleShowNewClick}>Show New</button>
    </div>
  );
}

export default ListPage;
