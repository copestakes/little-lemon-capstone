import Nav from './Nav';
import Header from './Header';
import BookingForm from './BookingForm';
import Main from './Main';
import Menu from './Menu';
import Footer from './Footer';
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
