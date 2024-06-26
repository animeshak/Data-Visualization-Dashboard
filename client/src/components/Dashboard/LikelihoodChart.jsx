import React, { useState } from "react";
import { Radar } from "react-chartjs-2";
import { Box, useColorModeValue, Heading, Select } from "@chakra-ui/react";

const LikelihoodRadarChart = ({ data }) => {
  const [selectedCountries, setSelectedCountries] = useState(["India"]);

  const handleCountryChange = (event) => {
    const { options } = event.target;
    const selectedOptions = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setSelectedCountries(selectedOptions);
  };

  const filteredData = data.filter((entry) =>
    selectedCountries.includes(entry.country)
  );

  const chartData = {
    labels: filteredData.map((entry) => entry.country),
    datasets: [
      {
        label: "Likelihood",
        data: filteredData.map((entry) => entry.likelihood),
        backgroundColor: useColorModeValue(
          "rgba(79, 59, 169, 0.7)",
          "rgba(144, 104, 190, 0.7)"
        ),
        borderColor: useColorModeValue(
          "rgba(79, 59, 169, 1)",
          "rgba(144, 104, 190, 1)"
        ),
        borderWidth: 2,
        pointBackgroundColor: useColorModeValue("white", "black"),
        pointBorderColor: useColorModeValue(
          "rgba(79, 59, 169, 1)",
          "rgba(144, 104, 190, 1)"
        ),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 5,
        stepSize: 1,
      },
    },
  };

  return (
    <Box
      borderRadius={20}
      pt={6}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      mt={50}
      shadow="md"
      pb={100}
      bg={useColorModeValue("white", "gray.800")}
      maxHeight={700} 
      overflow="hidden" 
    >
      <Heading as="h2" mb={4} ml={6} color="teal.300">
        Likelihood Chart
      </Heading>

      <Select
        value={selectedCountries}
        onChange={handleCountryChange}
        mb={4}
        ml={6}
        w="300px"
        colorScheme="purple"
        size="md"
      >
        <option value="India">India</option>
        <option value="United States of America">United States of America</option>
        <option value="Canada">Canada</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Singapore">Singapore</option>
        <option value="Poland">Poland</option>
        <option value="China">China</option>
      </Select>

      <Box height="500px" width="100%">
        <Radar data={chartData} options={chartOptions} />
      </Box>
    </Box>
  );
};

export default LikelihoodRadarChart;
