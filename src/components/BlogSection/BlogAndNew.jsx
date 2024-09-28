import React from 'react'
import Cards from '../../Page/CardsPage/Cards';
import image1 from '../../assets/3028767_6d115.jpg'
// import image2 from '../../assets/foodbankst-flow.webp'
// import image3 from '../../assets/Untitled-design-3.png'

const BlogAndNew = () => {
  return (
    <div className='Blog-contanier'>
      <h1>blog Section</h1>
      <div className='team-cards-container'>
          <Cards NewPoint="Rajesh$123" image={`${image1}`} Name1='Rajesh kumawat' Description='Rajesh Kumawat is a third-year Computer Science student at the National Institute of Technology Patna. He possesses a strong understanding of computer science principles and their societal impact. Rajesh excels in frontend development, particularly in ReactJS.' />
          <Cards NewPoint="Rajesh$123" image={`${image1}`} Name1='Subhash Kumawat' Description='Subhash Kumawat, also from Jaipur, is a dedicated student at the National Institute of Technology Patna pursuing Computer Science and Engineering. Subhash brings valuable skills to our team and is passionate about frontend development, contributing innovative ideas to our projects.' />
          <Cards NewPoint="Rajesh$123" image={`${image1}`} Name1='Nayandeep Jain' Description='Nayandeep Jain, hailing from Jaipur, is a versatile full-stack MERN developer. Pursuing Computer Science and Engineering at the National Institute of Technology Patna, Nayandeep expertise in both frontend and backend development ensures robust and scalable solutions for our projects.' />
          <Cards NewPoint="Rajesh$123" image={`${image1}`} Name1='Abhishek Kumawat' Description='Abhishek Kumawat is a proficient frontend developer with a keen interest in machine learning. As a member of our team, Abhishek brings in-depth knowledge of computer science subjects, which enriches our project discussions and outcomes.' />
        </div>

    </div>
  )
}

export default BlogAndNew
