import React, { useState } from 'react';

function Module() {
  const [operatorAddress, setOperatorAddress] = useState('');
  const [operatorData, setOperatorData] = useState(null);
  const [error, setError] = useState('');

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

  return (
    <div>
      <h1>Module</h1>
      <div>
        <input 
          type="text" 
          placeholder="Enter operator contract address" 
          value={operatorAddress} 
          onChange={handleInputChange} 
        />
        <button onClick={handleFetchData}>Fetch Data</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {operatorData && (
        <div>
          <h2>Operator Data</h2>
          <pre>{JSON.stringify(operatorData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Module;
