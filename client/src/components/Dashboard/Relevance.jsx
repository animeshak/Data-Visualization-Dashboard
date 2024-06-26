import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';

const RelevanceRadarChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        label: 'Relevance',
        data: data.map(item => item.relevance * 5), 
        backgroundColor: 'rgba(75, 192, 192, 0.6)', 
        borderColor: 'rgba(75, 192, 192, 1)', 
        borderWidth: 1,
      },
      {
        label: 'Intensity',
        data: data.map(item => item.intensity),
        backgroundColor: 'rgba(255, 159, 64, 0.6)', 
        borderColor: 'rgba(255, 159, 64, 1)', 
        borderWidth: 1,
      }
    ]
  };

  const chartOptions = {
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        pointLabels: {
          fontSize: 14,
          fontFamily: 'Arial',
          fontColor: '#333',
          fontStyle: 'bold',
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <Box margin={50} p={4} mt={8} borderRadius={18} boxShadow ='0px 0px 10px rgba(0, 0, 0, 0.1)'>
      <Heading as="h2" mb={4} color="teal.300">Relevance Chart</Heading>
      <Radar data={chartData} options={chartOptions} />
    </Box>
  );
};

export default RelevanceRadarChart;
