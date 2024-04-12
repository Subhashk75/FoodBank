import React from "react";
import { Link,Outlet} from "react-router-dom";
import Button from '@mui/material/Button';
import food4 from "../assets/food4.jpeg";
const Body = ()=>{
    return (
        <> <div className="body-container">
               <div className="body-img-donate-btn">
               <img src={food4}  className="main-body-img"></img>
        
                <div key={"donate-ind"} className="donate-btn">
                < Button variant="contained"><Link to="/donatefood" style={{textDecoration :'none'}}>Donate</Link></Button>
                {/* <p className="new-paragraph">This is a new paragraph added below the Donate Food button.</p> Add this line */}
                </div>
           </div>
                
                 <div className="Body-img-discription">
                    <p>"Reducing food waste is a delicious way to save money, help feed the world, and protect the planet."

</p>
                 </div>
                 <div className="body-our-work-tag">
                   {/* <p className="body-our-work-discription"><strong>"Look what we can do together..."</strong> </p> */}
                   <br />
                   <p className="body-our-work-title"><strong>OUR WORK</strong></p>
                   {/* <hr className="body-our-work-tag-inline"></hr> */}
                 </div>
                 <div className="body-our-work-team-img">
                    <img src="src\assets\food-3.webp" className="body-our-work-img"></img>
                    <img src="src\assets\food-2.jpg" className="body-our-work-img"></img>
                    <img src="src\assets\food5.jpg" className="body-our-work-img"></img>
                 </div>
                 <div className="Door-Pick">
                    <h2 className="Door-Pick-title">DOOR PICK</h2>
                    <hr className="body-our-work-tag-inline"></hr>
                    <p className="Door-Pick-discription"> "Your donation will be promptly collected and distributed to those in need."</p>
                    <img src="src\assets\deliverly-img.webp" className="Door-Pick-img"></img>

                 </div>
            </div>
       
        </>
    );
}

export default Body;