import React, { useEffect, useState } from 'react';
import axios from "axios";
import BlogCard from "../../Page/CardsPage/BlogCard";
import "../../styles/Blog.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { userBlogPost } from '../../Page/ConstantPage/Backend_URL';

const BlogAndNew = () => {
  const [posts, setPosts] = useState([]); // Store fetched posts in state

  // Function to retrieve cookie
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;  // Return null if the cookie doesn't exist
  }

  // Fetch data from API when component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const blogData = getCookie('blogData') || 'defaultToken';  // Example of using cookie
        console.log("Cookie Data: ", blogData);
        console.log("API URL:", userBlogPost);

        const response = await axios.get(userBlogPost, {
          headers: {
            Authorization: `Bearer ${blogData}`  // Send cookie in request headers (optional)
          }
        });
        
        const responseData = response.data.reverse();
        setPosts(responseData); // Update the state with fetched data
      } catch (error) {
        console.error("Error fetching post data:", error);
        setPosts([]);  // Optionally, handle errors
      }
    };

    fetchPosts(); // Call the async function inside useEffect
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='blog-container'>
      <h1>Blog Section</h1>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <Slider {...settings}>
          {posts.map((Data, index) => (
            <div key={index} className='Card-Container'>
              <BlogCard
                image={Data.image}
                content={Data.content}
                title={Data.title}
                author={Data.author}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default BlogAndNew;
