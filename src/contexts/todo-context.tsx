import { createContext, useContext, ReactNode, useReducer } from 'react';
import TodoReducer from '../reducers/todo-reducer';
import Todo from '../core/interfaces/todo.interface.tsx';
import TodoContextType from '../core/interfaces/todo-context-type.interface';
import { TODO_ACTIONS } from '../actions/todo-actions';

interface Props {
  children?: ReactNode
}

const defaultContext: TodoContextType = {
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  toggleTodo: () => {},
};

const todoState = {
  todos: [] as Todo[],
};

export const TodoContext = createContext(defaultContext);

export const TodoProvider = ({ children }: Props ) => {
  const [ state, dispatch ] = useReducer(TodoReducer, todoState);

  const addTodo = (name: string) => {
    const newTodo = createTodoObj(name);

    dispatch({
      type: TODO_ACTIONS.Add,
      payload: { todos: [
        ...state.todos,
        newTodo,
      ]},
    });
  }

  const deleteTodo = (id: string) => {
    const newTodos = (Array.from(state.todos) as Todo[]).filter((todo) => todo.id !== id);
    dispatch({
      type: TODO_ACTIONS.Delete,
      payload: {
        todos: newTodos,
      },
    });
  }

  const toggleTodo = (id: string) => {
    const newTodos: Todo[] = (Array.from(state.todos) as Todo[])
    const updateTodo = newTodos.find((todo: Todo) => todo.id === id);
    if (updateTodo) {
      updateTodo.isCompleted = !updateTodo.isCompleted;
    }
    dispatch({
      type: TODO_ACTIONS.Toggle,
      payload: {
        todos: state.todos,
      },
    });
  }

  const createTodoObj = (todoName: string): Todo => {
    return {
      id: new Date().getTime().toString(),
      name: todoName,
      isCompleted: false,
    }
  }

  const providerValue = {
    todos: state.todos,
    addTodo,
    deleteTodo,
    toggleTodo,
  }

  return (
    <TodoContext.Provider value={providerValue}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodo = () => {
  const context = useContext(TodoContext);

  return context;
}