import React from 'react'
import RecentAddPost from '../../components/Recent Add Post/RecentAddPost'
import StackHolder from '../../components/stackHolder/StackHolder'
import About from '../../components/AboutSection/About'
import BlogAndNew from '../../components/BlogSection/BlogAndNew'
import DonateProcess from '../../components/DonateFormProcess/DonateProcess'
const HomePage = () => {
  return (
    <div>
      <DonateProcess/>
      <About/>
      <RecentAddPost/>
      <StackHolder/>
      <BlogAndNew/>
    </div>
  )
}

export default HomePage
