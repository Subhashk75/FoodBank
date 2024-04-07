import React from "react";
import { Link ,Outlet} from "react-router-dom";
import Button from '@mui/material/Button';
const Body = ()=>{
    return (
        <> <div className="body-container">
               <div className="body-img-donate-btn">
               <img src="src\assets\food4.jpeg"  className="main-body-img" style={{height:"600px" ,marginLeft:"200px"  }} ></img>
        
                <div key={"donate-ind"} className="donate-btn">
                < Button variant="contained"><Link to="/donatefood" style={{textDecoration :'none'}}>Donate Food</Link></Button>
                </div>
           </div>
                
                 <div className="Body-img-discription">
                    <p>"Cutting food waste is a delicious way of saving money, helping to feed the world and protect the planet.”</p>
                 </div>
                 <div className="body-our-work-tag">
                   <p className="body-our-work-title"><strong>our Work</strong></p>
                   <hr className="body-our-work-tag-inline"></hr>
                   <p className="body-our-work-discription"><strong>"Look what we can do together."</strong> </p>
                 </div>
                 <div className="body-our-work-team-img">
                    <img src="src\assets\food-3.webp" className="body-our-work-img"></img>
                    <img src="src\assets\food-2.jpg" className="body-our-work-img"></img>
                    <img src="src\assets\food5.jpg" className="body-our-work-img"></img>
                 </div>
                 <div className="Door-Pick">
                    <h2 className="Door-Pick-title">DOOP PICK</h2>
                    <hr className="body-our-work-tag-inline"></hr>
                    <p className="Door-Pick-discription"> "Your donate wiil be immediately collected and sent to needy people"</p>
                    <img src="src\assets\deliverly-img.webp" className="Door-Pick-img"></img>

                 </div>
            </div>
       
        </>
    );
}

export default Body;