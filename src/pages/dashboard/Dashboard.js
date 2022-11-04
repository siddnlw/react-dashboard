import './dashboard.css';
import {GraphCard,GraphCard2} from '../../components/graph-cards/GraphCard';
import WelcomeCard from '../../components/welcome-card/WelcomeCard';
import DocumentTitle from 'react-document-title';
function Dashboard() {
  return (
    <DocumentTitle title='Dashboard'>
      <div className="Dashboard">
        <WelcomeCard/>
        <GraphCard />
        <GraphCard2 />
      </div>
    </DocumentTitle>
  );
}

export default Dashboard;
