import './styles/components/App.scss';

import logoSvg from './assets/logo.svg';

import Header from './components/Header';
import Main from './components/Main';
import DecorElement from './components/DecorElement';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper-app">
      <div className="wrapper-logo">
        <img className="image-logo" src={logoSvg} alt="" />
      </div>
      <Header />
      <Main />

      <DecorElement number="02" />

      <Footer />
    </div>
  );
}

export default App;
