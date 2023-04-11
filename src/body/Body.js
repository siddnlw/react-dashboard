import './body.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from '../pages/dashboard/Dashboard';
import GreetingCards from '../pages/greeting-cards/GreetingCards';
import ViewCustomer from '../pages/view-customer/ViewCustomer';
import Error404 from '../pages/404/Error404';
import Footer from '../components/footer/Footer.js';

function Body() {
  return (
    <div className="Body">
      <div className="content">
        <Routes>
          <Route index path='/' element={<Dashboard />} />
          <Route path="view-customers" element={<ViewCustomer />} />
          <Route path="greeting-cards" element={<GreetingCards />} />
          <Route path="*" element={<Error404 />} /> 
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Body;
