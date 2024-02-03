import Nav from './components/Nav';
import Main from './components/Main';
import Header from './components/Header';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
// import logo from './images/Logo.svg';
import './App.css';
import About from './components/About';

function App() {
  return (
    <>
      <header>
        <Nav />
        <Main />
        <Header />
        <Menu />
        <Testimonials />
        <About />
        <Footer />
      </header>
    </>
  );
}

export default App;
