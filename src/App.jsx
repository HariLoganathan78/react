import "./style.css";

function App() {
  return (
    <div className="hero">

      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="content">
        <h1>
          Hari <br />
          Loganathan
        </h1>

        <h2>Software Developer</h2>

        <div className="social-icons">
          <a href="https://github.com/HariLoganathan78">🐱</a>
          <a href="#">💼</a>
          <a href="#">📧</a>
        </div>
      </div>

      <div className="arrow">⌄</div>

    </div>
  );
}

export default App;
