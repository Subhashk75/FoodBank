import React from 'react';

const Cards = (props) => {
  return (
    <>
      <div className='post-card-box border-2 border-black p-4 rounded-lg shadow-md'>
        {props.title !== null ? (
          <>
            <div className='Card-Container flex flex-col items-center text-center'>
              <img 
                src="src/assets/images 1.png" 
                alt='Profile Picture' 
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-lg font-bold mb-2"> 
                <strong>Title:</strong> {props.foodName}
              </h3>
              <p className="text-base mb-2">
                <strong>Meal Type:</strong> {props.mealType}
              </p>
              <p className="text-base mb-2">
                <strong>Donate Amount:</strong> {props.quantity}
              </p> 
              <p className="text-base mb-2">
                <strong>Location:</strong> {props.address}
              </p>
              <p className="text-base mb-2">
                <strong>Pincode:</strong> {props.pincode}
              </p>
              <p className="text-base mb-2">
                <strong>Contact:</strong> {props.phoneNo}
              </p>
              <p className="text-base mb-2">
                <strong>Random String:</strong> {props.randomString}
              </p>
              <a href='/AcceptFrom' > Contact Me</a>
              {/* <Nav.Link 
                href="http://localhost:5173/AcceptFrom" 
                className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition-all"
              >
                Contact Me
              </Nav.Link> */}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Cards;
