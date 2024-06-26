import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Heading } from '@chakra-ui/react';

const RegionChart = ({ data }) => {
  
  const regionCounts = {};
  data.forEach(item => {
    if (item.region in regionCounts) {
      regionCounts[item.region]++;
    } else {
      regionCounts[item.region] = 1;
    }
  });

  const chartData = {
    labels: Object.keys(regionCounts),
    datasets: [
      {
        data: Object.values(regionCounts),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF9800',
          '#9C27B0',
          '#3F51B5',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF9800',
          '#9C27B0',
          '#3F51B5',
        ],
        borderWidth: 2,
        hoverBorderColor: '#000000',
      },
    ],
  };

  const chartOptions = {
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#ffffff',
        borderWidth: 1,
        cornerRadius: 6,
        displayColors: false,
      },
      legend: {
        display: true,
        position: 'right',
        labels: {
          font: {
            size: 14,
            weight: 'bold',
          },
          color: '#333333',
        },
      },
      datalabels: {
        color: '#ffffff',
        font: {
          weight: 'bold',
        },
        formatter: (value) => value,
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  };

  return (
    <>
      <Heading as="h2" mb={4} color="teal.300">
        Region Distribution
      </Heading>
      <Doughnut data={chartData} options={chartOptions} />
    </>
  );
};

export default RegionChart;
