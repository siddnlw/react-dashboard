import './breadcrums.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useState, useEffect } from "react";
// import { Text, View } from 'react-native';

function Breadcrums(props) {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
    function setTime() {
        setCurrentTime(new Date().toLocaleString());
    }
    setInterval(setTime, 1000);

    return (
        <div className="Breadcrums">
            <div className="breadcrums-path box-component">
                <span className="breadcrums-logo">
                    <i className="fas fa-users"></i>
                </span>
                <span className="path parent-path">{props.parentPath}</span>
                <span className="path child-path">{props.childPath}</span>
            </div>
            <div className="current-time box-component">
                <AccessTimeIcon />
                <span>
                    {currentTime}
                </span>
                <span>
                    {/* {date} */}
                </span>
            </div>
        </div>
    );
}

export default Breadcrums;