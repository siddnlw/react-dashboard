import './graph-card.css';
import SmallTable from '../Tables/small-table/SmallTable';
import { PieChart, BarAndLineChart, MultiGraph } from '../charts/Charts';
import { Component } from 'react';
import Chart from "react-apexcharts";


function toggle_grapgh_card_active(name, closeAll) {
  var graphCard = document.getElementById('graph-card-' + name);
  var lastActive = graphCard.classList.contains('graph-card-active');

  if (!lastActive || closeAll) {
    var graphCards = document.querySelectorAll('.graph-card');
    var graphCardContents = document.querySelectorAll('.graph-card-content');
    var graphCardTitles = document.querySelectorAll('.graph-card-title');
    var addTitleTographCardContents = document.getElementsByClassName('graph-card-content');
    var element = document.getElementsByClassName('closeGraphCard');
    var classLength = addTitleTographCardContents.length;
    var removeActiveClass = false;
    var skipTime = 0;
    graphCards.forEach(graphCard => {
      if (graphCard.classList.contains('graph-card-active')) {
        removeActiveClass = true;
        skipTime = 400;
      }
    });
    if (removeActiveClass || closeAll) {

      for (let i = 0; i < classLength; i++) {
        addTitleTographCardContents[i].title = 'Click to expand';
        element[i].style.display = "none";
      }
      graphCards.forEach(graphCard => {
        graphCard.classList.remove('graph-card-active');
      });
      graphCardContents.forEach(graphCardContent => {
        graphCardContent.classList.remove('graph-card-content-active');
        document.getElementsByClassName('.' + graphCardContent).title = 'Click to expand';
      });
      graphCardTitles.forEach(graphCardTitle => {
        graphCardTitle.classList.remove('graph-card-title-active');
      });
    }
  }

  if (!closeAll) {
    setTimeout(() => {
      var graphCard = document.getElementById('graph-card-' + name);
      var graphCardContent = document.getElementById('graph-card-content-' + name);
      var graphCardTitle = document.getElementById('graph-card-title-' + name);
      var element = document.getElementById('closeGraphCard' + name);
      element.style.display = "block";
      graphCard.classList.add('graph-card-active');
      graphCardContent.classList.add('graph-card-content-active');
      graphCardTitle.classList.add('graph-card-title-active');
      document.getElementById('graph-card-content-' + name).title = '';
    }, skipTime);
  }
}

function GraphCardComponent(props) {
  // window.addEventListener('load', () => {
  // var graphCardSelector = document.querySelector('.graph-card');
  // var present = graphCardSelector.classList.contains('graph-card-active');
  // if (present == true) {
  // console.log(present);
  // document.body.addEventListener('click', () => {
  // toggle_grapgh_card_active();
  // var graphCard = document.querySelector('.graph-card');
  // const graphCardContent = document.querySelector('.graph-card-content');
  // const graphCardTitle = document.querySelector('.graph-card-title');
  // graphCard.classList.remove('graph-card-active');
  // graphCardContent.classList.remove('graph-card-content-active');
  // graphCardTitle.classList.remove('graph-card-title-active');
  // }, true);
  // }

  // });
  return (
    <div id={'graph-card-' + props.name} className="graph-card box-component ">
      <div id={"closeGraphCard" + props.name} className="closeGraphCard" onClick={() => { toggle_grapgh_card_active(props.name, true) }}>
        <div>Click here to close</div>
      </div>
      <div id={'graph-card-title-' + props.name} className="graph-card-title">
        <i className={'fa fas ' + props.icon}></i>
        {props.name}
      </div>
      <div title='Click to expand' onClick={() => { toggle_grapgh_card_active(props.name, false) }} id={'graph-card-content-' + props.name} className={"graph-card-content  " + (props.bg_color_class)}>
        <div className="graph-card-value">
          {props.value}
          {props.value_postfix ? (
            <span className="graph-card-value-postfix">
              / {props.value_postfix}
            </span>
          ) : (null)}
        </div>
        <div className="graph-card-graph pie-graph">
          {
            props.type == 'LineGraph' ?
              <BarAndLineChart data={props} />
              :
              <div></div>
          }
          {
            props.type == 'PieChart' ?
              <PieChart data={props} />
              :
              <div></div>
          }
          {
            props.type == 'BarGraph' ?
              <BarAndLineChart data={props} />
              :
              <div></div>
          }
          {
            props.type == 'MixGraph' ?
              <MultiGraph data={props} />
              :
              <div></div>
          }
        </div>
        <div className={"graph-card-value-subvalue " + (props.subvalue_color)}>
          <i className={'fa fa-arrow-' + (props.subvalue_sign)}></i> {props.subvalue}
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
    </div>
  );
}

class FullGraphCard extends Component {
  constructor(props) {
    super(props);
    this.profits = {
      options:
      {
        chart: {
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          categories: (this.props.graph_catagories)
        },
        colors: (this.props.graph_color)
      },
      series: [
        {
          name: this.props.graph_name,
          data: this.props.graph_value
        }
      ]
    };
  }
  render() {
    return (
      <div className='FullGraphCard box-component'>
        {this.props.name}
        <Chart
          options={this.profits.options}
          series={this.profits.series}
          type={this.props.graph_type}
          width={'82%'}
          height={"100%"} />
      </div>
    )
  }
}

class SmallTableCard extends Component {
  render() {
    return (
      <div className='SmallTableCard box-component'>
        <SmallTable />
      </div>
    )
  }
}

export { GraphCardComponent, FullGraphCard, SmallTableCard };

