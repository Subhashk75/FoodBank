import React from 'react';

const StackHolderCards = (props) => {
  return (
    <>
      <div className="p-4 rounded-lg shadow-lg h-80 w-64 bg-white mx-auto">
        {props.Name !== null ? (
          <>
            <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg w-full h-full">
              <img
                src="src/assets/images 1.png"
                alt="Profile Picture"
                className="w-24 h-24 rounded-full mb-4" // Ensures consistent image sizing
              />
              <h3 className="text-lg font-semibold mb-2 text-center">{props.Name}</h3>
              <p className="text-gray-600 text-center text-sm">{props.Description}</p>
            </div>
          </>
        ) : (
          <> </>
        )}
      </div>
    </>
  );
};

export default StackHolderCards;
