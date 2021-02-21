import ListItem from './ListItem';

function TodoList() {
  return (
    <ul className="todo-list">
      <ListItem name="Item 1" />
      <ListItem name="Item 2" />
      <ListItem name="Item 3" />
    </ul>
  );
}

export default TodoList;
