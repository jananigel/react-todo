import Todo from "./todo.interface.tsx";

export default interface TodoContextType {
  todos: Todo[];
  addTodo: (name: string) => void;
  deleteTodo: (index: string) => void;
  toggleTodo: (index: string) => void;
}