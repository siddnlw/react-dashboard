import './header.css'
import SideBar from './sidebar/SideBar.js';
import $ from 'jquery';

function Header() {
  window.onload  = ()=> {
    const sidebar = document.querySelector('.SideBar');
    const body = document.querySelector('.Body');
    if (window.innerWidth <= 600) {
      sidebar.classList.remove('sidebar-toggle-open');
      sidebar.classList.add('sidebar-toggle-close');
      body.classList.add('SideBar-minimize');
      body.classList.remove('SideBar-maximize');
    }
    else{
      sidebar.classList.add('sidebar-toggle-open');
      sidebar.classList.remove('sidebar-toggle-close');
      body.classList.remove('SideBar-minimize');
      body.classList.add('SideBar-maximize');

    }
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
    else{
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

    const sidebar_button = document.querySelector('.sidebar-button');
    sidebar_button.classList.toggle('sidebar-toggle-open');
    sidebar_button.classList.toggle('sidebar-toggle-close');

    const body = document.querySelector('.Body');
    body.classList.toggle('SideBar-minimize');
    body.classList.toggle('SideBar-maximize');

  }
  return (
    <div className="Header">
      <div>
        <SideBar />
        <div className='sidebar-button sidebar-toggle-open' onClick={toggle_sidebar}>|||</div>
      </div>
      <div>
        user
      </div>
    </div>
  );
}

export default Header;
