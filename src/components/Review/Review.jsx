import React from 'react';
import Chart from 'react-apexcharts';
import './Review.css'
import './Review.css';

function Review() {
  const data = {
    series: [
        {
            name: "Review",
            data: [20, 40, 35, 80, 60, 110, 90],
        },
    ],
    options: {
        chart: {
            type: "area",
            height: "auto",
        },
        fill: {
            colors: ["#fff"],
            type: "gradient",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            colors: ["#ff929f"],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
        grid: {
            show: false,
        },
        xaxis: {
            type: "datetime",
            categories: [
                "2018-09-19T00:00:00.000Z",
                "2018-09-19T01:30:00.000Z",
                "2018-09-19T02:30:00.000Z",
                "2018-09-19T03:30:00.000Z",
                "2018-09-19T04:30:00.000Z",
                "2018-09-19T05:30:00.000Z",
                "2018-09-19T06:30:00.000Z",
            ],
            labels: {
                style: {
                    colors: '#fff',
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#fff', 
                },
            },
            show: false
        },
        toolbar: {
            show: false
        }
    },
};
return(
        <div className='review' >
            <Chart series={data.series} options={data.options} type='area' />
        </div>
    );
}

export default Review;
