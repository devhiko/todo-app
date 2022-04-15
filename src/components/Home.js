import { useState } from 'react';
import '../styles/Home.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Home = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="Home">
      {todos.length ?
        <TodoList todos={todos} setTodos={setTodos} />
        :
        <p style={{ color: 'wheat' }}>No Todos, have fun !</p>}
      <TodoForm setTodos={setTodos} />
    </div>
  );
}

export default Home;