import React, { useState } from "react";
import Button from '@mui/material/Button';
import axios from "axios";
import { userAcceptFrom } from "../ConstantPage/Backend_URL";

const AcceptForm = () => {
    const [fullName, setFullName] = useState("");  
    const [personcount, setPersonCount] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [district, setDistrict] = useState("Patna");
    const [address, setAddress] = useState("");
    const [pincode, setPinCode] = useState("");
    const [randomString ,setRandomString]=useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic Validation to check required fields
        if (!fullName || !personcount || !phoneNo || !address || !pincode ||!randomString||!email) {
            alert("All fields are required");
            return;
        }

        try {
            const response = await axios.post(userAcceptFrom, {
                fullName,
                 email,
                personcount,
                phoneNo,
                pincode,
                address,
                district,
                randomString
            });

            console.log("Successfully sent email:", response.data);
        } catch (error) {
            console.log("An error occurred:", error.message);
        }
    };

    return (
        <div className="donate-container">       
            <div className="donate-page">
                <h2>Food Donation</h2>
                <form className="donate-form" method="POST" onSubmit={handleSubmit}>
                    <label className="parent-label">
                        <p>NGO Name</p>
                        <input id="fullName" style={{ height: "34px" }} type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </label><br />
                    <label className="parent-label">
                        <p> Enter Your Card key :</p>
                        <input id="randomString" style={{ height: "34px" }} type="text" value={randomString} onChange={(e) => setRandomString(e.target.value)} />
                    </label><br />
                    <label className="parent-label">
                        <p>Email</p>
                        <input type="email" style={{ height: "34px" }} value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label><br />
                    <label className="parent-label">
                        <p>Quantity (person)</p>
                        <input type="number" name="personcount" value={personcount} style={{ height: "34px" }} onChange={(e) => setPersonCount(e.target.value)} />
                    </label><br />
                    <label className="parent-label">
                        <p>Phone Number</p>
                        <input type="number" style={{ height: "34px" }} value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                    </label><br />
                    <label htmlFor="districts" className="parent-label">District:
                        <select id="districts" name="districts" style={{ height: "34px" }} value={district} onChange={(e) => setDistrict(e.target.value)}>
                            <option value="Patna">Patna</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Chandigarh">Chandigarh</option>
                        </select>
                    </label><br />
                    <label className="parent-label">
                        <p>Address</p>
                        <input type="text" style={{ height: "34px" }} value={address} onChange={(e) => setAddress(e.target.value)} />
                    </label><br />
                    <label className="parent-label">
                        <p>Pin Code</p>
                        <input type="number" style={{ height: "34px" }} value={pincode} onChange={(e) => setPinCode(e.target.value)} />
                    </label><br />
                    <label className="parent-label">
                        <Button variant="contained" type="submit" style={{ width: "90px" }}>Submit</Button>
                    </label>
                </form>
            </div>
        </div>
    );
};

export default AcceptForm;
