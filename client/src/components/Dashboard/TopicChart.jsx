import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';

const TopicsPolarAreaChart = ({ data }) => {
  const customColors = [
    '#4CAF50', 
    '#FFC107', 
    '#9C27B0', 
    '#2196F3',   
    '#FF5722', 
  ];

  const topics = data.map(item => item.topic);

  const chartData = {
    labels: topics,
    datasets: [
      {
        data: data.map(item => item.relevance),
        backgroundColor: customColors.map(color => `${color}80`),
        borderColor: customColors,
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 1,
        max: 5,
        fontColor: '#333', 
      },
    },
  };

  return (
    <Box>
      <Heading as="h2" mb={4} color="teal.300">
        Topics Chart
      </Heading>
      <PolarArea data={chartData} options={chartOptions} />
    </Box>
  );
};

export default TopicsPolarAreaChart;
