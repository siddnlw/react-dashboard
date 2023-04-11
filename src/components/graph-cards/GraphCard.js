import './graph-card.css';
import { GraphCardComponent, FullGraphCard, SmallTableCard, RecentOrderCard, SmallTableProgressCard } from './GraphCardComponent';

function GraphCard() {
  var graph_value = [
    {
      type: 'line',
      name: 'Orders',
      data: new Array(12).fill(0).map(() => parseInt(Math.random() * 40))
    },
    {
      type: 'bar',
      name: 'expectedOrders',
      data: new Array(12).fill(0).map(() => parseInt(Math.random() * 40))
    },
    {
      type: 'bar',
      name: 'Profit',
      data: new Array(12).fill(0).map(() => parseInt(Math.random() * 800))
    }
  ];
  return (
    <div className="GraphCard">
      <GraphCardComponent type={'LineGraph'} icon={"fa-chart-line"} name={'Profit'} graph_name={'Profit'} value={'$ 150,000'} value_postfix={''} subvalue={'+72.80%'} subvalue_sign={'up'} subvalue_color={'increment'} bg_color_class={' first'} graph_type={'line'} graph_color={['#2a9fc3']} graph_catagories={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']} graph_value={new Array(12).fill(0).map(() => parseInt(Math.random() * 400))} />
      <GraphCardComponent type={'PieChart'} icon={"fa-credit-card"} name={'Payments'} graph_name={'Payments'} value={'$ 50,000'} value_postfix={''} subvalue={'-2.10%'} subvalue_sign={'down'} subvalue_color={'decrement'} bg_color_class={'active third'} graph_type={'pie'} graph_catagories={['UPI', 'Credit Card', 'Debit Card', 'Cash', 'EMI']} graph_value={new Array(5).fill(0).map(() => parseInt(Math.random() * 400))} />
      <GraphCardComponent type={'BarGraph'} icon={"fa-signal"} name={'Sales'} graph_name={'Sales'} value={'490,000'} value_postfix={''} subvalue={'-27.40%'} subvalue_sign={'down'} subvalue_color={'decrement'} bg_color_class={' second'} graph_type={'bar'} graph_color={['#F44336']} graph_catagories={['T-shirt', 'Shirt', 'Jeans', 'Shoes', 'Socks', 'Shorts']} graph_value={new Array(6).fill(0).map(() => parseInt(Math.random() * 400))} />
      <GraphCardComponent type={'MixGraph'} icon={"fa-shopping-cart"} name={'Orders'} graph_value={graph_value} value={'5,000'} value_postfix={'per month'} subvalue={'+53.21%'} subvalue_sign={'up'} subvalue_color={'increment'} bg_color_class={'forth'} graph_color={['#F44336', '#669DF6', '#BF74FF']} graph_catagories={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']} />
    </div>
  )
}

function RevenueAndProductvityCard() {
  var current_data = new Array(12).fill(0).map(() => parseInt(Math.random() * 400));
  var previous_data = new Array(12).fill(0).map(() => parseInt(Math.random() * 400));
  const sum1 = current_data.reduce((partialSum, a) => partialSum + a, 0)/12;
  const sum2 = previous_data.reduce((partialSum, a) => partialSum + a, 0)/12;
  const avg = parseInt((sum1 + sum2) / 2);
  var graph_value = [
    {
      type: 'line',
      name: '2021',
      data: previous_data
    },
    {
      type: 'bar',
      name: '2022',
      data: current_data,
    }
  ];
  return (
    <div className="RevenueAndProductvityCard" >
      <FullGraphCard name={'Total Revenue'} graph_value={graph_value} avarage={avg} graph_color={['#BF74FF', '#669DF6']} graph_catagories={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']} />
      <SmallTableProgressCard />
    </div>
  )
}

function RecentOrdersTable() {
  return (
    <div className="RecentOrdersTable" >
      < RecentOrderCard/>
    </div>
  )
}


function UserDetail() {
  return (
    <div className="UserDetail" >
      < SmallTableCard/>
      < SmallTableCard/>
      < SmallTableCard/>
    </div>
  )
}

export { GraphCard, RevenueAndProductvityCard, RecentOrdersTable, UserDetail};

