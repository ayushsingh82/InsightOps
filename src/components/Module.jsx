import React, { useState, useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Module() {
  const [operatorAddress, setOperatorAddress] = useState('');
  const [operatorData, setOperatorData] = useState(null);
  const [error, setError] = useState('');
  const chartRef = useRef(null);

  const fetchOperatorData = (address) => {
    const options = {
      method: 'GET',
      headers: {
        'X-DUNE-API-KEY': 'ddZZbqTrQABnH094HfYqqgzb6TW6KpaE'
      }
    };

    fetch('https://api.dune.com/api/v1/eigenlayer/operator-stats', options)
      .then(response => response.json())
      .then(data => {
        const result = data.result.rows.find(row => row.operator_contract_address === address);
        if (result) {
          setOperatorData(result);
          setError('');
        } else {
          setOperatorData(null);
          setError('Operator contract address not found.');
        }
      })
      .catch(err => {
        console.error(err);
        setError('Error fetching data.');
      });
  };

  const handleInputChange = (e) => {
    setOperatorAddress(e.target.value);
  };

  const handleFetchData = () => {
    fetchOperatorData(operatorAddress);
  };

  const getChartData = () => {
    if (!operatorData) return {};

    const labels = Object.keys(operatorData).filter(key => key.includes('_TVL') && operatorData[key] > 0);
    const data = labels.map(key => operatorData[key]);

    return {
      labels,
      datasets: [{
        label: 'TVL',
        data,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ]
      }]
    };
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
  }, [operatorData]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 py-[30px]">Put address to see</h1>
      <div className="flex flex-col items-center mb-6">
        <input
          type="text"
          placeholder="Enter operator contract address"
          value={operatorAddress}
          onChange={handleInputChange}
          className="p-2 mt-[-20px] rounded bg-gray-800 border border-black text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleFetchData}
          className="px-4 py-2 text-xl bg-black mt-[10px] gradient-border rounded border border-white text-purple-500 font-medium">
          Fetch Data
        </button>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {operatorData && (
        <div className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded shadow-lg w-full max-w-2xl gradient-border mb-[50px] ">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-purple-500"> Operator Data</h2>
            <pre className="whitespace-pre-wrap break-words">{JSON.stringify(operatorData, null, 2)}</pre>
          </div>
          <div className="w-full md:w-1/2 ml-[30px]">
            <h2 className="text-2xl font-semibold mb-4 text-purple-500">TVL Distribution</h2>
            <Doughnut ref={chartRef} data={getChartData()} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Module;
