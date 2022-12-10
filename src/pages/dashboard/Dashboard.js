import './dashboard.css';
import {GraphCard, RevenueAndUserCard, RecentOrdersTable} from '../../components/graph-cards/GraphCard';
import WelcomeCard from '../../components/welcome-card/congratulations/WelcomeCard';
import BirthdayCard from '../../components/welcome-card/happy-birthday/WelcomeCardHappyBirthday';
import Calender from '../../components/calender/Calender';
import DocumentTitle from 'react-document-title';
function Dashboard() {
  return (
    <DocumentTitle title='Dashboard'>
      <div className="Dashboard">
        {/* <WelcomeCard/> */}
        <BirthdayCard/>
        <GraphCard />
        <RevenueAndUserCard />
        <RecentOrdersTable />
        <div>
          {/* 
            for refrence 
              https://support.google.com/calendar/answer/41207?hl=en 
          */}
            {/* <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=UTC&showTitle=0&showPrint=0&src=c2lkZGhhcnRoQG5kaW1lbnNpb25zdHVkaW8uY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe> */}
            <iframe src="https://calendar.google.com/calendar/u/0?cid=c2lkZGhhcnRoQG5kaW1lbnNpb25zdHVkaW8uY29t" style={{'borderWidth':0, 'width': 800, 'height': 600}} frameBorder={0} scrolling={"no"}></iframe>

        </div>
      </div>
    </DocumentTitle>
  );
}

export default Dashboard;
