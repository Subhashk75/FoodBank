import React, { useEffect, useState } from 'react'

import './about.css'
import image1 from '../../assets/3028767_6d115.jpg'
import image2 from '../../assets/foodbankst-flow.webp'
import image3 from '../../assets/Untitled-design-3.png'

const images =[image1 ,image2,image3,image2,image1,image3];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
      }, 3000); // Adjust time for the slide transition

      return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
  };

  const handleNext = () => {
      setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
  };
  return (
    <>
        <h1 style={{marginLeft:"10px" ,marginTop:"20px" }}  >About Us</h1>

        <div className='about-container'>

        <div className="sliders">
            <div
                className="lists"
                style={{ transform: `translateX(${-currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="items">
                        <img src={image} alt={`Slide ${index + 1}`} className="images" />
                    </div>
                ))}
            </div>
            <div className="about-buttons">
                <button onClick={handlePrev} id="prev">
                    &lt;
                </button>
                <button onClick={handleNext} id="next">
                    &gt;
                </button>
            </div>
       
        </div>

        <div className='about-div-container'>
          <p>
           <strong> A food bank is a charitable organization that collects, stores, and distributes food to individuals and families facing hunger or food insecurity.
           </strong>    Food banks typically partner with local grocery stores, farms, food manufacturers, and community groups to source surplus food that would otherwise 
           go to waste. They distribute this food through direct service or collaborate with local food pantries, shelters, and other non-profit agencies.
           Through volunteer efforts, donations, and partnerships, food banks help ensure that vulnerable populations—such as low-income families, the elderly, 
           and children—have access to food and resources necessary for a healthy life.

          </p>

        </div>

        </div>
        <h1 style={{marginLeft:"10px" ,marginTop:"20px" }}  >OUR MISSION</h1>

        <div className='mission-container' style={{ marginTop: "10px", backgroundColor: "transparent", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
           < div className='mission-image'>
              <img src='./src/assets/Designer (7).png' alt='Mission' style={{ maxWidth: "100%", height: "300px" }} />
            </div>
            <div className='mission-text' style={{ textAlign: "center", marginTop: "20px", maxWidth: "800px" }}>
              <p style={{ fontSize: "20px" }}>
                <strong>Our mission is to bridge the gap between food donors and NGOs, ensuring that surplus food is efficiently redirected to those in need. We are committed to minimizing food waste and promoting sustainability by creating a seamless platform that connects food donors with local organizations, ultimately fostering a community-driven effort to combat hunger and reduce environmental impact.</strong>
              </p>
            </div>
          </div>


    </>
  )
}

export default About;

  {/* <div className='mission-container'>
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
      </div> */}

