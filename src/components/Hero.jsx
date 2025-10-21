import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  return (
    <div className="h-[400px] lg:h-[500px]">
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
        <SwiperSlide>
          <div
            className="relative h-full w-full bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
            style={{
              backgroundImage: "url('/images/SpiderPlant.png')",
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-bl from-black/70 via-black/50 to-transparent z-0" />

            {/* Content */}
            <div className="relative z-10 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-400   ">
                Welcome to Plantopia
              </h1>
              <p className="text-lg md:text-xl max-w-xl mx-auto">
                Breathe life into your space with our vibrant, living greens.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="relative h-full w-full bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
            style={{
              backgroundImage: "url('/images/PeaceLily.png')",
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-bl from-black/70 via-black/50 to-transparent z-0" />

            {/* Content */}
            <div className="relative z-10 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-400   ">
                Serenity in Every Leaf
              </h1>
              <p className="text-lg md:text-xl max-w-xl mx-auto">
                Bring peace and purity to your home with our beautiful Peace
                Lilies.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}

        <SwiperSlide>
          <div
            className="relative h-full w-full bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
            style={{
              backgroundImage: "url('/images/SnackPlant.jpg')",
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-bl from-black/70 via-black/50 to-transparent z-0" />

            {/* Content */}
            <div className="relative z-10 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-400   ">
                Bold. Strong. Evergreen.
              </h1>
              <p className="text-lg md:text-xl max-w-xl mx-auto">
                The Snake Plant — a stylish, low-maintenance statement for
                modern living.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div
            className="relative h-full w-full bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
            style={{
              backgroundImage: "url('/images/MonsteraDeliciosa.png')",
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-bl from-black/70 via-black/50 to-transparent z-0" />

            {/* Content */}
            <div className="relative z-10 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-400   ">
                Embrace the Jungle Vibes
              </h1>
              <p className="text-lg md:text-xl max-w-xl mx-auto">
                With dramatic leaves and bold beauty, Monstera brings nature
                indoors.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
