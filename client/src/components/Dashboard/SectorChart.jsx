import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import {
  Box,
  Flex,
  Heading,
  Select,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const SectorPieChart = ({ data }) => {
  const { colorMode } = useColorMode();
  const [selectedSector, setSelectedSector] = useState("Retail");
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const sectorData = data.filter(
      (entry) => entry.sector === selectedSector
    );

    const countries = {};
    sectorData.forEach((entry) => {
      if (!countries[entry.country]) {
        countries[entry.country] = 0;
      }
      countries[entry.country] += entry.intensity;
    });

    const countryLabels = Object.keys(countries);
    const countryIntensities = countryLabels.map(
      (country) => countries[country]
    );

    const chartBackgroundColor = countryLabels.map((_, index) =>
      getRandomColor(index)
    );

    setChartData({
      labels: countryLabels,
      datasets: [
        {
          data: countryIntensities,
          backgroundColor: chartBackgroundColor,
        },
      ],
    });
  }, [selectedSector, data, colorMode]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        position: "average",
      },
    },
  };

  const handleSectorChange = (event) => {
    setSelectedSector(event.target.value);
  };

  const getRandomColor = (index) => {
    const colors = [
      "#4CAF50",
      "#FFC107",
      "#9C27B0",
      "#2196F3",
      "#FF5722",
    ];
    return colors[index % colors.length];
  };

  return (
    <Box 
    p={6}
    borderRadius={20}
    boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
    mt={50}
    ml={50}
    shadow="md"
    pb={100}
    bg={useColorModeValue("white", "gray.800")}
    maxHeight={700}
    maxWidth={575}
    overflow="hidden"
    >
      <Flex direction="column" margin="auto">
        <Heading as={"h2"} mb={4} color={"teal.300"}>
          Sector Pie Chart
        </Heading>
        <Select
          value={selectedSector}
          onChange={handleSectorChange}
          mb={4}
          w="200px"
          colorScheme="purple"
        >
          <option value="Retail">Retail</option>
          <option value="Aerospace & defence">Aerospace and Defence</option>
          <option value="Financial services">Financial services</option>
          <option value="Government">Government</option>
          <option value="Energy">Energy</option>
          <option value="Automotive">Automotive</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Food & agriculture">Food & agriculture</option>
        </Select>
        <Box height="500px" width={"100%"}>
          {chartData && <Pie data={chartData} options={chartOptions} />}
        </Box>
      </Flex>
    </Box>
  );
};

export default SectorPieChart;
