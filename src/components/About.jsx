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
          <img src='./src/assets/Designer (7).png' alt='Mission' width='200px' height='200px' />
        </div>
        <div className='mission-text'>
          <p>
            Our mission is to bridge the gap between food donors and NGOs, ensuring that surplus food is efficiently redirected to those in need. We are committed to minimizing food waste and promoting sustainability by creating a seamless platform that connects food donors with local organizations, ultimately fostering a community-driven effort to combat hunger and reduce environmental impact.
          </p>
        </div>
      </div>

      <div className='vision-container'>
        <div className='vision-text'>
          <p>
            We envision a future where every plate is filled with nutritious food. We see surplus food as a precious resource to be shared rather than wasted, leading to collaborative efforts that significantly reduce food waste. Through our actions, we strive to contribute to a healthier planet for future generations, where sustainable practices and community engagement pave the way towards a more equitable and nourished world.
          </p>
        </div>
        <div className='vision-image'>
          <img src='./src/assets/Designer (8).png' alt='Vision' width='200px' height='200px' />
        </div>
      </div>

      <div className='future-plan-container'>
        <div className='future-plan-image'>
          <img src='./src/assets/Designer (9).png' alt='Future Plans' width='200px' height='200px' />
        </div>
        <div className='future-plan-text'>
          <p>
            <strong>Future Plans:</strong>
            <br />
            <br />
            <strong>Strengthen and Expand Partnerships:</strong> Forge strategic partnerships with food donors, including restaurants, grocery stores, caterers, and event organizers. Cultivate relationships to ensure a steady supply of surplus food for redistribution.
            <br />
            <br />
            <strong>Develop Innovative Apps:</strong> Create user-friendly applications that enable real-time communication, scheduling, and tracking of food donations. Implement features to enhance operational efficiency and transparency in food redistribution processes.
          </p>
        </div>
      </div>

      <div className='about-team'>
        <h2>Our Team</h2><br />
        <div className='team-cards-container'>
          <Cards Name='Rajesh Kumawat' Description='Rajesh Kumawat is a third-year Computer Science student at the National Institute of Technology Patna. He possesses a strong understanding of computer science principles and their societal impact. Rajesh excels in frontend development, particularly in ReactJS.' />
          <Cards Name='Subhash Kumawat' Description='Subhash Kumawat, also from Jaipur, is a dedicated student at the National Institute of Technology Patna pursuing Computer Science and Engineering. Subhash brings valuable skills to our team and is passionate about frontend development, contributing innovative ideas to our projects.' />
          <Cards Name='Nayandeep Jain' Description='Nayandeep Jain, hailing from Jaipur, is a versatile full-stack MERN developer. Pursuing Computer Science and Engineering at the National Institute of Technology Patna, Nayandeep expertise in both frontend and backend development ensures robust and scalable solutions for our projects.' />
          <Cards Name='Abhishek Kumawat' Description='Abhishek Kumawat is a proficient frontend developer with a keen interest in machine learning. As a member of our team, Abhishek brings in-depth knowledge of computer science subjects, which enriches our project discussions and outcomes.' />
        </div>
      </div>
    </>
  )
}

export default About;



