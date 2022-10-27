import './graph-card.css';
import { GraphCardComponent, PieChartGraphCardComponent, MultiGraphCardComponent, FullGraphCard, FullGraphCard2 } from './GraphCardComponent';

function GraphCard() {
  var data = [
    {
      type: 'line',
      name: 'Orders',
      data: new Array(12).fill(0).map(() => parseInt(Math.random() * 400))
    },
    {
      type: 'bar',
      name: 'expectedOrders',
      data: new Array(12).fill(0).map(() => parseInt(Math.random() * 400))
    },
    {
      type: 'bar',
      name: 'Profit',
      data: new Array(12).fill(0).map(() => parseInt(Math.random() * 400))
    }
  ];
  return (
    <div className="GraphCard">
      <GraphCardComponent name={'Profit'} graph_name={'Profit'} value={'$ 150,000'} value_postfix={''} subvalue={'+72.80%'} subvalue_sign={'up'} subvalue_color={'increment'} bg_color_class={'first'} graph_type={'line'} graph_color={['#2a9fc3']} graph_catagories={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']} data={new Array(12).fill(0).map(() => parseInt(Math.random() * 400))} />
      <PieChartGraphCardComponent name={'Payments'} graph_name={'Payments'} value={'$ 50,000'} value_postfix={'per month'} subvalue={'-2.10%'} subvalue_sign={'down'} subvalue_color={'decrement'} bg_color_class={'third'} graph_type={'pie'} graph_catagories={['UPI', 'Credit Card', 'Debit Card', 'Cash', 'EMI']} data={new Array(5).fill(0).map(() => parseInt(Math.random() * 400))} />
      <GraphCardComponent name={'Sales'} graph_name={'Sales'} value={'490,000'} value_postfix={''} subvalue={'-27.40%'} subvalue_sign={'down'} subvalue_color={'decrement'} bg_color_class={'second'} graph_type={'bar'} graph_color={['#F44336']} graph_catagories={['T-shirt', 'Shirt', 'Jeans', 'Shoes', 'Socks', 'Shorts']} data={new Array(6).fill(0).map(() => parseInt(Math.random() * 400))} />
      <MultiGraphCardComponent name={'Orders'} data1={data} value={'5,000'} value_postfix={'per month'} subvalue={'+53.21%'} subvalue_sign={'up'} subvalue_color={'increment'} bg_color_class={'forth'} graph_color={['#F44336', '#669DF6', '#BF74FF']} graph_catagories={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']} />
    </div>
  )
}

function GraphCard2() {
  return (
    <div className="GraphCard2" >
      <FullGraphCard name={'Profit'} graph_name={'Profit'} value={'$ 150,000'} value_postfix={''} subvalue={'+72.80%'} subvalue_sign={'up'} subvalue_color={'increment'} bg_color_class={'first'} graph_type={'line'} graph_color={['#2a9fc3']} graph_catagories={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]} data={new Array(8).fill(0).map(() => parseInt(Math.random() * 400))} />
      <FullGraphCard2 name={'Profit'} graph_name={'Profit'} value={'$ 150,000'} value_postfix={''} subvalue={'+72.80%'} subvalue_sign={'up'} subvalue_color={'increment'} bg_color_class={'first'} graph_type={'line'} graph_color={['#2a9fc3']} graph_catagories={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]} data={new Array(8).fill(0).map(() => parseInt(Math.random() * 400))} />
    </div>
  )
}

export { GraphCard, GraphCard2 };

