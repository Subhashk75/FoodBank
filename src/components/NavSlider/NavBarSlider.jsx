import React, { useEffect, useState } from 'react'
import styles from './About.module.css';
import image1 from "../../assets/hq720.jpg"
import image2 from "../../assets/FOOD.png"

const images =[image2,image2,image1,image2,image1];
const NavBarSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
      }, 3000); // Adjust time for the slide transition

      return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
  };

  const handleNext = () => {
      setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
  };


  return (
    <>
        <div className={styles.slider}>
            <div
                className={styles.list}
                style={{ transform: `translateX(${-currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className={styles.item}>
                        <img src={image} alt={`Slide ${index + 1}`} className={styles.image} />
                    </div>
                ))}
            </div>
            <div className={styles.buttons}>
                <button onClick={handlePrev} id="prev">
                    &lt;
                </button>
                <button onClick={handleNext} id="next">
                    &gt;
                </button>
            </div>
       
        </div>
        </>
  )
}

export default NavBarSlider;