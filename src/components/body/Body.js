import './body.css';
import Dashboard from '../../pages/dashboard/Dashboard';
import ViewCustomer from '../../pages/view-customer/ViewCustomer';
import { Routes, Route } from "react-router-dom";
import Error404 from '../404/Error404.js';
import Footer from '../footer/Footer.js';

function Body() {
  return (
    <div className="Body">
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="view-customers" element={<ViewCustomer />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Body;
