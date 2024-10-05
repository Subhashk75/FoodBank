import React from 'react';
import './BlogCards.css'; // Importing CSS file for styling

const BlogCard = (props) => {
  return (
    <>
      {props.title ? (
        <div className='blog-card-container'>
          <div className='blog-card-box'>
          <div className='blog-card-content'>
            <img
              src={props.image}
              alt='Profile'
              className='blog-card-image'
            />
            <div className='blog-text-contents'>
              <h3 className='blog-card-title'> <strong> Title :</strong>{props.title}</h3>
              <p className='blog-card-content-text'><strong>Contents :</strong>{props.content}</p>
              <p className='blog-card-author'>By {props.author}</p>
            </div>
          </div>
          </div>
        </div>
      ) : (
        <>
          {console.log('Not a blog section')}
        </>
      )}
    </>
  );
};

export default BlogCard;
