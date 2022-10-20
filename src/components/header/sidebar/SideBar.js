import './SideBar.css'
import Logo from '../../../assets/images/logo.png';


function SideBar() {
  return (
    <div className="SideBar">
      <img className='logo' src={Logo} alt="logo" srcSet="" />
      <div className="sidebar-menu-container">
        <ul>
          <li className='list-group-title'>dashboard</li>
          <li className='list-group-item active'>
            <i className="fas fa-home"></i>
            dashboard
          </li>
          <li className='list-group-title'>Customer</li>
          <li className='list-group-item'>
            <i className="fas fa-users"></i>
            View customer
          </li>
          <li className='list-group-item'>
            <i className="fas fa-user-plus"></i>
            Add Customer
          </li>
          <li className='list-group-item'>
            <i className="fas fa-shopping-bag"></i>
            Customer Order
          </li>
          <li className='list-group-title'>User</li>
          <li className='list-group-item'>
            <i className="fa fa-users"></i>
            View User
          </li>
          <li className='list-group-item'>
            <i className="fas fa-user-plus"></i>
            Add User
          </li>
          <li className='list-group-item'>
            <i className="fa fa-shopping-bag"></i>
            User Order
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
