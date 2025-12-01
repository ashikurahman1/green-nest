import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';

const Hero = () => {
  const sliders = [
    {
      id: 1,
      title: 'Welcome to Plantopia',
      description:
        'Breathe life into your space with our vibrant, living greens.',
      image: '/images/SpiderPlant.png',
    },
    {
      id: 2,
      title: 'Serenity in Every Leaf',
      description:
        'Bring peace and purity to your home with our beautiful Peace Lilies.',
      image: '/images/PeaceLily.png',
    },
    {
      id: 3,
      title: 'Bold. Strong. Evergreen.',
      description:
        'The Snake Plant — a stylish, low-maintenance statement for modern living.',
      image: '/images/SnackPlant.jpg',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 via-white to-white pt-25">
      <div
        className="h-[350px] md:h-[400px] lg:h-[550px]  mb-7 lg:max-w-10/12 mx-auto rounded-lg overflow-hidden shadow-lg "
        data-aos="fade-up-right"
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-full"
        >
          {/* Slide 1 */}
          {sliders.map(slider => (
            <SwiperSlide>
              <div
                className="relative h-full w-full bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
                style={{
                  backgroundImage: ` url(${slider.image})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-green-600  to-green-800 z-0 opacity-90" />

                <div className="relative z-10 text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-300   ">
                    {slider.title}
                  </h1>
                  <p className="md:text-xl max-w-xl mx-auto">
                    {slider.description}
                  </p>
                  <Link
                    to="/plants"
                    className="mt-10 btn bg-white text-green-600 hover:bg-green-600 hover:text-white border-0 transition duration-150"
                  >
                    See all plants
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
