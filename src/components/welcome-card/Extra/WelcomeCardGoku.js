import './welcome-card-goku.css';
import Cloud from '../../../assets/elements/Clouds/Clouds';
import Goku from '../../../assets/images/goku.png';
// import Tilt from 'react-parallax-tilt';

function WelcomeCardGoku() {

    function close_welcome_card() {
        var WelcomeCardGoku = document.querySelector('.WelcomeCardGoku');
        WelcomeCardGoku.classList.add('disapear');
    }

    return (
        // <Tilt
        //     tiltAxis='x' tiltEnable={false} tiltReverse={true} glareEnable={true} glareMaxOpacity={0.7} glareColor="white" glarePosition="bottom"
        // >
            <div id='WelcomeCardGoku' className="WelcomeCardGoku box-component">
                <div className="closeWelcomeCardGokuButton" onClick={close_welcome_card}>x</div>
                <div className="welcome-msg">
                    <div className="greet-msg">
                        Congratulations John! 🎉
                    </div>
                    <div className="info-msg">
                        You have done 72% more sales today. Check your new badge in your profile.
                        <br />
                        <button className='view-profile-button'>View Profile</button>
                    </div>
                </div>
                <div className="welcome-background">
                    <div className="clouds">
                        <Cloud />
                    </div>
                    <div className="mountain-container">
                        <div className="mountain"></div>
                    </div>
                    <div className="goku-container">
                        <img src={Goku} className="goku" />
                    </div>
                </div>
                <div className="welcome-character"></div>
            </div >
        // </Tilt>
    );
}

export default WelcomeCardGoku;