import React from 'react';
import './BlogCardStyles.css'; // Link to the CSS file

const BlogCard = (props) => {
  return (
    <div className="blogcard-container">
      {props.title ? (
        <div className="blogcard-wrapper">
          <div className="blogcard">
            
              <img
                src={props.image}
                alt="Profile"
                className="blogcard-image"
              />
              <div className="blogcard-content">
                <h3 className="blogcard-title">
                  <strong>Title: </strong>{props.title}
                </h3>
                <p className="blogcard-description">
                  <strong>Contents: </strong>{props.content}
                </p>
                <p className="blogcard-author">By {props.author}</p>
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
