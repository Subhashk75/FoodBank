import React, { useEffect, useState } from 'react';
import axios from "axios";
import BlogCards from '../CardsPage/BlogCard';
function RecentAddPost(props) {
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

  // Filter the posts based on the search input
  // const filteredData = posts.filter(data => 
  //   data.filter.includes(props.searchData) // Filter based on search input
  // );

  return (
    <div>
      <h1>Recent Add Post</h1><br />

      <div className='about-team' style={{ backgroundColor: "transparent", border: "none" }}>
        <div className='team-cards-container'>
          {/* Map over the fetched posts instead of static data */}
          {posts.map((Data, index) => (
            <div key={index}>
              <BlogCards
                image={Data.image} 
                content={Data.content} 
                title={Data.title} 
                author={Data.author} 
              />
            </div>
          ))}
          
          {/* Filtered results when search input is provided */}
         
        </div>
        
        <div className='DonateHome_btn' style={{ marginTop: "15px" }}>
          <button
            type="button"
            onClick={() => console.log(posts)}
            className="w-5 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecentAddPost;
