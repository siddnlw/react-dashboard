import WelcomeCard from '../../components/welcome-card/congratulations/WelcomeCard';
import WelcomeCardGoku from '../../components/welcome-card/goku/WelcomeCardGoku';
import WelcomeCardHappyBirthday from '../../components/welcome-card/happy-birthday/WelcomeCardHappyBirthday';
export default function GreetingCards() {
    return (
        <div className="GreetingCards">
            <WelcomeCard />
            <WelcomeCardGoku />
            <WelcomeCardHappyBirthday />
        </div>
    );
}