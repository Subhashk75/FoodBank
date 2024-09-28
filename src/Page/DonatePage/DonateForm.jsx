import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import "./DonateFrom.css"
const DonateForm = () => {
    const [foodName, setFoodName] = useState("");
    const [mealType, setMealType] = useState("");
    const [mealCategory, setMealCategory] = useState("");
    const [personCount, setPersonCount] = useState("");
    const [personEmail, setPersonEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [district, setDistrict] = useState("Patna");
    const [address, setAddress] = useState("");
    // console.log(foodName);
    // console.log(mealType);
    console.log(district);
    const onChangeMealType = e => {
        setMealType(e.target.value)
    }
    const onChangeMealCategory = e => {
        setMealCategory(e.target.value);
    }
    return (
        <div className="donate-container" style={{ backgroundImage: `url('src\assets\vision.jpeg')` }}>            <div className="donate-page">
            <h2>Food Donation</h2>

                <form className="donate-form" >

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
                                checked={mealCategory === "Raw food"}
                                onChange={onChangeMealCategory}>
                            </input>

                            <label for="Raw food" className="overlap-img-text">Raw food</label>
                            <input type="radio" name="mealCategory" value="Packaged food" id="Packaged food" style={{ gap: "20px" }}
                                checked={mealCategory === "Packaged food"}
                                onChange={onChangeMealCategory}>
                            </input>

                            <label for="Packaged food" className="overlap-img-text">Packaged food</label>
                            <input type="radio" name="mealCategory" value="Cooked food" id="Cooked food"
                                checked={mealCategory === "Cooked food"}
                                onChange={onChangeMealCategory}>
                            </input>

                            <label for="Cooked food" className="overlap-img-text">Cooked food</label>
                        </div>
                    </label><br></br>

                    <label className="parent-label">
                        <p> Quantity(person)</p>
                        <input type="number" name="personCount" value={personCount} style={{ height: "34px" }} onChange={(e) => {
                            setPersonCount(e.target.value);
                        }} />
                    </label ><br></br>
                    <label className="parent-label">
                        <p>  Email </p>
                        <input type="email" style={{ height: "34px" }} value={personEmail}
                            onChange={(e) => {
                                setPersonEmail(e.target.value);
                            }} />
                    </label><br></br>
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
                        < Button variant="contained" style={{ width: "90px" }}> submit</Button>
                    </label>
                </form>
            </div>
        </div>
    );
}
export default DonateForm;