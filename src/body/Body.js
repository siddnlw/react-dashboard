import './body.css';
import Dashboard from '../pages/dashboard/Dashboard';
import ViewCustomer from '../pages/view-customer/ViewCustomer';
import { Routes, Route } from "react-router-dom";
import Error404 from '../pages/404/Error404';
import Footer from '../components/footer/Footer.js';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';

function Body() {
  return (
    <div className="Body">
      <Breadcrumbs />
      <div className="content">
        <Routes>
          <Route index path='/' element={<Dashboard />} />
          <Route path="view-customers" element={<ViewCustomer />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Body;
