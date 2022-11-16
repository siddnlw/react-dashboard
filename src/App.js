import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/style.css';
import Header from './components/header/Header.js';
import Body from './body/Body.js';
import Login from './pages/login/desgin1/Login.js';
import Lockscreen from './components/lockscreen/Lockscreen.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {window.location.pathname !== "/login" ? (
          <div>
            <Header />
            <Body />
          </div>
        ) : null}
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
