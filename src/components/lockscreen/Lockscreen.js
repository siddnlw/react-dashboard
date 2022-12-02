import { useState } from "react";
import './lockscreen.css';
import LogoutIcon from '@mui/icons-material/Logout';
import { event } from "jquery";
import Password from "antd/lib/input/Password";

export default function Lockscreen() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }));

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var now = new Date();
    var date = now.getDate();
    var day = days[now.getDay()];
    var month = months[now.getMonth()];

    function setTime() {
        setCurrentTime(new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }));
    }
    setInterval(setTime, 999);

    
    function lockscreen_active() {
        document.body.style.position = "fixed";
        var lockscreen = document.getElementById('Lockscreen-Login');
        lockscreen.classList.add('active_lockscreen');

        var lockscreen = document.getElementById('lockscreen-time');
        lockscreen.classList.add('active_lockscreen');

        var lockscreen = document.getElementById('lockscreen-login-form');
        lockscreen.classList.add('active_lockscreen');

        var lockscreen = document.getElementById('lockscreen-toolip');
        lockscreen.classList.add('active_lockscreen');

        document.getElementById('lockscreen-password').focus();

    }

    function lockscreen_deactive() {
        var lockscreen = document.getElementById('Lockscreen-Login');
        lockscreen.classList.remove('active_lockscreen');

        var lockscreen = document.getElementById('lockscreen-time');
        lockscreen.classList.remove('active_lockscreen');

        var lockscreen = document.getElementById('lockscreen-login-form');
        lockscreen.classList.remove('active_lockscreen');

        var lockscreen = document.getElementById('lockscreen-toolip');
        lockscreen.classList.remove('active_lockscreen');

        var lockscreen = document.getElementById('lockscreen-form');
        lockscreen.reset();

    }

    function lockscreen_form_submit(event) {
        event.preventDefault();
        var password = 'password';
        var time = 3000;
        var lockscreen_password_value = document.getElementById('lockscreen-password').value;
        if (lockscreen_password_value == password) {
            lockscreen_deactive();
            var lockscreen = document.getElementById('Lockscreen');
            lockscreen.classList.remove('lockscreen-active');
            lockscreen.classList.add('lockscreen-deactive');
            document.body.style.position = "relative";

        }
        else {
            var lockscreen = document.getElementById('lockscreen-password');
            lockscreen.classList.add('lockscreen-login-form-incorrect');
            setInterval(() => {
                lockscreen.classList.remove('lockscreen-login-form-incorrect')
            }, time)
        }
    }

    return (
        <div>
            <div onClick={lockscreen_active} onKeyDown={lockscreen_active} tabIndex={0} id='Lockscreen' className="Lockscreen">

                <div className="lockscreen-bg"></div>
                <div id="lockscreen-time" className="lockscreen-time">
                    <div className="lockscreen-time-clock">
                        {currentTime}
                    </div>
                    <div className="lockscreen-time-day">
                        {day}, {month} {date}
                    </div>
                    <div className="lockscreen-msg">
                        Click to unlock
                    </div>
                </div>
                <div id='Lockscreen-Login' className="lockscreen-login">
                    <div id='lockscreen-login-form' className="lockscreen-login-form">
                        <div className="lockscreen-image">
                            <i style={{ "fontSize": '2.7rem' }} className="fa fa-user-circle"></i>
                        </div>
                        <div className="lockscreen-name">John Doe</div>
                        <form onSubmit={lockscreen_form_submit} id="lockscreen-form" action="" method="">
                            <input id="lockscreen-password" placeholder="(hint:password)" type="password" />
                        </form>
                    </div>
                </div>
            </div>
            <div id="lockscreen-toolip" className="lockscreen-toolip">
                <div title="Click to lock-screen" onClick={lockscreen_deactive}><i className="fa fa-desktop" aria-hidden="true"></i></div>
                <div title="Log-out"><LogoutIcon /></div>
            </div>
        </div>
    );

}