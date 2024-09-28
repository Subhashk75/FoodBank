import React from 'react'
import Cards from '../../Page/CardsPage/Cards'
import "./Post.css"
function RecentAddPost() {
  return (
    <div>
      <div className='about-team'>
        <h2>Recent Add Post</h2><br />
        <div className='team-cards-container'>
          <Cards title="Food Donated Today" Donate_Amount="$10 family for a Day"  Description="Dal,Rice And Capaty " Location="Patna Bihar 800005 " contact="+91-7073389497"   />
          <Cards title="Food Donated Today" Donate_Amount="$10 family for a Day"  Description="Dal,Rice And Capaty " Location="Patna Bihar 800005 " contact="+91-7073389497"   />
          <Cards title="Food Donated Today" Donate_Amount="$10 family for a Day"  Description="Dal,Rice And Capaty " Location="Patna Bihar 800005 " contact="+91-7073389497"   />
          <Cards title="Food Donated Today" Donate_Amount="$10 family for a Day"  Description="Dal,Rice And Capaty " Location="Patna Bihar 800005 " contact="+91-7073389497"   />

      </div>
      <div className='DonateHome_btn'>
      <button  style={{backgroundColor:"blue"}} >Donate Now</button>

      </div>
      </div>
    </div>
  )
}

export default RecentAddPost
