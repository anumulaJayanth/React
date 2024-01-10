import React, { useState, useEffect } from 'react';

const OutputComponent = ({ location }) => {
  const [output1, setOutput1] = useState('');
  const [output2, setOutput2] = useState('');
  const [output3, setOutput3] = useState('');

  useEffect(() => {
    const receivedData = location.state.updatedData;

    console.log('Received Data:', receivedData);

    if (receivedData && receivedData.length === 3) {
      console.log('Updating State:', receivedData);
      setOutput1(String(receivedData[0]));
      setOutput2(String(receivedData[1]));
      setOutput3(String(receivedData[2]));
    }
  }, [location.state.updatedData]);

  return (
    <div>
      <label>Output Number 1: </label>
      <input type="text" value={output1} readOnly />
      <br />
      <label>Output Number 2: </label>
      <input type="text" value={output2} readOnly />
      <br />
      <label>Output Number 3: </label>
      <input type="text" value={output3} readOnly />
    </div>
  );
};

export default OutputComponent;