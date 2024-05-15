import { Fade } from "react-awesome-reveal";
import aboutUs from "/aboutUs.png";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import { useState } from "react";
const AboutUs = () => {
  const [show, setShow] = useState(true);

  const showBtn = () => {
    setShow(!show);
  };

  return (
    <Element className="leftRight  " name="aboutUsSection">
      <div className="hidden xl:block 2xl:block lg:block md:block ">
        <div className="flex justify-between ">
          <div className="aboutLeftParent">
            <h2 className="titleSubHeading pb-[20px]">We are Fowzi Media</h2>

            <p className="cardBaseText AboutCardTopBottom">
            Welcome to{" "}
              <span className="text-[#FF0101] font-glaCailBold">
              Fowzi Media,
              </span>{" "}
              where Creativity Meets Digital Excellence. We're more than just a service provider; we're dedicated to crafting experiences that make a lasting impact. With a foundation built on a passion for storytelling and a drive for innovation, our team is committed to elevating your digital presence. Specializing in branding, web design, videography, marketing, and communications, we excel in creating compelling narratives, captivating audiences, and driving success for your business.
            </p>
            {/* <div className="">
                            <h2 className="titleSubHeading pb-[20px]">Why Choose Us?</h2>

                            <p className="cardBaseText AboutCardTopBottom">
                                At <span className="text-[#FF0101] font-glaCailBold">Fowzi Media</span>, we blend artistry with strategy, delivering beautiful and effective digital solutions. Our hands-on, collaborative approach ensures a seamless journey from concept to creation, resulting in transformative success at every step.
                            </p>
                        </div> */}

            <Link to="/aboutUs">
              <button className="aboutUsLearnMore">Learn More</button>
            </Link>
          </div>
          <div>
            <Fade duration={1500}>
              <div className="aboutSideImg">
                <img
                  className="h-full w-full object-cover 2xl:rounded-[50px] xl:rounded-[25px] rounded-[10px]"
                  src={aboutUs}
                  alt=""
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/* ----------mobile screen --------------- */}
      <div className="xl:hidden 2xl:hidden lg:hidden md:hidden ">
        <h2 className="titleSubHeading pb-[20px]">We're Fowzi Media</h2>
        <div className="">
          <div className="">
            <Fade duration={1500}>
              <img
                className="w-full h-[250px] object-cover rounded-[10px] mb-[44px] "
                src={aboutUs}
                alt=""
              />
            </Fade>
          </div>
          <div className="w-full">
            <div className="text-white AboutCardTopBottom">
              <p className="text-[15px] leading-[25.5px]">
                Where Creativity Meets Digital Excellence. At{" "}
                <span className="text-[#FF0101] font-glaCailBold">
                  Fowzi Media
                </span>
                , we're not just about providing services; we're about crafting
                experiences that leave a lasting impact. Born from a passion for
                storytelling and a commitment to innovation, our team is
                dedicated to transforming your{" "}
              </p>
              <p className={` ${show ? "hidden" : "block"} text-[15px] leading-[25.5px]`}>
                digital presence. We specialize in creating compelling content
                through branding, web design, and videography that not only
                speaks to your audience but also captivates them.
              </p>
              <p className="pt-[10px] text-[#FF0101]" onClick={() => showBtn()}>
                {show ? "Show More" : "Show Less"}
              </p>
            </div>
          </div>
        </div>
        {/* <div className="fullWidthContent">
                    <h2 className="titleSubHeading pb-[20px] pt-[60px]">Why Choose Us?</h2>
                    <p className="cardBaseText AboutCardTopBottom">
                        At <span className="text-[#FF0101] font-glaCailBold">Fowzi Media</span>, we combine artistry with strategy, creating digital solutions that are not only beautiful but also effective. Our approach is hands-on, collaborative, and driven by results. We're here to support your journey from concept to creation, making sure that every step along the way is seamless, successful, and truly transformative.
                    </p>
                </div> */}
        <Link to="/aboutUs">
          <button className="aboutUsLearnMore ">Learn More</button>
        </Link>
      </div>
    </Element>
  );
};

export default AboutUs;
