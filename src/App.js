import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/header/Header.js';
import Body from './body/Body.js';
import Login from './pages/login/desgin1/Login.js';
import Lockscreen from './components/lockscreen/Lockscreen.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/react-dashboard">
        {window.location.pathname !== "/login" ? (
          <>
            <Header />
            <Body />
          </>
        ) : null}
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
