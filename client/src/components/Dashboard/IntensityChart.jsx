import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Heading, Box, Select } from '@chakra-ui/react';

const MultiLineChart = ({ data }) => {
  const chartRef = useRef(null);
  const [selectedEndYear, setSelectedEndYear] = useState("2021");

  useEffect(() => {
    if (!data || data.length === 0) return;

    d3.select(chartRef.current).selectAll('*').remove();

    const margin = { top: 50, right: 30, bottom: 50, left: 80 };
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);


    const filteredData = data.filter(d => d.end_year <= selectedEndYear);

    const groups = Array.from(new Set(filteredData.map(d => d.group)));
    const years = Array.from(new Set(filteredData.map(d => d.end_year)));

    const x = d3.scalePoint()
      .domain(years)
      .range([0, width])
      .padding(1);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .style('text-anchor', 'middle')
      .style('font-family', 'Roboto')
      .style('font-size', '14px')
      .style('font-weight', 'bold');

    const y = d3.scaleLinear()
      .domain([0, d3.max(filteredData, d => d.intensity)])
      .range([height, 0]);

    svg.append('g')
      .call(d3.axisLeft(y).tickFormat(d => d + '%'));

    const color = d3.scaleOrdinal()
      .domain(groups)
      .range(d3.schemeCategory10);

    const line = d3.line()
      .x(d => x(d.end_year))
      .y(d => y(d.intensity));

    const groupData = d3.group(filteredData, d => d.group);

    groupData.forEach((values, key) => {
      svg.append('path')
        .datum(values)
        .attr('fill', 'none')
        .attr('stroke', color(key))
        .attr('stroke-width', 2.5)
        .attr('d', line);

      svg.selectAll(`.dot-${key}`)
        .data(values)
        .enter()
        .append('circle')
        .attr('class', `dot-${key}`)
        .attr('cx', d => x(d.end_year))
        .attr('cy', d => y(d.intensity))
        .attr('r', 5)
        .attr('fill', color(key))
        .on('mouseover', function (event, d) {
          d3.select(this).attr('fill', '#F2B93B');
          svg.append('text')
            .attr('class', 'label')
            .attr('x', x(d.end_year))
            .attr('y', y(d.intensity) - 10)
            .attr('text-anchor', 'middle')
            .style('font-family', 'Roboto')
            .style('font-size', '14px')
            .style('font-weight', 'bold')
            .style('fill', 'white')
            .text(`${d.intensity}%`);
        })
        .on('mouseout', function (event, d) {
          d3.select(this).attr('fill', color(key));
          svg.select('.label').remove();
        });
    });

  }, [data, selectedEndYear]);

  const handleEndYearChange = (event) => {
    setSelectedEndYear(event.target.value);
  };

  const uniqueEndYears = Array.from(new Set(data.map(d => d.end_year)));

  return (
    <Box
      margin="50px"
      padding="10px"
      fontFamily="Arial, sans-serif"
      borderRadius="8px"
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
    >
      <Heading as="h2" mb={4} color="teal.300">
        Intensity Chart
      </Heading>
      <Select
        value={selectedEndYear}
        onChange={handleEndYearChange}
        mb={4}
        w="200px"
        colorScheme="purple"
      >
        {uniqueEndYears.sort().map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>
      <div ref={chartRef}></div>
    </Box>
  );
};

export default MultiLineChart;
