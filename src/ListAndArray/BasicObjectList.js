function BasicObjectList(props) {
  const todoData = props.todoData;
  const todoList = todoData.map((todo) => <li key={todo.id}>{todo.name}</li>);

  return <>
    <ul>{todoList}</ul>
  </>;
}

export default BasicObjectList;
