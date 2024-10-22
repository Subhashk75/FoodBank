import React, { useEffect, useState } from 'react';
import Cards from '../../Page/CardsPage/PostCards';
import axios from "axios";
import "./Post.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RecentAddPost(props) {
  const [posts, setPosts] = useState([]); // Store fetched posts in state

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
        const postData = getCookie('postData') || 'defaultToken';  // Example of using cookie

        const response = await axios.get("http://localhost:8000/api/v1/postData", {
          headers: {
            Authorization: `Bearer ${postData}`  // Send cookie in request headers (optional)
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
    slidesToShow: 4,
    slidesToScroll: 3
  };

  return (
    <div>
      <h1 style={{ marginLeft: "10px", marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        Recent Add Post
      </h1>
      <hr className="custom-hr" />

      <div className='about-team' style={{ backgroundColor: "transparent", border: "none", display: "flex" ,flexDirection:"column"}}>
        <Slider {...settings}>
          {/* Map over the fetched posts instead of static data */}
          {posts.map((Data, index) => (
            <div key={index} className='team-cards-container'>
              <Cards 
                foodName={Data.foodName} 
                quantity={Data.quantity} 
                mealType={Data.mealType} 
                address={Data.address} 
                pincode={Data.pincode} 
                phoneNo={Data.phoneNo} 
                randomString={Data.randomString} 
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className='DonateHomes_btn' style={{ marginTop: "15px" }}>
        <button
          type="button"
          onClick={() => console.log(posts)}
        >
          Donate Now
        </button>
      </div>
    </div>
  );
}

export default RecentAddPost;
