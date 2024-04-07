import { useState } from "react";
const Profile=()=>{
    const [id,setId] = useState(1);
    const [name,setName] = useState("Full Name");
    const [address,setAddress] = useState("address");
    const [totalDonation,setTotalDonation] = useState(0);
    const [totalReward,setTotalReward] = useState(0);
    return (
        <div className="profile-card">
            <div className="profile-heading">
                <h2>Profile</h2>
            </div >
            <div className="profile-page">
            <h2>Id : {id}</h2>
            <h2>Name :{name}</h2>
            <h2>Address :{address}</h2>
            <h2>Total Donation :{totalDonation}</h2>
            <h2>Total Reward :{totalReward}</h2>
            </div>
        </div>
    );
}
export default Profile;