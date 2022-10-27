import './header.css'
import SideBar from '../sidebar/SideBar.js';
import $ from 'jquery';

function Header() {
  return (
    <div className="Header">
      <div>
        <SideBar />
      </div>
      <div>
        user
      </div>
    </div>
  );
}

export default Header;
