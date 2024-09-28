
import React from 'react';
import Button from '@mui/material/Button';
import './Cards.css'


const Cards = (props) => {
  const handleContactClick = () => {
    // Define the email address and subject
    const emailAddress = 'example@example.com';
    const subject = 'Inquiry from Website';

    // Encode special characters in the subject
    const encodedSubject = encodeURIComponent(subject);

    // Construct the mailto URL with the email address and subject
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodedSubject}`;

    // Open the user's default email client with the pre-filled email
    window.location.href = mailtoUrl;
  };

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
   

      <Button variant="contained" onClick={handleContactClick}>
        Contact Me!
      </Button>
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
