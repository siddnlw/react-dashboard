import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/style.css';
import Header from './components/header/Header.js';
import Body from './components/body/Body.js';
import Error404 from './components/404/Error404.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Routes> */}
          <Header />
          <Body />
          {/* <Route path="*" element={<Error404 />} /> */}
        {/* </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
