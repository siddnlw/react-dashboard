import './welcome-card-happy-birthday.css';
import { useState } from 'react'
import Confetti from 'react-confetti';
import PartyFlag from '../../../assets/images/party_flag.png';


export default function WelcomeCardHappyBirthday() {
    const [ShowConfetti, setShowConfetti] = useState(false)
    function onSurpriseBoxClick() {
        var surprise_box_click = document.querySelectorAll('.open-surprise');
        surprise_box_click.forEach(element => {
            element.classList.remove('open-surprise');
        });
        setShowConfetti(true);
    }
    function close_welcome_card() {
        var welcomeCard = document.querySelector('.WelcomeCardHappyBirthday');
        welcomeCard.classList.add('disapear');
    }
    return (
        <div className="WelcomeCardHappyBirthday box-component">
            <div onClick={onSurpriseBoxClick} title='Click to see surprise' className="suprise-opener box-component open-surprise">
                <div className="ribbon">
                    <div className="ribbon-left-part open-surprise">
                        <div className="ribbon-knot-left-extended open-surprise"></div>
                        <div className="ribbon-knot-left open-surprise"></div>
                    </div>
                    <div className="ribbon-knot open-surprise"></div>
                    <div className="ribbon-right-part open-surprise">
                        <div className="ribbon-knot-right-extended open-surprise"></div>
                        <div className="ribbon-knot-right open-surprise"></div>
                    </div>
                </div>
            </div>

            <Confetti
                run={ShowConfetti}
                recycle={true}
                gravity={0.07}
                numberOfPieces={25}
                tweenDuration={99999}
                colors={['#f3d66f', '#ca9d46', '#68430e', '#fef4ba']}
                style={{
                    'width': '100%',
                    'height': '13rem',
                    'borderRadius': '25px',
                    filter:'blur(1px)'
                }}
            />
            <Confetti
                run={ShowConfetti}
                recycle={true}
                gravity={0.08}
                numberOfPieces={25}
                tweenDuration={99999}
                colors={['#f3d66f', '#ca9d46', '#68430e', '#fef4ba']}
                style={{
                    'width': '100%',
                    'height': '13rem',
                    'borderRadius': '25px',
                    filter:'blur(2px)'
                }}
            />
            <Confetti
                run={ShowConfetti}
                recycle={true}
                gravity={0.03}
                numberOfPieces={50}
                tweenDuration={99}
                colors={['#f3d66f', '#ca9d46', '#68430e', '#fef4ba']}
                style={{
                    'width': '100%',
                    'height': '13rem',
                    'borderRadius': '25px',
                    zIndex:'300'
                }}
            />
            <div className="closeWelcomeCardButton" onClick={close_welcome_card}>x</div>
            <div className="welcome-msg">
                <div className="greet-msg open-surprise">Happy</div>
                <div className="info-msg open-surprise">Birthday</div>
                <div className='info-msg-secondry open-surprise'>John</div>
            </div>
            <div className="welcome-background">
                <div className="party_flag_1"><img src={PartyFlag} alt="" /></div>
                <div className="party_flag_2"><img src={PartyFlag} alt="" /></div>
                <div className="party_flag_3"></div>
                <div className="gifts-container">
                    <div className="gift"></div>
                </div>
            </div>
        </div>
    );
}