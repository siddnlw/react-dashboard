import './SideBar.css'
import Logo from '../../../assets/images/logo.png';
import { Outlet, Link } from "react-router-dom";



function SideBar() {

  function change_page_active(link){
    var sidebar_link = document.querySelector('.list-group-item');
    // sidebar_link.classList.remove('active');
    // alert(link);
    // var active_sidebar_link = document.querySelector(`${link}`);
    sidebar_link.classList.add('active');
    // alert(link);
  }
  
  return (
    <div className="SideBar">
      <img className='logo' src={Logo} alt="logo" srcSet="" />
      <div className="sidebar-menu-container">
        <ul>
          <li className='list-group-title'>dashboard</li>
          <Link onClick={() => change_page_active('dashboard-link')} className='sidebar-link' to="/">
            <li className='list-group-item dashboard-link active'>
              <i className="fas fa-home"></i>
              dashboard
            </li>
          </Link>
          <li className='list-group-title'>Customer</li>
          <Link onClick={() => change_page_active('view-customers-link')} className='sidebar-link' to="/view-customers">
          <li className='list-group-item view-customers-link'>
            <i className="fas fa-users"></i>
            View customer
          </li>
          </Link>
          <Link onClick={() => change_page_active('add-customer-link')} className='sidebar-link' to="/add-customer">
          <li className='list-group-item add-customer-link'>
            <i className="fas fa-user-plus"></i>
            Add Customer
          </li>
          </Link>
          <Link onClick={() => change_page_active('customer-order-link')} className='sidebar-link' to="/customer-order">
          <li className='list-group-item customer-order-link'>
            <i className="fas fa-shopping-bag"></i>
            Customer Order
          </li>
          </Link>
          <li className='list-group-title'>User</li>
          <Link onClick={() => change_page_active('view-users-link')} className='sidebar-link' to="/view-users">
          <li className='list-group-item view-users-link'>
            <i className="fa fa-users"></i>
            View Users
          </li>
          </Link>
          <Link onClick={() => change_page_active('add-user-link')} className='sidebar-link' to="/add-user">
          <li className='list-group-item add-user-link'>
            <i className="fas fa-user-plus"></i>
            Add User
          </li>
          </Link>
          <Link onClick={() => change_page_active('user-order-link')} className='sidebar-link' to="/user-order">
          <li className='list-group-item user-order-link'>
            <i className="fa fa-shopping-bag"></i>
            User Order
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
