
import React from 'react';
import Nav from 'react-bootstrap/Nav';


const Cards = (props) => {
  return (
    <>

    {props.title!==null ?<>
      <div className='Card-Container' >
    <img src="src/assets/images 1.png" alt='Profile Picture' style={{ width: "85px", height: "85px", borderRadius: "50%" }} />

      <h3> <strong>title:</strong> {props.foodName}</h3>
      <p><strong>mealType:</strong>  {props.mealType}</p>
      <p> <strong>Donate_Amount:</strong> {props.quantity} </p> 
      <p>  <strong>Location :</strong>  {props.address}</p>
      <p>  <strong>Pincode :</strong>  {props.pincode}</p>

      <p> <strong>Contact:</strong> {props.phoneNo}</p>
      <p> <strong>RandomString:</strong> {props.randomString}</p>

   
      <Nav.Link href="http://localhost:5173/AcceptFrom"  style={{backgroundColor:"blueviolet"}}> Contact Me</Nav.Link>

    </div>
    </>:<></>}

  

  </>
  );
};

export default Cards;
