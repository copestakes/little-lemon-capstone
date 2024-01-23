import logo from './images/Logo.svg';
import './App.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <ul>
            <li>
              <a href="#/">Home</a>
            </li>

            <li>
              <a href="#/">About</a>
            </li>

            <li>
              <a href="#/">Menu</a>
            </li>

            <li>
              <a href="#/">Reservations</a>
            </li>

            <li>
              <a href="#/">Order Online</a>
            </li>

            <li>
              <a href="#/">Login</a>
            </li>
          </ul>
        </nav>
      </header>

      <footer>
        <img src={logo} />
        <div>
          <nav>
            <ul>
              <li>
                <a href="#/">Home</a>
              </li>

              <li>
                <a href="#/">About</a>
              </li>

              <li>
                <a href="#/">Menu</a>
              </li>

              <li>
                <a href="#/">Reservations</a>
              </li>

              <li>
                <a href="#/">Order Online</a>
              </li>

              <li>
                <a href="#/">Login</a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <p>Contact</p>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>

        <div>
          <p>Social Media</p>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
      </footer>
    </>
  );
}

export default App;
