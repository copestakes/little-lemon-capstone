import Nav from './components/Nav';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
import logo from './images/Logo.svg';
import './App.css';

function App() {
  return (
    <>
      <header>
        <Nav />
        <Main />
        <Menu />
        <Footer />
      </header>
    </>
  );
}

export default App;
