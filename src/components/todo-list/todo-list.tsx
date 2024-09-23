import { useTodo } from '../../contexts/todo-context';
import Todo from '../../core/interfaces/todo.interface.tsx';
import TodoItem from '../todo-item/todo-item';

const TodoList = () => {
  const { todos } = useTodo();
  return (
    <>
      {todos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          name={todo.name}
          isCompleted={todo.isCompleted}
          id={todo.id}
        />
      ))}
    </>
  );
};

export default TodoList;
