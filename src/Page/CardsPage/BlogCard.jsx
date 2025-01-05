import React from 'react';
import "../../styles/BlogCards.css"
const BlogCard = (props) => {
  return (
    <div className="flex justify-center items-center w-full">
      {props.title ? (
        <div className="w-full transition-transform duration-300 ease-in-out max-w-md mx-4">
          <div className="bg-white rounded-lg h-full overflow-hidden shadow-lg">
            <div className="flex flex-col items-center">
              <img
                src={props.image}
                alt="Profile"
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-3">
                  <strong>Title: </strong>{props.title}
                </h3>
                <p className="text-base mb-3">
                  <strong>Contents: </strong>{props.content}
                </p>
                <p className="text-sm text-gray-600">By {props.author}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        console.log('Not a blog section')
      )}
    </div>
  );
};

export default BlogCard;
