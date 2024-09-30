
import React from 'react';
import './Cards.css'
import Nav from 'react-bootstrap/Nav';


const Cards = (props) => {
  return (
    <>
    {props.Name !=null ?<>
    <div className='Card-Container'>
      <img src="src/assets/images 1.png" alt='Profile Picture' style={{ width: "85px", height: "85px", borderRadius: "50%" }} />
      <h3>{props.Name}</h3>
      <p>{props.Description}</p>
      </div>
    </>:<>  </>}

    {props.title!=null ?<>
      <div className='Card-Container' >
    <img src="src/assets/images 1.png" alt='Profile Picture' style={{ width: "85px", height: "85px", borderRadius: "50%" }} />

      <h3> <strong>title:</strong> {props.title}</h3>
      <p><strong>Description:</strong>  {props.Description}</p>
      <p> <strong>Donate_Amount:</strong> {props.Donate_Amount} </p> 
      <p>  <strong>Location :</strong>  {props.Location}</p>
      <p> <strong>Contact:</strong> {props.contact}</p>
   
      <Nav.Link href="http://localhost:5173/AcceptFrom"  style={{backgroundColor:"blueviolet"}}> Contact Me</Nav.Link>

    </div>
    </>:<></>}

      {props.Name1!=null? <> <div className='Card-Container'>
      <img src={props.image} alt='Profile Picture' style={{ width: "85px", height: "85px", borderRadius: "50%" }} />
      <h3>{props.Name}</h3>
      <p>{props.Description}</p>
      </div> </>:<> {console.log("not blog section")} </>}

  </>
  );
};

export default Cards;
