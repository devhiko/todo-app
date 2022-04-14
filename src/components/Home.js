import '../styles/Home.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Home = () => {
  return (
    <div className="Home">
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default Home;