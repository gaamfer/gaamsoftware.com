import logo from './logo.svg';
import './App.css';
import { fetchCategories,fetchPosts,fetchProjects } from './services/api'; // Import API

function App() {
  return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <button onClick={fetchCategories}>Fetch Categories</button>
          <button onClick={fetchPosts}>Fetch Posts</button>
          <button onClick={fetchProjects}>Fetch Projects</button>
        </div>
      </header>
    </div>
  );
}

export default App;
