import Chart from "react-apexcharts";
import { Component } from 'react';

class PieChart extends Component {
    constructor(props) {
        super(props);
        this.profits = {
            options: {
                labels: (this.props.data.graph_catagories),
                dataLabels: {
                    enabled: false
                }
            },
            series: (this.props.data.graph_value)
        };
    }
    render() {
        return (
            <Chart
                options={this.profits.options}
                series={this.profits.series}
                type={this.props.data.graph_type}
                labels={this.profits.labels}
                width={'100%'}
                height={"100%"}
            />

        );
    }
}

class BarAndLineChart extends Component {
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
                    categories: (this.props.data.graph_catagories)
                },
                colors: (this.props.data.graph_color)
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
                    name: this.props.data.graph_name,
                    data: this.props.data.graph_value
                }
            ]
        };
    }
    render() {
        return (
            <Chart
                options={this.profits.options}
                series={this.profits.series}
                type={this.props.data.graph_type}
                width={'100%'}
                height={"100%"} />
        );
    }
}

class MultiGraph extends Component {
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
                    categories: (this.props.data.graph_catagories)
                },
                colors: (this.props.data.graph_color)
            },
            series: (this.props.data.graph_value)
        };
    }
    render() {
        return (
            <Chart
                options={this.profits.options}
                series={this.profits.series}
                type={this.props.data.graph_type}
                width={'100%'}
                height={"100%"} />
      );
    }
}

export { PieChart, BarAndLineChart, MultiGraph };

