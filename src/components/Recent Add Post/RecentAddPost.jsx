import React, { useEffect, useState } from 'react';
import Cards from '../../Page/CardsPage/PostCards';
import axios from "axios";
import "./Post.css";

function RecentAddPost(props) {
  const [posts, setPosts] = useState([]); // Store fetched posts in state

  // Fetch data from API when component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/postData");
        console.log(response.data);
        setPosts(response.data); // Update the state with fetched data
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    fetchPosts(); // Call the async function inside useEffect
    console.log(posts)
  }, []);

  // Filter the posts based on the search input
  // const filteredData = posts.filter(data => 
  //   data.filter.includes(props.searchData) // Filter based on search input
  // );

  return (
    <div>
        <h1 style={{marginLeft:"10px" ,marginTop:"20px" , display:"flex" ,alignItems:"center" ,justifyContent:"center"}}  >RecentAddPost</h1>
        <hr class="custom-hr" />


      <div className='about-team' style={{ backgroundColor: "transparent", border: "none" }}>
        <div className='team-cards-container'>
          {/* Map over the fetched posts instead of static data */}
          {posts.map((Data, index) => (
            <div key={index}>
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
          
          {/* Filtered results when search input is provided */}
          {/* {!props.recentPost && filteredData.length > 0 && filteredData.map((Data, index) => (
            <div key={index}>
              <Cards 
                title={Data.title} 
                Donate_Amount={Data.Donate_Amount} 
                Description={Data.Description} 
                Location={Data.Location} 
                pincode={Data.pincode} 
                contact={Data.contact} 
              />
            </div>
          ))} */}

          {/* Show message if no matches found */}
          {/* {!props.recentPost && filteredData.length === 0 && (
            <div>No results found</div>
          )} */}
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
    </div>
  );
}

export default RecentAddPost;
