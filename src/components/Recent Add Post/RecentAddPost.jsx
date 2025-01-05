import { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules'; // Import Swiper modules
import Cards from '../../Page/CardsPage/PostCards';
import '../../styles/RecentAddPost.css'; // Add custom styling

const RecentAddPost = () => {
  const [posts, setPosts] = useState([]);

  // Function to get cookies
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  // Fetching posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postData = getCookie('postData') || 'defaultToken';
        const response = await axios.get('http://localhost:8000/api/v1/postData', {
          headers: { Authorization: `Bearer ${postData}` },
        });
        setPosts(response.data.reverse());
      } catch (error) {
        console.error('Error fetching post data:', error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="blog-section">
      <header className="section-header">
        <h3>RecentAddPost </h3>
        <h1>please pick this Post According </h1>
        <hr className="custom-hr" />      </header>
      <div className="team-box">
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev">⟨</div>
        <div className="swiper-button-next">⟩</div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }} // Custom navigation buttons
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Navigation, Pagination]} // Add Swiper modules
          className="mySwiper"
        >
          {posts.map((Data, index) => (
            <SwiperSlide key={index}>
              <Cards
                foodName={Data.foodName}
                quantity={Data.quantity}
                mealType={Data.mealType}
                address={Data.address}
                pincode={Data.pincode}
                phoneNo={Data.phoneNo}
                randomString={Data.randomString}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecentAddPost;
