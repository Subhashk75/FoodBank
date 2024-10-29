import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import navigation styles
import { Pagination, Navigation } from 'swiper/modules';  // Import Pagination and Navigation modules
import StackHolderCards from '../../Page/CardsPage/StackHolderCards';

const Contact = () => {
   


  return (
    <>
      <h1 className="flex items-center justify-center mt-5 text-2xl font-semibold">Volunteers</h1>
      <hr className="border-2 border-black bg-chocolate w-4/5 mx-auto my-5" />
      
      <div className="container mx-auto p-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }} // Enable custom navigation buttons
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Navigation]}  // Add Pagination and Navigation modules here
          className="mySwiper"
        >
          <SwiperSlide>
            <StackHolderCards 
              keyPoint="Subhash$123" 
              Name='Rajesh Kumawat' 
              Description='Rajesh Kumawat is a third-year Computer Science student at the National Institute of Technology Patna. He possesses a strong understanding of computer science principles and their societal impact. Rajesh excels in frontend development, particularly in ReactJS.' 
            />
          </SwiperSlide>
          <SwiperSlide>
            <StackHolderCards 
              keyPoint="Subhash$123" 
              Name='Subhash Kumawat' 
              Description='Subhash Kumawat, also from Jaipur, is a dedicated student at the National Institute of Technology Patna pursuing Computer Science and Engineering. Subhash brings valuable skills to our team and is passionate about frontend development, contributing innovative ideas to our projects.' 
            />
          </SwiperSlide>
          <SwiperSlide>
            <StackHolderCards 
              keyPoint="Subhash$123" 
              Name='Nayandeep Jain' 
              Description='Nayandeep Jain, hailing from Jaipur, is a versatile full-stack MERN developer. Pursuing Computer Science and Engineering at the National Institute of Technology Patna, Nayandeep expertise in both frontend and backend development ensures robust and scalable solutions for our projects.' 
            />
          </SwiperSlide>
          <SwiperSlide>
            <StackHolderCards 
              keyPoint="Subhash$123" 
              Name='Abhishek Kumawat' 
              Description='Abhishek Kumawat is a proficient frontend developer with a keen interest in machine learning. As a member of our team, Abhishek brings in-depth knowledge of computer science subjects, which enriches our project discussions and outcomes.' 
            />
          </SwiperSlide>

          {/* Custom navigation buttons */}
          <div className="swiper-button-prev" ></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </>
  );
};

export default Contact;
