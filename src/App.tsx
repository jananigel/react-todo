import './App.css';
import TodoForm from './components/todo-form/todo-form';
import TodoList from './components/todo-list/todo-list';
import { TodoProvider } from './contexts/todo-context';

function App() {
  return (
    <>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </>
  );
}

export default App;
