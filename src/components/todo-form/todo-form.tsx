const TodoForm = () => {

  const onSubmit = () => {
    console.log('form submit');
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" />
      </form>
    </>
  )
}

export default TodoForm;