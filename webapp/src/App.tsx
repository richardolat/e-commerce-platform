import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Welcome to My E-Commerce Platform</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <p>Start building your e-commerce platform here!</p>
        {/* Add components like ProductList, Navbar, Footer, etc. */}
      </main>
      <footer>
        <p>&copy; 2024 My E-Commerce Platform</p>
      </footer>
    </div>
  );
}

export default App;
