import './header.css'
import SideBar from '../sidebar/SideBar.js';
import $ from 'jquery';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Outlet, Link } from "react-router-dom";
import Lockscreen from '../lockscreen/Lockscreen.js';

function Header() {
  function active_lockscreen() {
    var lockscreen = document.getElementById('Lockscreen');
    lockscreen.classList.remove('lockscreen-deactive');
    lockscreen.classList.add('lockscreen-active');
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

  $( window ).on('load',function() {
    const modeBtn = document.getElementById('mode');
    modeBtn.onchange = (e) => {
      if (modeBtn.checked === true) 
      {
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
        window.localStorage.setItem('mode', 'dark');
      } 
      else 
      {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
        window.localStorage.setItem('mode', 'light');
      }
    }
        
      const mode = window.localStorage.getItem('mode');
      if (mode == 'dark') {
        modeBtn.checked = true;
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
      }
      
      if (mode == 'light') {
        modeBtn.checked = false;
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
      }
  });
  return (
    <div className="Header">
      <div id='lockscreen_container'>
        <Lockscreen />
      </div>
      <div>
        <SideBar />
      </div>
      <div className="form-switch text-center my-5">
      <label class="switch">
        <input type="checkbox" id="mode" className="form-check-input"/>
        <span class="slider round"></span>
      </label>
        <label for="mode" className="form-check-label"></label>
      </div>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Siddharth Nalwaya" src="/static/images/avatar/1.jpg" />
        <span className="user-name">
          siddharth nalwaya <ExpandMoreIcon />
          <div className="user-options">
            <ul>
              <Link onClick={() => change_page_active('profile-link')} className='sidebar-link profile-link' to="/profile?id=0">
                <li>
                  <PermIdentityIcon />
                  profile
                </li>
              </Link>
              <div onClick={active_lockscreen}>
                <li>
                  <i className="fa fa-desktop" aria-hidden="true"></i>
                  lockscreen
                </li>
              </div>
              <Link onClick={() => change_page_active('settings-link')} className='sidebar-link settings-link' to="/settings">
                <li>
                  <SettingsIcon />
                  settings
                </li>
              </Link>
              <Link onClick={() => change_page_active('log-out-link')} className='sidebar-link log-out-link' to="/log-out">
                <li>
                  <LogoutIcon />
                  log out
                </li>
              </Link>
            </ul>
          </div>
        </span>
      </Stack>
    </div>
  );
}

export default Header;
