import React from 'react'
import Cards from '../../Page/CardsPage/Cards'
import "./Post.css"
function RecentAddPost() {
  return (
    <div>
      <h1>Recent Add Post</h1><br />

      <div className='about-team' style={{backgroundColor:"transparent" ,border:"none"}}>
        <div className='team-cards-container'>
          <Cards title="Food Donated Today" Donate_Amount="$10 family for a Day"  Description="Dal,Rice And Capaty " Location="Patna Bihar 800005 " contact="+91-7073389497"   />
          <Cards title="Food Donated Today" Donate_Amount="$10 family for a Day"  Description="Dal,Rice And Capaty " Location="Patna Bihar 800005 " contact="+91-7073389497"   />
          <Cards title="Food Donated Today" Donate_Amount="$10 family for a Day"  Description="Dal,Rice And Capaty " Location="Patna Bihar 800005 " contact="+91-7073389497"   />
          <Cards title="Food Donated Today" Donate_Amount="$10 family for a Day"  Description="Dal,Rice And Capaty " Location="Patna Bihar 800005 " contact="+91-7073389497"   />

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
