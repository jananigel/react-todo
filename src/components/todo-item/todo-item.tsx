import { useTodo } from "../../contexts/todo-context";
import Todo from "../../core/interfaces/todo.interface.tsx";

const TodoItem = ({ name, isCompleted, id }: Todo) => {

  const { deleteTodo, toggleTodo } = useTodo();

  const onDeleteClick = () => {
    deleteTodo(id);
  }

  const onIsCompleteChanged = () => {
    toggleTodo(id);
  }

  return (
    <>
      <div className="item flex">
        <div className="left-area">
          <label>
            <input type="checkbox" onChange={ onIsCompleteChanged } defaultChecked={ isCompleted } />
            <span className="name">{ name }</span>
          </label>
        </div>
        <div className="right-area">
          <button onClick={onDeleteClick}>Delete</button>
        </div>
      </div>
    </>
  )
}

export default TodoItem;