import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import "./DonateFrom.css"
import axios from "axios";

const DonateForm = () => {
    const [foodName, setFoodName] = useState("");
    const [mealType, setMealType] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [district, setDistrict] = useState("Patna");
    const [address, setAddress] = useState("");
    const [pincode, setPinCode] = useState("");

    // console.log(foodName);
    // console.log(mealType);
    const onChangeMealType = e => {
        setMealType(e.target.value)
    }
    const onChangCategory = e => {
        setCategory(e.target.value);
    }
   
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post("http://localhost:8000/api/v1/createPost", {
                foodName,
                category,    // Corrected 'category' to 'category'
                mealType,
                email,
                phoneNo,
                quantity,    // Corrected 'quantity' to 'quantity'
                pincode,
                address,
                district
            });
    
            console.log("Successfully sent email:", response.data);
        } catch (error) {
            console.log("An error occurred:", error.message);
        }
    };
    
    


    return (
        <div className="donate-container" style={{ backgroundImage: `url('src\assets\vision.jpeg')` }}>            <div className="donate-page">
            <h2>Food Donation</h2>

                <form className="donate-form" method="POST" onSubmit={handleSubmit} >

                    <label className="parent-label">
                        <p> Food Name </p>
                        <input id="foodName" style={{ height: "34px" }} type="text" value={foodName} onChange={(e) => {
                            setFoodName(e.target.value);
                        }} />
                    </label><br></br>

                    <label className="parent-label-1">
                        <p>Meal Type</p>
                        <div className=" parent-label-1-div">
                            <input type="radio" name="mealType" value="Veg" id="Veg"
                                checked={mealType === "Veg"}
                                onChange={onChangeMealType}
                            />
                            <label for="Veg"  >Veg</label>
                            <input type="radio" name="mealType" value="Non Veg" id="Non Veg" style={{ marginLeft: "40px" }}
                                checked={mealType === "Non Veg"}
                                onChange={onChangeMealType}
                            />
                            <label for="Non Veg">Non Veg</label>
                        </div>
                    </label><br></br>

                    <label for="selct-category">
                        <p> Select the category</p>
                        <div className="donate-food-selct-category" >
                            <input type="radio" name="mealCategory" value="Raw food" id="Raw food"
                                checked={category === "Raw food"}
                                onChange={onChangCategory}>
                            </input>

                            <label for="Raw food" className="overlap-img-text">Raw food</label>
                            <input type="radio" name="mealCategory" value="Packaged food" id="Packaged food" style={{ gap: "20px" }}
                                checked={category === "Packaged food"}
                                onChange={onChangCategory}>
                            </input>

                            <label for="Packaged food" className="overlap-img-text">Packaged food</label>
                            <input type="radio" name="mealCategory" value="Cooked food" id="Cooked food"
                                checked={category === "Cooked food"}
                                onChange={onChangCategory}>
                            </input>

                            <label for="Cooked food" className="overlap-img-text">Cooked food</label>
                        </div>
                    </label><br></br>

                    <label className="parent-label">
                        <p> Quantity(person)</p>
                        <input type="number" name="personCount" value={quantity} style={{ height: "34px" }} onChange={(e) => {
                            setQuantity(e.target.value);
                        }} />
                    </label ><br></br>
                    <label className="parent-label">
                        <p>  Email </p>
                        <input type="email" style={{ height: "34px" }} value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                    </label><br></br>
                    <label className="parent-label">
                        <p>  Mobile </p>
                        <input type="number" style={{ height: "34px" }} value={phoneNo} onChange={(e) => {
                            setPhoneNo(e.target.value);
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
                        < Button variant="contained" style={{ width: "90px" }} type="submit" > submit</Button>
                    </label>
                </form>
            </div>
        </div>
    );
}
export default DonateForm;