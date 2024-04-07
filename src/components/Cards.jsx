import React from 'react'
import Button from '@mui/material/Button';
const Cards = (props) => {
  return (
    <>

    <div className='Card-Container' style={{display:"flex" , justifyContent:"center" ,flexDirection:"column" ,alignItems:"center",width:"300px" ,height:"400px" ,border:"0.8px solid black" , boxShadow:"0px 0px 2px 1px" ,backgroundColor:"aqua"}}>
    
      <img src="src\assets\images 1.png" alt='this is profile picture' style={{ width: "85px",  height: "85px",  borderRadius: "70px" }}></img>
      <h3>{props.Name}</h3>
      <p>{props.Discription}</p>
      <br></br>
      <Button variant="contained">Contact Me! </Button>
    </div>
    </>
  )
}

export default Cards;

