import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const InputComponent = () => {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const integerValues = Object.values(inputValues).map(value => parseInt(value, 10));

    console.log('Sending data to Flask server:', integerValues);

    // Send integerValues as an array to the Flask server
    axios.post('http://localhost:5000/process_data', { data: integerValues })
      .then(response => {
        console.log('Server response:', response.data);

        // Navigate to the output component with the processed data
        history.push({
          pathname: '/outputc',
          state: { updatedData: response.data.updatedData },
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <label>Enter Number 1: </label>
      <input
        type="text"
        name="input1"
        value={inputValues.input1}
        onChange={handleChange}
      />
      <br />
      <label>Enter Number 2: </label>
      <input
        type="text"
        name="input2"
        value={inputValues.input2}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputComponent;