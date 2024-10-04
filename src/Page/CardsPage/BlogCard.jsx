import React from 'react';
import "../../components/BlogSection/Blog.css"
// import Nav from 'react-bootstrap/Nav';
const BlogCard = (props) => {
  return (
    <>

    {props.title!=null? <>
    <div style={{display:"flex" ,flexDirection:"column"}}>
     <div className='Card-Container'>
      <img src={props.image} alt='Profile Picture' style={{ width: "85px", height: "85px", borderRadius: "50%" }} />
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <p>{props.author}</p>

      </div></div> </>:<> {console.log("not blog section")} </>}

  </>
  );
};

export default BlogCard;
