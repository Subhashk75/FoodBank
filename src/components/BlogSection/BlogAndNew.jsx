import React, { useEffect, useState } from 'react';
import axios from "axios";
import BlogCard from "../../Page/CardsPage/BlogCard";
import "./Blog.css";

const BlogAndNew = () => {
  const [posts, setPosts] = useState([]); // Store fetched posts in state

  // Fetch data from API when component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v2/BlogData");
        console.log(response.data);
        setPosts(response.data); // Update the state with fetched data
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    fetchPosts(); // Call the async function inside useEffect
  }, []);

  return (
    <div className='blog-container'>
      <h1>Blog Section</h1>
      <div className='blog-cards-container'>
        {/* Map over the fetched posts instead of static data */}
        {posts.map((Data, index) => (
          <div key={index} className='blog-card-wrapper'>
            <BlogCard
              image={Data.image}
              content={Data.content}
              title={Data.title}
              author={Data.author}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogAndNew;
