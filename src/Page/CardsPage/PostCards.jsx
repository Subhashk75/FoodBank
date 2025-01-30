import React from 'react';

const Cards = (props) => {
  return (
    <div className="post-card-box border-2 border-black p-4 rounded-lg shadow-md bg-white max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      {props.foodName ? (
        <div className="card-container flex flex-col items-center text-center p-4">
          <img 
            src="src/assets/images 1.png" 
            alt="Profile Picture" 
            className="w-20 h-20 rounded-full mb-4 border border-gray-300"
          />
          <h3 className="text-lg font-bold text-gray-800 mb-2"> 
            <strong>Title:</strong> {props.foodName}
          </h3>
          <p className="text-base text-gray-700 mb-2">
            <strong>Meal Type:</strong> {props.mealType}
          </p>
          <p className="text-base text-gray-700 mb-2">
            <strong>Donate Amount:</strong> {props.quantity}
          </p> 
          <p className="text-base text-gray-700 mb-2">
            <strong>Location:</strong> {props.address}
          </p>
          <p className="text-base text-gray-700 mb-2">
            <strong>Pincode:</strong> {props.pincode}
          </p>
          <p className="text-base text-gray-700 mb-2">
            <strong>Contact:</strong> {props.phoneNo}
          </p>
          <p className="text-base text-gray-700 mb-2">
            <strong>Random String:</strong> {props.randomString}
          </p>
          <a 
            href="/AcceptFrom" 
            className="bg-blue-600 text-white py-2 px-4 rounded-md mt-3 hover:bg-blue-700 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default Cards;
