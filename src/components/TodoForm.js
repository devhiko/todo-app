import '../styles/TodoForm.css'

const TodoForm = () => {
  return (
    <form className="todo-form">
      <input type="text" required placeholder="What should be done" />
      <input type="submit" value="Add Todo" />
    </form>
  );
}

export default TodoForm;