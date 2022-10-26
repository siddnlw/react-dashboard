import './graph-card.css';
import { Component } from 'react';
import Chart from "react-apexcharts";

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
      <div className="graph-card">
        <div className="graph-card-title">
          <i className='fas fa-chart-line'></i>
          {this.props.name}
        </div>
        <div className={"graph-card-content " + (this.props.bg_color_class)}>
          <div className="graph-card-value">
            {this.props.value}
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

class PieChartGraphCardComponent extends Component {
  constructor(props) {
    super(props);
    this.profits = {
      options: {},
      series: (this.props.data),
      labels: (this.props.graph_catagories)
    };
  }
  render() {
    return (
      <div className="graph-card">
        <div className="graph-card-title">
          <i className='fas fa-chart-line'></i>
          {this.props.name}
        </div>
        <div className={"graph-card-content " + (this.props.bg_color_class)}>
          <div className="graph-card-value">
            {this.props.value}
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

export { GraphCardComponent, PieChartGraphCardComponent };

