import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
  const sliderdata = [
    {
      id: 1,
      title: "Precision Engine Parts",
      subtitle:
        "Our company specializes in manufacturing high-performance engine components designed for accuracy, efficiency, and long-term durability. Each part is engineered with advanced technology and tested under rigorous conditions to ensure it meets the highest industrial standards. From small-scale prototypes to large-scale production, we deliver consistent quality and precision you can rely on.",
      image:
        "https://plus.unsplash.com/premium_photo-1677612031010-5424f4ea90ff?ixlib=rb-4.1.0&auto=format&fit=crop&w=1600&q=80",
      buttonText: "Explore Products",
      link: "/products",
    },
    {
      id: 3,
      title: "Industrial Innovation",
      subtitle:
        "We combine the latest in automation, robotics, and human craftsmanship to push the boundaries of manufacturing excellence. Our facilities integrate intelligent systems that optimize production while maintaining a strong focus on quality control and safety. From concept to completion, innovation drives everything we create, ensuring our clients stay ahead of their competition.",
      image:
        "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1600&q=80",
      buttonText: "View Process",
      link: "/innovation",
    },
    {
      id: 4,
      title: "Global Industry Partnerships",
      subtitle:
        "Trusted by world-leading companies in automotive, aerospace, and energy sectors, we’ve built a reputation for reliability and excellence. Our global partnerships allow us to collaborate on projects that shape the future of industrial technology. With an emphasis on timely delivery, certified quality, and transparent communication, we are the trusted partner industries depend on.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
      buttonText: "Our Clients",
      link: "/clients",
    },
    {
      id: 5,
      title: "Sustainable Manufacturing",
      subtitle:
        "We’re committed to a greener future by integrating sustainable materials, energy-efficient processes, and waste reduction practices across our entire production chain. Our facilities utilize renewable resources and modern recycling methods, ensuring every component we manufacture contributes to a cleaner, more sustainable planet. Quality production and environmental responsibility go hand in hand at our company.",
      image:
        "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=1600&q=80",
      buttonText: "Our Mission",
      link: "/sustainability",
    },
  ];

  return (
    <div className="relative w-full h-[530px] mt-10 ">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="h-full"
      >
        {sliderdata.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-full inter ">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover brightness-75 "
                loading="lazy"
              />
              <div className="absolute   flex flex-col items-start justify-center text-white px-8 md:px-16 bg-gradient-to-t  h-40 bottom-0 w-full  from-white  "></div>
              <div className="absolute inset-0 flex flex-col items-start justify-center text-gray-900 px-8 md:px-16 bg-gradient-to-b  from-white ">
                <div className="max-w-1/2  px-14 ml-10 mb-20 discription">
                  <h2 className="text-3xl md:text-5xl text-start font-bold  mb-6">
                    {item.title}
                  </h2>
                  <p className=" text-[14px] leading-6 mb-6 text-start font-[500] text-gray-800 ">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
