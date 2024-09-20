const TodoItem = () => {
  return (
    <>
      <div className="item">
        <div className="left-area">
          <p className="name"></p>
        </div>
        <div className="right-area">
          <button>Complete</button>
          <button>Delete</button>
        </div>
      </div>
    </>
  )
}

export default TodoItem;