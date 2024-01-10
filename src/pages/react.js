import React, { useState } from 'react';

const YourComponent = () => {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    // Add more input fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const integerValues = Object.values(inputValues).map(value => parseInt(value, 10));

    // Send integerValues as an array to the Flask server
    fetch('http://localhost:5000/print_data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: integerValues }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle server response as needed
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <input
        type="text"
        name="input1"
        value={inputValues.input1}
        onChange={handleChange}
      />
      <input
        type="text"
        name="input2"
        value={inputValues.input2}
        onChange={handleChange}
      />
      {/* Add more input fields as needed */}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default YourComponent;