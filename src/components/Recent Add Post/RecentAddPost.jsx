import React, { useState } from 'react'
import Cards from '../../Page/CardsPage/Cards'
import { postData } from '../../Page/ConstantPage/ConstantPage'
import "./Post.css"
function RecentAddPost(props) {

  // Assuming search is the string you're looking for
  const filteredData = postData.filter(data => 
    data.pincode.includes(props.searchData) // Filter based on search input
  );
  return (
    <div>
      <h1>Recent Add Post</h1><br />

      <div className='about-team' style={{backgroundColor:"transparent" ,border:"none"}}>
        <div className='team-cards-container'>
        {postData.map((Data, index) => {
           return (
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
    );
  })}
    {!props.recentPost && filteredData.length > 0 && filteredData.map((Data, index) => {
      return (
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
      );
    })}

    {/* Optional: Message when no matches found */}
    {!props.recentPost && filteredData.length === 0 && (
      <div>No results found</div>
    )}
  


     </div>
      <div className='DonateHome_btn' style={{marginTop:"15px"}}>
      <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Donate Now
            </button>
      </div>
      </div>
    </div>
  )
}

export default RecentAddPost
