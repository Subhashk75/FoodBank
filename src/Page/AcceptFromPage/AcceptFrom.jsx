import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';

// import "./DonatePage/DonateForm.css"
const AcceptFrom = () => {
    const [fName, setFName] = useState("");  
    const [personCount, setPersonCount] = useState("");
    const [personEmail, setPersonEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [district, setDistrict] = useState("Patna");
    const [address, setAddress] = useState("");
    const [pincode, setPinCode] = useState("");


    return (
        <div className="donate-container" >       
             <div className="donate-page">
            <h2>Food Donation</h2>

                <form className="donate-form" >

                    <label className="parent-label">
                        <p> NGO Name </p>
                        <input id="FName" style={{ height: "34px" }} type="text" value={fName} onChange={(e) => {
                            setFName(e.target.value);
                        }} />
                    </label><br></br>
                    <label className="parent-label">
                        <p>  Email </p>
                        <input type="email" style={{ height: "34px" }} value={personEmail}
                            onChange={(e) => {
                                setPersonEmail(e.target.value);
                            }} />
                    </label><br></br>
                    <label className="parent-label">
                        <p> Quantity(person)</p>
                        <input type="number" name="personCount" value={personCount} style={{ height: "34px" }} onChange={(e) => {
                            setPersonCount(e.target.value);
                        }} />
                    </label ><br></br>
                   
                    <label className="parent-label">
                        <p>  Mobile </p>
                        <input type="number" style={{ height: "34px" }} value={mobile} onChange={(e) => {
                            setMobile(e.target.value);
                        }}
                        />
                    </label><br></br>
                    <label for="districts" className="parent-label">District:
                        <select id="districts" name="districts" style={{ height: "34px" }}
                            value={district}
                            onChange={
                                e => setDistrict(e.target.value)
                            } >
                            <option value="Patna">Patna</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Mumbai">Jaipur</option>
                            <option value="Mumbai">Delhi</option>

                            <option value="Chandigarh">Chandigarh</option>
                        </select>
                    </label> <br></br>
                    <label className="parent-label">
                        <p>Address </p>
                        <input type="text" style={{ height: "34px" }} value={address} onChange={(e) => {
                            setAddress(e.target.value);
                        }} />
                    </label><br></br>
                    <label className="parent-label">
                        <p>Pin Code </p>
                        <input type="number" style={{ height: "34px" }} value={pincode} onChange={(e) => {
                            setPinCode(e.target.value);
                        }} />
                    </label><br></br>
                    <label className="parent-label">
                        < Button variant="contained" style={{ width: "90px" }}> submit</Button>
                    </label>
                </form>
            </div>
        </div>
    );
}
export default AcceptFrom;