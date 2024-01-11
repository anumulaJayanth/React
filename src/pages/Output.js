import React, { useState,useEffect } from "react";
import Health from "../assets/output6.jpg";
import "../styles/Monoplegia.css";
import {useHistory , Link} from "react-router-dom";

  const Output = ({ location }) => {
    const [output1, setOutput1] = useState('');
    const [output2, setOutput2] = useState('');
    const [output3, setOutput3] = useState('');
    const [output4, setOutput4] = useState('');
    const [output5, setOutput5] = useState('');
    const [output6, setOutput6] = useState('');
    const [output7, setOutput7] = useState('');
    const [output8, setOutput8] = useState('');
    const [output9, setOutput9] = useState('');
    const [output10, setOutput10] = useState('');
    const [output11, setOutput11] = useState('');
    const [output12, setOutput12] = useState('');
    const [output13, setOutput13] = useState('');
    const [output14, setOutput14] = useState('');
    const [output15, setOutput15] = useState('');
    const [output16, setOutput16] = useState('');
    const [output17, setOutput17] = useState('');
    const [output18, setOutput18] = useState('');
    const [output19, setOutput19] = useState('');
    const [output20, setOutput20] = useState('');
    const [output21, setOutput21] = useState('');
    const [output22, setOutput22] = useState('');
    const [output23, setOutput23] = useState('');
    const [output24, setOutput24] = useState('');
    const [output25, setOutput25] = useState('');
    const [output26, setOutput26] = useState('');
    const [output27, setOutput27] = useState('');
    const [output28, setOutput28] = useState('');


  
    useEffect(() => {
      const receivedData = location.state.updatedData;
  
      console.log('Received Data:', receivedData);
  
      if (receivedData && receivedData.length === 28) {
        console.log('Updating State:', receivedData);
        setOutput1(String(receivedData[0]));
        setOutput2(String(receivedData[1]));
        setOutput3(String(receivedData[2]));
        setOutput4(String(receivedData[3]));
        setOutput5(String(receivedData[4]));
        setOutput6(String(receivedData[5]));
        setOutput7(String(receivedData[6]));
        setOutput8(String(receivedData[7]));
        setOutput9(String(receivedData[8]));
        setOutput10(String(receivedData[9]));
        setOutput11(String(receivedData[10]));
        setOutput12(String(receivedData[11]));
        setOutput13(String(receivedData[12]));
        setOutput14(String(receivedData[13]));
        setOutput15(String(receivedData[14]));
        setOutput16(String(receivedData[15]));
        setOutput17(String(receivedData[16]));
        setOutput18(String(receivedData[17]));
        setOutput19(String(receivedData[18]));
        setOutput20(String(receivedData[19]));
        setOutput21(String(receivedData[20]));
        setOutput22(String(receivedData[21]));
        setOutput23(String(receivedData[22]));
        setOutput24(String(receivedData[23]));
        setOutput25(String(receivedData[24]));
        setOutput26(String(receivedData[25]));
        setOutput27(String(receivedData[26]));
        setOutput28(String(receivedData[27]));
        


      }
    }, [location.state.updatedData]);
  

 
  const history = useHistory();
  const handleRedirect = () => {
    history.push("/treatment/Tymo");
  };

  return (
    <div className="Cyberdyne">
      <div className="BannerTop" style={{ backgroundImage: `url(${Health})` }}></div>

      <div className="Input_Area">
      <h2 style={{ textAlign: "center",padding:"10px",textDecoration:"underline" }}>Processed Outputs</h2>



        {/* Diseases Enquiry */}
        <div style={{ marginBottom: "20px",padding:"10px",marginTop:"20px" }}>
         
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="diabetic">Change In Velocity (KM/H)</label>
                  <input id="diabetic" type="text" value={output1} />
                </td>
                <td>
                  <label htmlFor="geneticDiseases">Change In Cadence (Steps/Min)</label>
                  <input id="geneticDiseases" type="text" value={output2}/>
                </td>
                <td>
                  <label htmlFor="existingDiseases">Change In Stride Length(CM)</label>
                  <input id="existingDiseases" type="text" value={output3} />
                </td>
                <td>
                  <label htmlFor="therapist">Change In Cycle Duration Left</label>
                  <input id="therapist" type="text" value={output4} />
                </td>
                <td>
                  <label htmlFor="testDuration">Change In Cycle Duration Right</label>
                  <input id="testDuration" type="text" value={output5} />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="Additional_Support">Change In Stance Phase Left</label>
                  <input id="Additional_Support" type="text" value={output6}/>
                </td>
                <td>
                  <label htmlFor="Condition">Change In Stance Phase Right</label>
                  <input id="Condition" type="text" value={output7} />
                </td>
                <td>
                  <label htmlFor="Additional_Condition">Change In Loading Response Left</label>
                  <input id="Additional_Condition" type="text" value={output8} />
                </td>
                <td>
                  <label htmlFor="Additional_Treatment">Change In Loading Response Right</label>
                  <input id="Additional_Treatment" type="text" value={output9} />
                </td>
                <td>
                  <label htmlFor="Initial_Stride_length">Change In Single Support Left</label>
                  <input id="Initial_Stride_length" type="text" value={output10} />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="ideal_support_left">Change In Single Support Right</label>
                  <input id="ideal_support_left" type="text" value={output11}/>
                </td>
                <td>
                  <label htmlFor="load_res_right">Change In Pre Swing Left</label>
                  <input id="load_res_right" type="text" value={output12} />
                </td>
                <td>
                  <label htmlFor="ideal_stance_phase_left">Change In Pre Swing Right</label>
                  <input id="ideal_stance_phase_left" type="text" value={output13}/>
                </td>
                <td>
                  <label htmlFor="ideal_stance_phase_right">Change In Swing Phase Left</label>
                  <input id="ideal_stance_phase_right" type="text" value={output14} />
                </td>
                <td>
                  <label htmlFor="ideal_swing_left">Change In Swing Phase Right</label>
                  <input id="ideal_swing_left" type="text" value={output15} />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="ideal_pre_swing_left">Change In Double Support</label>
                  <input id="ideal_pre_swing_left" type="text" value={output16}/>
                </td>
                <td>
                  <label htmlFor="ideal_single_support_right">Change In Angle Foot/Floor Maximum Sagittal Left</label>
                  <input id="ideal_single_support_right" type="text" value={output17}/>
                </td>
                <td>
                  <label htmlFor="ideal_loading_response_left">Change In Angle Foot/Floor Maximum Sagittal Right</label>
                  <input id="ideal_loading_response_left" type="text" value={output18} />
                </td>
                <td>
                  <label htmlFor="ideal_pre_swing_right">Change In Angle Foot/Floor Minimum Sagittal Left</label>
                  <input id="ideal_pre_swing_right" type="text" value={output19} />
                </td>
                <td>
                  <label htmlFor="Time between tests (days)">Change In Angle Foot/Floor Minimum Sagittal Right</label>
                  <input id="Time between tests (days)" type="text" value={output20} />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor=",Initial_Cadence">Change In Angle Foot/Floor Maximum Frontal Left</label>
                  <input id="Initial_Cadence" type="text" value={output21}/>
                </td>
                <td>
                  <label htmlFor="Initial_Velocity">Change In Angle Foot/Floor Maximum Frontal Right</label>
                  <input id="Initial_Velocity" type="text" value={output22} />
                </td>
                <td>
                  <label htmlFor="ideal_swing_right">Change In Angle Foot/Floor Minimum Frontal Left</label>
                  <input id="ideal_swing_right" type="text" value={output23}/>
                </td>
                <td>
                  <label htmlFor="ideal_swing_right">Change In Angle Foot/Floor Minimum Frontal Right</label>
                  <input id="ideal_swing_right" type="text" value={output24}/>
                </td>
                <td>
                  <label htmlFor="ideal_swing_right">Change In Vertical Lift Maximum Left</label>
                  <input id="ideal_swing_right" type="text" value={output25}/>
                </td>
              </tr>
              <tr>
              <td>
                  <label htmlFor="ideal_swing_right">Change In Vertical Lift Maximum Right</label>
                  <input id="ideal_swing_right" type="text" value={output26} />
                </td>
                <td>
                  <label htmlFor="ideal_swing_right">Change In Lateral Deviation Maximum Left</label>
                  <input id="ideal_swing_right" type="text" value={output27} />
                </td>
                <td>
                  <label htmlFor="ideal_swing_right">Change In Lateral Deviation Maximum Right</label>
                  <input id="ideal_swing_right" type="text" value={output28} />
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
        <div style={{ textAlign: "center", marginTop: "20px",marginBottom: "40px" }}>

<button onClick={handleRedirect}>Back</button>


      </div>
      </div>
    </div>
  );
}

export default Output;
