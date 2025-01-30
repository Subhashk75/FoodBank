import React from 'react';
import style from './BlogCardStyles.module.css'; // Link to the CSS file

const BlogCard = (props) => {
  return (
    <div className={style.blogcard-container}>
      {props.title ? (
        <div className={style.blogcard-wrapper}>
          <div className={style.blogcard}>
            
              <img
                src={props.image}
                alt="Profile"
                className={style.blogcard-image}
              />
              <div className={style.blogcard-content}>
                <h3 className={style.blogcard-title}>
                  <strong>Title: </strong>{props.title}
                </h3>
                <p className={style.blogcard-description}>
                  <strong>Contents: </strong>{props.content}
                </p>
                <p className={style.blogcard-author}>By {props.author}</p>
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
