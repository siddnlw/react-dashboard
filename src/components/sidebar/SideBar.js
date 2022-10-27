import './SideBar.css'
import Logo from '../../assets/images/logo.png';
import { Outlet, Link } from "react-router-dom";



function SideBar() {

  window.onload = () => {
    const sidebar = document.querySelector('.SideBar');
    const body = document.querySelector('.Body');
    if (window.innerWidth <= 600) {
      sidebar.classList.remove('sidebar-toggle-open');
      sidebar.classList.add('sidebar-toggle-close');
      body.classList.add('SideBar-minimize');
      body.classList.remove('SideBar-maximize');
    }
    else {
      sidebar.classList.add('sidebar-toggle-open');
      sidebar.classList.remove('sidebar-toggle-close');
      body.classList.remove('SideBar-minimize');
      body.classList.add('SideBar-maximize');

    }
    if (window.location.pathname.length > 1) {
      var link = window.location.pathname.substring(1, window.location.pathname.length) + '-link';
    }
    else {
      var link = 'dashboard-link';
    }
    change_page_active(link);
  };
  window.addEventListener('resize', () => {
    const sidebar = document.querySelector('.SideBar');
    const body = document.querySelector('.Body');
    if (window.innerWidth <= 600) {
      sidebar.classList.remove('sidebar-toggle-open');
      sidebar.classList.add('sidebar-toggle-close');
      body.classList.add('SideBar-minimize');
      body.classList.remove('SideBar-maximize');

    }
    else {
      sidebar.classList.add('sidebar-toggle-open');
      sidebar.classList.remove('sidebar-toggle-close');
      body.classList.remove('SideBar-minimize');
      body.classList.add('SideBar-maximize');
    }
  });
  function toggle_sidebar() {
    const sidebar = document.querySelector('.SideBar');
    sidebar.classList.toggle('sidebar-toggle-open');
    sidebar.classList.toggle('sidebar-toggle-close');
    if (window.innerWidth >= 600) {
      const body = document.querySelector('.Body');
      body.classList.toggle('SideBar-minimize');
      body.classList.toggle('SideBar-maximize');
    }
    if (window.innerWidth <= 600) {
      const sidebarSidearea = document.querySelector('.sidebar-sidearea');
      sidebarSidearea.classList.toggle('display-toggle');
    }

  }

  function change_page_active(link) {
    
    let remove_sidebar_link_list = Array.from(document.querySelectorAll('.list-group-item'));
    for (let element of remove_sidebar_link_list) {
      element.classList.remove('active');
    }

    var sidebar_link = document.querySelector('.' + link);
    var sidebar_link_child = sidebar_link.querySelector('.list-group-item');
    sidebar_link_child.classList.add('active');
  }

  return (
    <div className="SideBar">
      <div className="sidebar-sidearea display-toggle" onClick={toggle_sidebar}></div>
      <div className='sidebar-button sidebar-toggle-open' onClick={toggle_sidebar}>|||</div>
      <img className='logo' src={Logo} alt="logo" srcSet="" />
      <div className="sidebar-menu-container">
        <ul>
          <li className='list-group-title'>dashboard</li>
          <Link onClick={() => change_page_active('dashboard-link')} className='sidebar-link dashboard-link' to="/">
            <li className='list-group-item active'>
              <i className="fas fa-home"></i>
              dashboard
            </li>
          </Link>
          <li className='list-group-title'>Customer</li>
          <Link onClick={() => change_page_active('view-customers-link')} className='sidebar-link view-customers-link' to="/view-customers">
            <li className='list-group-item'>
              <i className="fas fa-users"></i>
              View customer
            </li>
          </Link>
          <Link onClick={() => change_page_active('add-customer-link')} className='sidebar-link add-customer-link' to="/add-customer">
            <li className='list-group-item'>
              <i className="fas fa-user-plus"></i>
              Add Customer
            </li>
          </Link>
          <Link onClick={() => change_page_active('customer-order-link')} className='sidebar-link customer-order-link' to="/customer-order">
            <li className='list-group-item'>
              <i className="fas fa-shopping-bag"></i>
              Customer Order
            </li>
          </Link>
          <li className='list-group-title'>User</li>
          <Link onClick={() => change_page_active('view-users-link')} className='sidebar-link view-users-link' to="/view-users">
            <li className='list-group-item'>
              <i className="fa fa-users"></i>
              View Users
            </li>
          </Link>
          <Link onClick={() => change_page_active('add-user-link')} className='sidebar-link add-user-link' to="/add-user">
            <li className='list-group-item'>
              <i className="fas fa-user-plus"></i>
              Add User
            </li>
          </Link>
          <Link onClick={() => change_page_active('user-order-link')} className='sidebar-link user-order-link' to="/user-order">
            <li className='list-group-item'>
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
