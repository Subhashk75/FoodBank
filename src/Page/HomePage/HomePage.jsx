import React from 'react'
import RecentAddPost from '../../components/Recent Add Post/RecentAddPost'
import StackHolder from '../../components/stackHolder/StackHolder'
import About from '../../components/AboutSection/About'
import BlogAndNew from '../../components/BlogSection/BlogAndNew'
const HomePage = () => {
  return (
    <div>
      <About/>
      <RecentAddPost/>
      <StackHolder/>
      <BlogAndNew/>
    </div>
  )
}

export default HomePage
