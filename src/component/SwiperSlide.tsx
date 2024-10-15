import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import image1 from "../assets/csr-3.jpg";
import image2 from "../assets/Slider3.jpg";
import EastIcon from "@mui/icons-material/East";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  slideContentVariants,
  headingVariants,
  paragraphVariants,
  buttonVariants,
} from "../animations/AnimatedElement";

interface SlideData {
  image: string;
  heading: string;
  paragraph: string;
}

const slides: SlideData[] = [
  {
    image: image1,
    heading: "Slide 1 Heading",
    paragraph:
      "Occaecat est ipsum reprehenderit reprehenderit veniam anim laborum est esse duis occaecat reprehenderit pariatur.",
  },
  {
    image: image2,
    heading: "Slide 2 Heading",
    paragraph:
      "Occaecat est ipsum reprehenderit reprehenderit veniam anim laborum est esse duis occaecat reprehenderit pariatur.",
  },
  {
    image: image1,
    heading: "Slide 3 Heading",
    paragraph:
      "Occaecat est ipsum reprehenderit reprehenderit veniam anim laborum est esse duis occaecat reprehenderit pariatur.",
  },
  {
    image: image2,
    heading: "Slide 4 Heading",
    paragraph:
      "Occaecat est ipsum reprehenderit reprehenderit veniam anim laborum est esse duis occaecat reprehenderit pariatur.",
  },
];

const SwiperSlider: React.FC = () => {
  const swiperRef = useRef<SwiperType>();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const goToSlide = (index: number) => {
    if (swiperRef.current && swiperRef.current.slides) {
      const totalSlides = slides.length;
      let targetIndex = index;

      // Handle wrapping for previous and next
      if (index < 0) {
        targetIndex = totalSlides - 1;
      } else if (index >= totalSlides) {
        targetIndex = 0;
      }

      swiperRef.current.slideTo(targetIndex);
    }
  };

  return (
    <>
      <style>
        {`
          .swiper-container .swiper-pagination-bullet {
            background-color: rgba(255, 255, 255, 0.5);
            opacity: 1;
          }
          .swiper-container .swiper-pagination-bullet-active {
            background-color: white;
          }
        `}
      </style>
      <div className="relative swiper-container">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet custom-bullet",
          }}
          autoplay={{ delay: 5000 }}
          loop={true}
          effect="fade"
          onBeforeInit={(swiper: SwiperType) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute inset-0 bg-[#171a1f] opacity-50" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 sm:p-6 md:p-8 md:mt-24">
                  <AnimatePresence mode="wait">
                    {activeIndex === index && (
                      <motion.div
                        key={index}
                        variants={slideContentVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        className="text-center"
                      >
                        {/* Heading with animation */}
                        <motion.h2
                          variants={headingVariants}
                          transition={{ duration: 0.6 }}
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 uppercase"
                        >
                          {slide.heading}
                        </motion.h2>

                        {/* Paragraph with animation */}
                        <motion.p
                          variants={paragraphVariants}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[100%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[800px] mb-3 sm:mb-4 md:mb-6"
                        >
                          {slide.paragraph}
                        </motion.p>

                        {/* Button with animation */}
                        <motion.button
                          variants={buttonVariants}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="border-2 border-white text-white py-1 sm:py-2 px-3 sm:px-4 md:px-6 rounded-lg text-sm sm:text-base font-semibold hover:bg-[#ff0008] hover:text-white transition-colors hover:border-[#ff0008]"
                        >
                          Join Now
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Previous button */}
        <button
          onClick={() => goToSlide(activeIndex - 1)}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full items-center justify-center cursor-pointer text-[#171a1f] hidden sm:flex"
        >
          <KeyboardBackspaceIcon fontSize="small" />
        </button>
        {/* Next button */}
        <button
          onClick={() => goToSlide(activeIndex + 1)}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full items-center justify-center cursor-pointer text-[#171a1f] hidden sm:flex"
        >
          <EastIcon fontSize="small" />
        </button>
      </div>
    </>
  );
};

export default SwiperSlider;
