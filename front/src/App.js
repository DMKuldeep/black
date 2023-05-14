import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import "./App.css";

function App() {
  const [alldb, setallDb] = useState({});

  function deserializeData(data) {
    const value = [];
    data && data.length && data.map((showArts) => {
      value.push(parseInt(showArts.intensity));
    });
    return value;
  }

  useEffect(() => {
    axios.get("http://localhost:4000/").then((data) => {
      setallDb(data.data)

    });
  }, []);

  useEffect(() => {
    console.log('alldb', alldb)
    setState({
      ...state,
      intensity: [
        { data: deserializeData(alldb.showArt) }
      ],
    });
    console.log('state', state);
  }, [alldb]);

  const [state, setState] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    intensity: [
      // intensity[0].data
      {
        name: "Intensity",
        data: [0, 0, 0, 0, 0, 0],
      },
    ],
    series: [
      {
        name: "constant intensity",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  return (
    <div className="App">
      <h1>
        <b>Dashboard Visualization</b>
      </h1>
      <div className="container-fluid">
      <div className="row"></div>
        <div className="row">
          <div className="col-md-4">
            <Chart
              options={state.options}
              series={state.intensity}
              type="bar"
              width="420"
            />
          </div>
          <div className="col-md-4">
            <Chart
              options={state.options}
              series={state.series}
              type="scatter"
              width="420"
            />
          </div>
          <div className="col-md-4">
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="420"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Chart
              options={state.options}
              series={state.series}
              type="heatmap"
              width="420"
            />
          </div>
          <div className="col-md-4">
            <Chart
              options={state.options}
              series={state.series}
              type="radar"
              width="420"
            />
          </div>
          <div className="col-md-4">
            <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="420"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const ChartComponent = () => {
//   const [chartOptions, setChartOptions] = useState({});
//   const [chartSeries, setChartSeries] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(''); // Replace with your API endpoint to fetch data from MongoDB
//       const data = await response.json();

//       // Set the chart options and series based on the fetched data
//       const options = ["sunday","monday","tuesday","wednesday","thursday"];

//       const series = [100,200,133,800,900];

//       setChartOptions(options);
//       setChartSeries(series);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />
//       {/* Render additional charts (e.g., area chart, scatter chart, histogram chart) */}
//     </div>
//   );
// };

// export default ChartComponent;
