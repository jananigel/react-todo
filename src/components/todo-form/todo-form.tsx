import { useState } from 'react';
import { useTodo } from '../../contexts/todo-context';

const TodoForm = () => {
  const [todoName, setTodoName] = useState('');
  const { addTodo } = useTodo();
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(todoName);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          placeholder="Todo name here..."
        />
      </form>
    </>
  );
};

export default TodoForm;
