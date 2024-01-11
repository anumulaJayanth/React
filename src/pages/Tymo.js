import React, { useState } from "react";
import Health from "../assets/outputimage2.jpg";
import "../styles/Monoplegia.css";
import { useHistory,Link } from "react-router-dom";
import axios from 'axios';

function Tymo() {
  const [inputValues, setInputValues] = useState({
    name: '',
    age: '',
    sex:'',
    Diabetic:'',
    Smoking:'',
    Alcholic:'',
    Additional_Support:'',
    Additional_Condition:'',
    Additional_Treatment:'',
    Time_Between:'',
    IntialVelocity:'',
    Initial_Cadence:'',
   Initial_Stride_length:'',
    ideal_stance_phase_left:'',
    ideal_stance_phase_right:'',
    ideal_loading_response_left:'',
    load_res_right:'',
    ideal_support_left:'',
    ideal_single_support_right:'',
    ideal_pre_swing_left:'',
    ideal_pre_swing_right:'',
    ideal_swing_left:'',
    ideal_swing_right:''


  }); 
  
  const history = useHistory();
  const handleRedirect = () => {
  const integerValues = Object.values(inputValues).map(value => value);
    console.log('Sending data to Flask server:', integerValues);
    axios.post('http://localhost:5000/process_data', { data: integerValues })
      .then(response => {
        console.log('Server response:', response.data);
        history.push({
          pathname: '/Output',
          state: { updatedData: response.data.updatedData },
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const handleBack = () => {
    history.push("/treatment/pablotests");
  };

  return (
    <div className="Cyberdyne">
      <div className="BannerTop" style={{ backgroundImage: `url(${Health})` }}></div>

      <div className="Input_Area">
      <h2 style={{ textAlign: "center",padding:"10px",textDecoration:"underline" }}>Please Fill Out The Details</h2>

        {/* Personal Info */}
        <div style={{ padding:"10px" }}>
          <h3>Gait Assessment Inputs</h3>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" value={inputValues.name}  onChange={handleChange}/>
                </td>
                <td>
                  <label htmlFor="age">Age</label>
                  <input type="number" name="age"  id="age" value={inputValues.age} onChange={handleChange}/>
                </td>
                
                <td>
                  <label htmlFor="sex">Gender</label>
                  <div>
                  <select name="sex" value={inputValues.sex} onChange={handleChange} id="sex" style={{borderRadius: "4px",border: "0.6px solid #00345f",height: "30px"}} >
                  <option value="" disabled>Select</option>
                    <option name="sex"  value="male">Male</option>
                    <option name="sex"  value="female">Female</option>
                  </select></div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Diseases Enquiry */}
        <div style={{ marginBottom: "20px",padding:"10px" }}>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>     
                <td>
                <label htmlFor="Diabetic">Diabetic</label>
                <div>
                  <select id="Diabetic" name="Diabetic" value={inputValues.Diabetic} onChange={handleChange} style={{borderRadius: "4px",border: "0.6px solid #00345f",height: "30px",width: "100%"}}  >
                  <option name="Diabetic" value="" disabled>Select</option>
                    <option name="Diabetic" value="yes">Yes</option>
                    <option name="Diabetic" value="no">No</option>
                    
                  </select>
                </div>
                </td>
                <td>
                <label htmlFor="Smoking">Smoking</label>
                <div>
                  <select name="Smoking"   style={{borderRadius: "4px",border: "0.6px solid #00345f",height: "30px", width: "100%"}} value={inputValues.Smoking} onChange={handleChange}>
                  <option  value="" disabled >Select</option>
                    <option name="Smoking" value="yes">Yes</option>
                    <option name="Smoking"  value="no">No</option>
                    
                  </select>
                </div>
                </td>
                <td>
                <label htmlFor="Alcholic">Alcholic</label>
                <div>
                 
               <select id="Alcholic" name="Alcholic" onChange = {handleChange} value = {inputValues.Alcholic} style={{borderRadius: "4px",border: "0.6px solid #00345f",height: "30px",width: "100%"}}  >
               <option  value="" disabled >Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    
                  </select>
                </div>
                </td>
                <td>
                <label htmlFor="Additional_Support">Additional Support</label>
                <div>
                  <select id="Additional_Support" name="Additional_Support" value = {inputValues.Additional_Support} onChange = {handleChange}  style={{borderRadius: "4px",border: "0.6px solid #00345f",height: "30px",width: "100%"}}  >
                  <option  value="" disabled >Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                </td>
                <td>
                <label htmlFor="Additional_Condition">Additional Condition</label>
                <div>
                  <select id="Additional_Condition"  name="Additional_Condition" value = {inputValues.Additional_Condition} onChange = {handleChange}  style={{borderRadius: "4px",border: "0.6px solid #00345f",height: "30px",width: "100%"}} >
                  <option  value="" disabled >Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                </td>
                

                </tr>
                <tr>
                <td>
                <label htmlFor="Additional_Treatment">Additional Treatment Given</label>
                <div>
                  <select id="Additional_Treatment" name='Additional_Treatment'  style={{borderRadius: "4px",border: "0.6px solid #00345f",height: "30px",width: "100%"}}  value={inputValues.Additional_Treatment} onChange={handleChange}>
                  <option  value="" disabled >Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                </td>
                <td>
                  <label htmlFor="Time_Between">Time Between Tests</label>
                  <input id="Time_Between" name = "Time_Between" type="number" value={inputValues.Time_Between}   onChange={handleChange}/>
                </td>
                <td>
                  <label htmlFor="IntialVelocity">Initial Velocity</label>
                  <input name="IntialVelocity" value={inputValues.IntialVelocity} onChange={handleChange}  id="IntialVelocity" type="number" />
                </td>
                <td>
                  <label htmlFor="Initial_Cadence">Initial Cadence</label>
                  <input id="Initial_Cadence" name="Initial_Cadence" value={inputValues.Initial_Cadence} onChange={handleChange} type="number" />
                </td>
                <td>
                  <label htmlFor="Initial_Stride_length">Initial Stride length</label>
                  <input id="Initial_Stride_length" name="Initial_Stride_length" value={inputValues.Initial_Stride_length} onChange={handleChange} type="number"/>
                </td>
                </tr>
                <tr>
                <td>
                  <label htmlFor="ideal_stance_phase_left">Initial Deviation From Ideal Stance Phase Left</label>
                  <input id="ideal_stance_phase_left" name="ideal_stance_phase_left" value={inputValues.ideal_stance_phase_left} onChange={handleChange} type="number" />
                </td>
                <td>
                  <label htmlFor="ideal_stance_phase_right">Initial Deviation From Ideal Stance Phase Right</label>
                  <input id="ideal_stance_phase_right" name="ideal_stance_phase_right" value={inputValues.ideal_stance_phase_right} onChange={handleChange} type="number" />
                </td>
                
             
              <td>
                  <label htmlFor="ideal_loading_response_left">Initial Deviation From Ideal Loading Response Left</label>
                  <input id="ideal_loading_response_left" name="ideal_loading_response_left" value={inputValues.ideal_loading_response_left} onChange={handleChange} type="number" />
                </td>
                <td>
                  <label htmlFor="load_res_right">Initial Deviation From Ideal Loading Response Right</label>
                  <input id="load_res_right" name="load_res_right" value={inputValues.load_res_right} onChange={handleChange} type="number" />
                </td>
                <td>
                  <label htmlFor="ideal_support_left">Initial Deviation From Ideal Single Support Left</label>
                  <input id="ideal_support_left" name="ideal_support_left" value={inputValues.ideal_support_left} onChange={handleChange} type="number"/>
                </td>
                </tr>
                <tr>

                <td>
                  <label htmlFor="ideal_single_support_right">Initial Deviation From Ideal Single Support Right</label>
                  <input id="ideal_single_support_right" name="ideal_single_support_right" value={inputValues.ideal_single_support_right} onChange={handleChange} type="number"/>
                </td>
                
                <td>
                  <label htmlFor="ideal_pre_swing_left">Initial Deviation From Ideal Pre Swing Left</label>
                  <input id="ideal_pre_swing_left" name="ideal_pre_swing_left" value={inputValues.ideal_pre_swing_left} onChange={handleChange} type="number"/>
                </td>
               
               
                <td>
                  <label htmlFor="ideal_pre_swing_right">Initial Deviation From Ideal Pre Swing Right</label>
                  <input id="ideal_pre_swing_right"name="ideal_pre_swing_right" value={inputValues.ideal_pre_swing_right} onChange={handleChange} type="number" />
                </td>
                
                <td>
                  <label htmlFor="ideal_swing_left">Initial Deviation From Ideal Swing Left</label>
                  <input id="ideal_swing_left" name="ideal_swing_left" value={inputValues.ideal_swing_left} onChange={handleChange} type="number" />
                </td>
                <td>
                  <label htmlFor="ideal_swing_right">Initial Deviation From Ideal Swing Right</label>
                  <input id="ideal_swing_right" name="ideal_swing_right" value={inputValues.ideal_swing_right} onChange={handleChange} type="number" />
                </td>
              </tr>
             

            </tbody>
          </table>
        </div>


        
        <div style={{  marginTop: "20px",marginBottom: "40px", display: "flex",alignItems: "center",justifyContent: "space-between" }}>

  <button onClick={handleBack}>Back</button>
  <button onClick={handleRedirect}>Process Inputs</button>

        </div>
       
      </div>
    </div>
  );
}

export default Tymo;
