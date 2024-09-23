import { TODO_ACTIONS } from "../actions/todo-actions";

const TodoReducer = (state: any, action: { type: string, payload: any}) => {
  const { type, payload } = action;

  switch (type) {
    case TODO_ACTIONS.Add:
      return {
        ...state,
        todos: payload.todos,
      };
    case TODO_ACTIONS.Toggle:
      return {
        ...state,
        todos: payload.todos,
      };
    case TODO_ACTIONS.Delete:
      return {
        ...state,
        todos: payload.todos,
      };
    default:
      console.warn('Unknown type of Todo action');
      return {
        ...state,
      };
  };
}

export default TodoReducer;