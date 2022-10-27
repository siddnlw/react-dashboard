import './graph-card.css';
import { Component } from 'react';
import Chart from "react-apexcharts";

function toggle_grapgh_card_active() {
  // const graphCard = document.querySelector('.graph-card');
  // const graphCardTitle = document.querySelector('.graph-card-title');
  // graphCard.classList.toggle('graph-card-active');
  // graphCardTitle.classList.toggle('graph-card-title-active');

}
class GraphCardComponent extends Component {
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
        // fill: {
        //   type: "gradient",
        //   gradient: {
        //     shadeIntensity: 1,
        //     opacityFrom: 0.5,
        //     opacityTo: 0.7,
        //     stops: [0, 100]
        //   }
        // }
      },
      series: [
        {
          name: this.props.graph_name,
          data: this.props.data
        }
      ]
    };
  }
  render() {
    return (
      <div className="graph-card box-component" onClick={toggle_grapgh_card_active}>
        <div className="graph-card-title">
          <i className='fas fa-chart-line'></i>
          {this.props.name}
        </div>
        <div className={"graph-card-content " + (this.props.bg_color_class)}>
          <div className="graph-card-value">
            {this.props.value}
            {this.props.value_postfix ? (
              <span className="graph-card-value-postfix">
                / {this.props.value_postfix}
              </span>
            ) : (null)}
          </div>
          <div className="graph-card-graph">
            <Chart
              options={this.profits.options}
              series={this.profits.series}
              type={this.props.graph_type}
              width={250}
              height={150} />
          </div>
          <div className={"graph-card-value-subvalue " + (this.props.subvalue_color)}>
            <i className={'fa fa-arrow-' + (this.props.subvalue_sign)}></i> {this.props.subvalue}
          </div>
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
      </div>
    );
  }
}

class MultiGraphCardComponent extends Component {
  constructor(props) {
    super(props);
    this.profits = {
      options:
      {
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
      series: (this.props.data1)
    };
  }
  render() {
    return (
      <div className="graph-card box-component" onClick={toggle_grapgh_card_active}>
        <div className="graph-card-title">
          <i className='fas fa-chart-line'></i>
          {this.props.name}
        </div>
        <div className={"graph-card-content " + (this.props.bg_color_class)}>
          <div className="graph-card-value">
            {this.props.value}
            {this.props.value_postfix ? (
              <span className="graph-card-value-postfix">
                / {this.props.value_postfix}
              </span>
            ) : (null)}
          </div>
          <div className="graph-card-graph double-graph">
            <Chart
              options={this.profits.options}
              series={this.profits.series}
              type={this.props.graph_type}
              width={250}
              height={200} />
          </div>
          <div className={"graph-card-value-subvalue " + (this.props.subvalue_color)}>
            <i className={'fa fa-arrow-' + (this.props.subvalue_sign)}></i> {this.props.subvalue}
          </div>
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
      </div>
    );
  }
}

class PieChartGraphCardComponent extends Component {
  constructor(props) {
    super(props);
    this.profits = {
      options: {
        labels: (this.props.graph_catagories),
        dataLabels: {
          enabled: false
        }
      },
      series: (this.props.data)
    };
  }
  render() {
    return (
      <div className="graph-card box-component">
        <div className="graph-card-title">
          <i className='fas fa-chart-line'></i>
          {this.props.name}
        </div>
        <div className={"graph-card-content " + (this.props.bg_color_class)}>
          <div className="graph-card-value">
            {this.props.value}
            {this.props.value_postfix ? (
              <span className="graph-card-value-postfix">
                / {this.props.value_postfix}
              </span>
            ) : (null)}
          </div>
          <div className="graph-card-graph pie-graph">
            <Chart
              options={this.profits.options}
              series={this.profits.series}
              type={this.props.graph_type}
              labels={this.profits.labels}
              width={230}
              height={150} />
          </div>
          <div className={"graph-card-value-subvalue " + (this.props.subvalue_color)}>
            <i className={'fa fa-arrow-' + (this.props.subvalue_sign)}></i> {this.props.subvalue}
          </div>
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
      </div>
    );
  }
}

class FullGraphCard extends Component{
  render() {
    return (
      <div className='FullGraphCard box-component'>
        hi
      </div>
    )
  }
}

class FullGraphCard2 extends Component{
  render() {
    return (
      <div className='FullGraphCard2 box-component'>
        hi
      </div>
    )
  }
}

export { GraphCardComponent, MultiGraphCardComponent, PieChartGraphCardComponent, FullGraphCard, FullGraphCard2 };

