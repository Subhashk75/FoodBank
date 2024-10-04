
import React from 'react';
const StackHolderCards = (props) => {
  return (
    <>
    {props.Name !==null ?<>
    <div className='Card-Container'>
      <img src="src/assets/images 1.png" alt='Profile Picture' style={{ width: "85px", height: "85px", borderRadius: "50%" }} />
      <h3>{props.Name}</h3>
      <p>{props.Description}</p>
      </div>
    </>:<>  </>}

  </>
  );
};

export default StackHolderCards;
