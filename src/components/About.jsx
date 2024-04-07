import React, { useState } from 'react'
 import Cards from './Cards'
// import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';

// const [Name,setName] =useState("");
// const Card=({Name})=>{
//     <>
//     <h3> Our Team</h3> 
//     {/* <img src= {"./src/assets/team_member.png"} alt='this is '></img> */}
//      <div>
//         setName(props.Name );
//      </div>
//     </>
// }q

const About = () => {
  return (
    <>
    <div className='mission-container'>
      <div className='mission-image'>
        <img src='src\assets\mission.jpeg'></img>
      </div>
      <div className='mission-text'>
          <p>Our mission is to bridge the gap between food donors and NGOs 
            we are ensures that surplus food is efficiently redirected to those in need
             In order to minimizing waste and maintaining sustainability.</p>
      </div>
    </div>
    <div className='vision-container'>
      <div className='vision-text'>
          <p>We envision a future where every plate is filled with nutritious food, 
            where surplus food is valued as a precious resource to be shared rather than wasted, 
            and where collaborative efforts lead to a significant reduction in food waste.
            where our actions contribute to a healthier planet for future generations.</p>
      </div>
      <div className='vision-image'>
        <img src='src\assets\vision.jpeg'></img>
      </div>      
    </div>
    <div className='mission-container'>
      <div className='future_plan-image'>
        <img src='src\assets\future_plan.jpeg'></img>
      </div>
      <div className='future_plan-text'>
          <p>Strengthen and expand partnerships with food donors, including restaurants, 
            grocery stores, caterers, and event organizers. 
            Develop apps that facilitate real-time communication, scheduling, 
            tracking of food donations, and enhancing efficiency.
            We scaling our system for regional and national expansion, 
            strategically targeting areas with high food waste potential.</p>
      </div>
    </div>
    <div className='About-container' style={{display:"flex",justifyContent:"space-between"}}>
     <Cards Name={"subhash kumawat"}  Discription={"Hello,  my self subhash kumawat from jaipur Rajsthan ,Student of National institute of technology Patna in Branch of computer science and engineering, i am working in 2 year in fullstack developer in Reactjs  "}></Cards>
     <Cards Name={"Rajesh kumawat "}  Discription={"Hello,  my self Rajesh kumawat from jaipur Rajsthan ,Student of National institute of technology Patna in Branch of computer science and engineering, i am working in 2 year in fullstack developer in Reactjs  "}></Cards>
      <Cards Name={"Abishek goyal"}  Discription={"Hello,  my self Abishek goyal from jaipur Rajsthan ,Student of IIIT Bhagalpur in Branch of Electronic communication and engineering, i am working in 2 year in fullstack developer in Reactjs  "}></Cards>
      <Cards Name={"Abinav shakya"}  Discription={"Hello,  my self Abinav shakya from jaipur Rajsthan ,Student of IIIT Bhagalpur in Branch of Electronic communication  and engineering, i am working in 2 year in fullstack developer in Reactjs  "}></Cards> 
    </div>
    </>
  )
}

export default About;
