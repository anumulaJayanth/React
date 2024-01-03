import React, { useState } from "react";
import Health from "../assets/form.jpg";
import "../styles/Monoplegia.css";
import { useHistory } from "react-router-dom";

function Tymo() {
  const [isDiabetic, setIsDiabetic] = useState("");
  const [additionalFields, setAdditionalFields] = useState([]);
  const [newFieldLabel, setNewFieldLabel] = useState("");
  const [newFieldValue, setNewFieldValue] = useState("");

  const handleDiabeticChange = (event) => {
    setIsDiabetic(event.target.value);
  };
  const handleAddField = () => {
    if (newFieldLabel && newFieldValue) {
      setAdditionalFields([...additionalFields, { label: newFieldLabel, value: newFieldValue }]);
      setNewFieldLabel("");
      setNewFieldValue("");
    }
  };
  const history = useHistory();
  const handleRedirect = () => {
    history.push("/Output");
  };


  return (
    <div className="Cyberdyne">
      <div className="BannerTop" style={{ backgroundImage: `url(${Health})` }}></div>

      <div className="Input_Area">
      <h2 style={{ textAlign: "center",padding:"10px" }}>Please Fill Out The Details</h2>

        {/* Personal Info */}
        <div style={{ marginBottom: "20px",padding:"10px" }}>
          <h3>Personal Info</h3>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" />
                </td>
                <td>
                  <label htmlFor="age">Age</label>
                  <input id="age" type="number" />
                </td>
                <td>
                  <label htmlFor="date">Date</label>
                  <input id="date" type="date" />
                </td>
                <td>
                  <label htmlFor="time">Time</label>
                  <input id="time" type="time" />
                </td>
                <td>
                  <label htmlFor="sex">Gender</label>
                  <div>
                  <select id="sex"  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select></div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Diseases Enquiry */}
        <div style={{ marginBottom: "20px",padding:"10px" }}>
          <h3>Diseases Enquiry</h3>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="diabetic">Diabetic</label>
                  <input id="diabetic" type="text" value={isDiabetic} onChange={handleDiabeticChange} />
                </td>
                <td>
                  <label htmlFor="geneticDiseases">Genetic Diseases</label>
                  <input id="geneticDiseases" type="text" />
                </td>
                <td>
                  <label htmlFor="existingDiseases">Existing Diseases</label>
                  <input id="existingDiseases" type="text" />
                </td>
                <td>
                  <label htmlFor="therapist">Treatment</label>
                  <input id="therapist" type="text" />
                </td>
                <td>
                  <label htmlFor="testDuration">Treatment Duration</label>
                  <input id="testDuration" type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="Additional_Support">Additional Support</label>
                  <input id="Additional_Support" type="text"/>
                </td>
                <td>
                  <label htmlFor="Condition">Condition</label>
                  <input id="Condition" type="text" />
                </td>
                <td>
                  <label htmlFor="Additional_Condition">Additional Condition</label>
                  <input id="Additional_Condition" type="text" />
                </td>
                <td>
                  <label htmlFor="Additional_Treatment">Additional Treatment Given</label>
                  <input id="Additional_Treatment" type="text" />
                </td>
                <td>
                  <label htmlFor="Initial_Stride_length">Initial Stride length</label>
                  <input id="Initial_Stride_length" type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="ideal_support_left">Initial deviation from ideal single support left</label>
                  <input id="ideal_support_left" type="text"/>
                </td>
                <td>
                  <label htmlFor="load_res_right">Initial deviation from ideal loading response right</label>
                  <input id="load_res_right" type="text" />
                </td>
                <td>
                  <label htmlFor="ideal_stance_phase_left">Initial deviation from ideal stance phase left</label>
                  <input id="ideal_stance_phase_left" type="text" />
                </td>
                <td>
                  <label htmlFor="ideal_stance_phase_right">Initial deviation from ideal stance phase right</label>
                  <input id="ideal_stance_phase_right" type="text" />
                </td>
                <td>
                  <label htmlFor="ideal_swing_left">Initial deviation from ideal swing left</label>
                  <input id="ideal_swing_left" type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="ideal_pre_swing_left">Initial deviation from ideal pre swing left</label>
                  <input id="ideal_pre_swing_left" type="text"/>
                </td>
                <td>
                  <label htmlFor="ideal_single_support_right">Initial deviation from ideal single support right</label>
                  <input id="ideal_single_support_right" type="text" />
                </td>
                <td>
                  <label htmlFor="ideal_loading_response_left">Initial deviation from ideal loading response left</label>
                  <input id="ideal_loading_response_left" type="text" />
                </td>
                <td>
                  <label htmlFor="ideal_pre_swing_right">Initial deviation from ideal pre swing right</label>
                  <input id="ideal_pre_swing_right" type="text" />
                </td>
                <td>
                  <label htmlFor="Time between tests (days)">Time between tests (days)</label>
                  <input id="Time between tests (days)" type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor=",Initial_Cadence">Initial Cadence</label>
                  <input id="Initial_Cadence" type="text"/>
                </td>
                <td>
                  <label htmlFor="Initial_Velocity">Initial Velocity</label>
                  <input id="Initial_Velocity" type="text" />
                </td>
                <td>
                  <label htmlFor="ideal_swing_right">Initial deviation from </label>
                  <input id="ideal_swing_right" type="text" />
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Center Pressure Parameter Details */}
        {/* <div>
          <h3>Center Pressure Parameter Details</h3>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="distance">Distance</label>
                </td>
                <td>
                  <label htmlFor="m1">M1</label>
                  <input id="distanceM1" type="number" />
                </td>
                <td>
                  <label htmlFor="m2">M2</label>
                  <input id="distanceM2" type="number" />
                </td>
                <td>
                  <label htmlFor="m3">M3</label>
                  <input id="distanceM3" type="number" />
                </td>
                <td>
                  <label htmlFor="m4">M4</label>
                  <input id="distanceM4" type="number" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="medialLateralDisplacement">Medial-Lateral Displacement</label>
                </td>
                <td>

                  <input id="medialLateralDisplacementM1" type="number" />
                </td>
                <td>

                  <input id="medialLateralDisplacementM2" type="number" />
                </td>
                <td>

                  <input id="medialLateralDisplacementM3" type="number" />
                </td>
                <td>

                  <input id="medialLateralDisplacementM4" type="number" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="anteriorPosteriorDisplacement">Anterior-Posterior Displacement</label>
                </td>
                <td>

                  <input id="anteriorPosteriorDisplacementM1" type="number" />
                </td>
                <td>

                  <input id="anteriorPosteriorDisplacementM2" type="number" />
                </td>
                <td>

                  <input id="anteriorPosteriorDisplacementM3" type="number" />
                </td>
                <td>

                  <input id="anteriorPosteriorDisplacementM4" type="number" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="swayArea">Sway Area</label>
                </td>
                <td>

                  <input id="swayAreaM1" type="number" />
                </td>
                <td>

                  <input id="swayAreaM2" type="number" />
                </td>
                <td>

                  <input id="swayAreaM3" type="number" />
                </td>
                <td>

                  <input id="swayAreaM4" type="number" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="averageVelocity">Average Velocity</label>
                </td>
                <td>
                  
                  <input id="averageVelocityM1" type="number" />
                </td>
                <td>
                  
                  <input id="averageVelocityM2" type="number" />
                </td>
                <td>
                 
                  <input id="averageVelocityM3" type="number" />
                </td>
                <td>

                  <input id="averageVelocityM4" type="number" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="weightDistribution">Weight Distribution</label>
                </td>
                <td>
                  
                  <input id="weightDistributionM1" type="number" />
                </td>
                <td>
                 
                  <input id="weightDistributionM2" type="number" />
                </td>
                <td>

                  <input id="weightDistributionM3" type="number" />
                </td>
                <td>
                  
                  <input id="weightDistributionM4" type="number" />
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
        {/* Additional Fields */}
        {/* <div>
          <h3>Additional Fields</h3>
          <table style={{ width: "100%" }}>
            <tbody>
          {additionalFields.map((field, index) => (
            
            <div key={index}>
              <strong>{field.label}:</strong>  <input
              id={index}
              type="text"
              value={field.value}
              style={{  width: "125px" , marginBottom:"25px"}}
            />
            </div>
          ))}
          </tbody>
          </table>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="newFieldLabel" style={{  marginTop: "20px" }}>Label:</label>
            <input
              id="newFieldLabel"
              type="text"
              value={newFieldLabel}
              onChange={(e) => setNewFieldLabel(e.target.value)}
              style={{  width: "125px" }}
            />
            <label htmlFor="newFieldValue" style={{  marginTop: "20px" }}>Value:</label>
            <input
              id="newFieldValue"
              type="text"
              value={newFieldValue}
              onChange={(e) => setNewFieldValue(e.target.value)}
              style={{  width: "125px" }}
            />
            <button style={{   height:"40px" }}onClick={handleAddField}>Add Field</button>
          </div>
        </div> */}


        {/* Submit Button */}
        <div style={{ textAlign: "center", marginTop: "20px",marginBottom: "40px"  }}>
        <button onClick={handleRedirect}>Process Inputs</button>
        </div>
      </div>
    </div>
  );
}

export default Tymo;
