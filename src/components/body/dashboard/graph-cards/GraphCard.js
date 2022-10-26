import './graph-card.css';
import {GraphCardComponent, PieChartGraphCardComponent} from './GraphCardComponent';

function GraphCard() {
  return (
    <div className="GraphCard" >
      <GraphCardComponent name={'Profit'}  graph_name = {'Profit'} value={'$ 150,000'} subvalue={'+72.80%'} subvalue_sign={'up'} subvalue_color={'increment'} bg_color_class = {'first'} graph_type = {'line'} graph_color={['#2a9fc3', '#F44336', '#F44336']} graph_catagories={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]} data={new Array(8).fill(0).map(() => parseInt(Math.random() * 400))} />
      <GraphCardComponent name={'Sales'}  graph_name = {'Sales'} value={'490,000'} subvalue={'-27.40%'} subvalue_sign={'down'} subvalue_color={'decrement'} bg_color_class = {'second'} graph_type = {'bar'} graph_color={['#F44336']} graph_catagories={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]} data={new Array(8).fill(0).map(() => parseInt(Math.random() * 400))} />
      <PieChartGraphCardComponent name={'Payments'}  graph_name = {'Payments'} value={'$ 50,000'} subvalue={'-2.10%'} subvalue_sign={'down'} subvalue_color={'decrement'} bg_color_class = {'third'} graph_type = {'pie'} graph_color={['#F44336']} graph_catagories={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]} data={new Array(8).fill(0).map(() => parseInt(Math.random() * 400))} />
      <GraphCardComponent name={'Transactions'}  graph_name = {'Transactions'} value={'5,000'} subvalue={'+53.21%'} subvalue_sign={'up'} subvalue_color={'increment'} bg_color_class = {'forth'} graph_type = {'line'} graph_color={['#F44336']} graph_catagories={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]} data={new Array(8).fill(0).map(() => parseInt(Math.random() * 400))} />
    </div>
  )
}

export default GraphCard;

