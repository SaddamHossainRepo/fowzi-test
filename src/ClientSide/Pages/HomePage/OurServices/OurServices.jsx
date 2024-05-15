

import { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { ImVideoCamera } from "react-icons/im";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


import "./services.css";
import { Element } from 'react-scroll';
import { Link } from "react-router-dom";

const OurServices = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [animateLeftToRight, setAnimateLeftToRight] = useState(false);

  const serviceCards = [

    {
      heading: "Branding",
      // description: "We create memorable brand identities that resonate.",
      imgSrc: "/brandingOurService.jpg",
      icon: <IoStatsChartSharp className="2xl:text-[27px] xl:text-[22px]" />,
      route: "/branding"
    },

    {
      heading: "Website",
      // description: "We specialize in building user-friendly websites that captivate.",
      imgSrc: "/rondo.jpg",
      icon: <FaCode className="2xl:text-[27px] xl:text-[22px]" />,
      route: "/webDesign"
    },


    {
      heading: "Videography",
      // description: "For over a decade, we've been dedicated to delivering captivating full-service videography, telling your story with style.",
      imgSrc: "/projectOne.jpeg",
      icon: <ImVideoCamera className="2xl:text-[27px] xl:text-[22px]" />,
      route: "/videoGraphy"
    },


    {
      heading: "Photography",
      // description: "For over a decade, we've remained steadfast in our commitment to delivering breathtaking visuals.",
      imgSrc: "/pFive.png",
      icon: <FaCamera className="2xl:text-[27px] xl:text-[22px]" />,
      route: "/photography"
    },


  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % serviceCards.length);
      setAnimateLeftToRight(true);
      setTimeout(() => {
        setAnimateLeftToRight(false);
      }, 2000);
    }, 4000);

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
    }, 5 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };

  }, []);

  return (
    <Element className="" name="OurServices"  >

      <div className="leftRight  rounded-[50px] "   >
        <div className="xl:flex 2xl:flex lg:flex md:flex justify-between ">

          {/* ========== For Mobile ============== */}

          <div className="overflow-hidden xl:rounded-[50px] 2xl:rounded-[25px] rounded-[10px]">
            <h2 className="titleSubHeading  md:block  xl:hidden 2xl:hidden">Our Services</h2>
            <img
              className={` servicesImg  object-cover  ${animateLeftToRight ? 'leftToRightAnimation rounded-[25px]' : 'rounded-[25px]'}`}
              src={serviceCards[activeCardIndex].imgSrc}
              alt="services Img"
            />
          </div>

          {/* ============ For large screen  ============ */}
          <div className="serviceInfoParent">
            <h2 className="hidden  servicesHeading xl:mb-[44px] 2xl:mb-[60px] mb-[20px] md:mb-[40px]  xl:block 2xl:block">Our Services</h2>

            <div className="grid  gap-[10px] mt-[20px] 
        2xl:grid 2xl:grid-cols-1 2xl:gap-0 2xl:mt-0
        xl:grid xl:grid-cols-1 xl:gap-0 xl:mt-0
        lg:grid lg:grid-cols-1 lg:gap-[20px] lg:mt-[70px]
        md:grid md:grid-cols-1 md:gap-[15px] md:mt-[100px]
        

        ">
              {serviceCards.map((card, index) => (
                <Link key={index} to={card.route}>
                  <div key={index} className={`serviceCardParent cursor-pointer  xl:mb-[15px] 2xl:mb-[30px] ${activeCardIndex === index ? 'bg-[#d7d7d7] active' : ''}`}>
                    <div className="flex  justify-between items-center">
                      <div className={`servicesSubParent flex items-center  ${activeCardIndex === index ? 'text-[#252525]' : 'text-white'}`}>
                        <span >{card.icon}</span>
                        <span className="2xl:pl-[20.64px]  xl:pl-[16px] pl-[8px] cardheadingText">
                          {card.heading}
                        </span>
                      </div>
                      <div className="xl:pt-[20px] xl:pr-[20px] pt-[10px] pr-[20px]">
                        <Link to={card.route}>
                          <FaArrowRightLong className={`cursor-pointer ${activeCardIndex === index ? 'text-[#252525]' : 'text-transparent'}`}></FaArrowRightLong>
                        </Link>
                      </div>
                    </div>
                    {/* <p className={`servicesPara ${activeCardIndex === index ? 'text-[#252525]' : 'text-white'}`}>{card.description}</p> */}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Element >



  );
};

export default OurServices;


