import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import './assets/css/style.css';
import Header from './components/header/Header.js';
import Body from './components/body/Body.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
