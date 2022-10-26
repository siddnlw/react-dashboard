import './body.css';
import Dashboard from './dashboard/Dashboard';
import { Routes, Route } from "react-router-dom";
import Error404 from '../404/Error404.js';

function Body() {
  return (
    <div className="Body">
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="view-customers" element={<div />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default Body;
