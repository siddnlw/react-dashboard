import './dashboard.css';
import {GraphCard,GraphCard2} from '../../components/graph-cards/GraphCard';
import DocumentTitle from 'react-document-title';
function Dashboard() {
  return (
    <DocumentTitle title='Dashboard'>
      <div className="Dashboard">
        <GraphCard />
        <GraphCard2 />
      </div>
    </DocumentTitle>
  );
}

export default Dashboard;
