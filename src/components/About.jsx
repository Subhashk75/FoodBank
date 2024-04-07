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
    <div className='About-container' style={{}}>
     <Cards Name={"subhash kumawat"}  Discription={"Hello,  my self subhash kumawat from jaipur Rajsthan ,Student of National institute of technology Patna in Branch of computer science and engineering, i am working in 2 year in fullstack developer in Reactjs  "}></Cards>
     <Cards Name={"Rajesh kumawat "}  Discription={"Hello,  my self Rajesh kumawat from jaipur Rajsthan ,Student of National institute of technology Patna in Branch of computer science and engineering, i am working in 2 year in fullstack developer in Reactjs  "}></Cards>
      <Cards Name={"Abishek goyal"}  Discription={"Hello,  my self Abishek goyal from jaipur Rajsthan ,Student of IIIT Bhagalpur in Branch of Electronic communication and engineering, i am working in 2 year in fullstack developer in Reactjs  "}></Cards>
      <Cards Name={"Abinav shakya"}  Discription={"Hello,  my self Abinav shakya from jaipur Rajsthan ,Student of IIIT Bhagalpur in Branch of Electronic communication  and engineering, i am working in 2 year in fullstack developer in Reactjs  "}></Cards> 
       
    </div>
  )
}

export default About;
