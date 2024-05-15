import { Link } from "react-router-dom";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import TrustedBy from "../HomePage/TrustedBy/TrustedBy";
import Footer from "../Shared/Footer/Footer";
import OurTeam from "./OurTeam";
import headerLogo from "/headerLogo.png";
// import social icons
import fb from "/fb.png";
import instra from "/instra.png";
import youtube from "/youtube.png";
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";

import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import CallToAction from "../HomePage/CallToAction/CallToAction";

const AboutUsPage = () => {
  const [showContact, setShowContact] = useState(false);

  // For contact button functions

  const adjustTextareaHeightContact = (element) => {
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  };

  const handleDescriptionChangeContact = (e) => {
    adjustTextareaHeightContact(e.target);
  };

  const contactBtn = () => {
    setShowContact(true);
  };
  const closeContactForm = () => {
    setShowContact(false);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const revealPrice = () => {
    setPopUp(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div
        className=" 
        2xl:bg-[url('/aboutMainHero.jpg')] 
        xl:bg-[url('/aboutMainHero.jpg')] 
        lg:bg-[url('/aboutMainHero.jpg')] 
        md:bg-[url('/aboutMainHero.jpg')] 
        bg-[url('/aboutMainHero.jpg')] 
        bg-no-repeat bg-cover w-[100%] bg-black 
   2xl:h-[100dvh] 
   xl:h-[100dvh] 
   lg:h-[100dvh] 
   md:h-[100dvh] 
   h-[70dvh] "
      >
        {/*----------------- header menu ------------------ */}
        <div className="relative">
          <nav
            className=" 
       relative
       2xl:pl-[150px] 2xl:pr-[150px] 2xl:pt-[50px] 
       xl:pt-[50px] xl:pl-[60px] xl:pr-[60px] 
       lg:pt-[40px] lg:pl-[50px] lg:pr-[50px]
       md:pt-[40px] md:pl-[50px] md:pr-[50px]
       pt-[30px] pl-[20px] pr-[20px]

       flex justify-between items-center"
          >
            {/* ----------Desktop Menu ---------- */}
            <div className="headerLogo">
              <Link to="/">
                <img
                  className="w-full h-full cursor-pointer"
                  src={headerLogo}
                  alt="logo"
                />
              </Link>
            </div>

            {/*-------------- Desktop Header Menu --------------- */}
            {/* <div className='hidden md:block lg:block xl:block 2xl:block'>
                            <ul className="headMenuLeftRight  z-auto  ">
                                <Link to="/"> <li className="desktopMenu   ">HOME</li> </Link>
                                <Link to='/' > <li className="desktopMenu">SERVICES</li> </Link>
                                <Link to="/"  > <li className=" desktopMenu">ABOUT</li> </Link>
                                <Link to="/" > <li className="desktopMenu ">PORTFOLIO</li> </Link>
                                <Link to="/"> <li className=" desktopMenu">BLOG</li> </Link>
                                <Link > <li className="cursor-pointer" onClick={contactBtn}> CONTACT</li> </Link>
                            </ul>
                        </div> */}
            {/* -----------------------Mobile Header Menu ------------------  */}

            {/* <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
                            <button onClick={toggleMenu}><SlMenu className='text-[25px] text-white'></SlMenu></button>
                            {menuOpen && (
                                <div className=''>
                                    <div className={`mobile-menu ${menuOpen ? ' opacity-80' : ''}`}>

                                        <div className='flex justify-between items-center px-[20px] pt-[30px] border-b  border-gray-600 pb-[30px]'>
                                            <div>
                                                <img className='headerLogoMobile' src={headerLogo} alt="" />
                                            </div>
                                            <div>
                                                <RxCross1 onClick={closeMenu} className='text-[25px] hover:text-[#FF0101]'></RxCross1>
                                            </div>
                                        </div>
                                        <ul className='menuParent'>
                                            <Fade cascade duration={300}>
                                                <Link to="/">
                                                    <li>HOME</li>
                                                </Link>
                                                <Link to='/' smooth={true} duration={500}>
                                                    <li >SERVICES</li>
                                                </Link>
                                                <Link to="/" smooth={true} duration={600} >
                                                    <li >ABOUT</li>
                                                </Link>
                                                <Link to="/" smooth={true} duration={700}>
                                                    <li >PORTFOLIO</li>
                                                </Link>
                                                <Link to="/" smooth={true} duration={800}>
                                                    <li >BLOG</li>
                                                </Link>
                                                <Link to='/' smooth={true} duration={1000}>
                                                    <li className="cursor-pointer"> CONTACT</li>
                                                </Link>
                                            </Fade>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div> */}

            {/* --------------DeskTop Socail Icons -------------- */}
            <div className="md:block lg:block  xl:block 2xl:block hidden">
              <div className="flex items-center">
                {/* ----------Facebook ------ */}
                <div
                  className="                       
                   2xl:h-[27px]  2xl:w-[14px] 2xl:mr-[18.91px]
                   xl:mr-[17.91px] xl:w-[13px] xl:h-[25px]
                   lg:mr-[15px] lg:w-[12px] lg:h-[25px]
                   md:mr-[10px] md:w-[10px] md:h-[20px]
                   cursor-pointer"
                >
                  <img className="w-full h-full " src={fb} alt="" />
                </div>

                {/* -------instragram ---------- */}
                <div
                  className="
                   2xl:h-[25.11px] 2xl:w-[25.6px] 2xl:mr-[18.49px]                       
                   xl:w-[24.24px] xl:h-[23.78px] xl:mr-[17.51px]  
                   lg:w-[25px] lg:h-[22px] lg:mr-[15px]
                   md:w-[20px] md:h-[19px] md:mr-[10px]

                   cursor-pointer"
                >
                  <img className=" h-full w-full " src={instra} alt="" />
                </div>
                {/* -------Youtube ---------- */}
                <div
                  className="
                   2xl:h-[24px] 2xl:w-[36px] 
                   xl:h-[22.73px] xl:w-[34.09px]
                   lg:h-[22px] lg:w-[30px]
                   md:h-[20px] md:w-[20px]

                   cursor-pointer"
                >
                  <img
                    className=" w-full h-full object-cover"
                    src={youtube}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div
        className="bg-[#111111] 2xl:mt-[-100px]  2xl:rounded-t-[50px]
            xl:mt-[-50px] xl:rounded-t-[50px] 
            lg:mt-[-50px] lg:rounded-t-[50px] 
            md:mt-[-50px] md:rounded-t-[50px] 
           
            
            "
      >
        <div>
          <div
            className="2xl:px-[150px] 2xl:pt-[50px] 
                    xl:px-[80px] xl:pt-[40px] 
                    lg:pt-[40px] lg:px-[70px]
                    md:pt-[40px] md:px-[50px]
                    pt-[40px] px-[20px]
                     text-white"
          >
            <p className="pageTitle">
              <Link to="/">Home</Link> . About us
            </p>
            <div
              className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2
                         grid-cols-1 justify-between 
                        
                        
                        2xl:gap-[50px] xl:gap-[40px] lg:gap-[30px] md:gap-[25px] "
            >
              <div className="titleHiddenFromLarge">
                <h2 className="titleSubHeading 2xl:pb-[25px] xl:pb-[20px] lg:pb-[20px] md:pb-[15px] pb-[25px]">
                  About Us
                </h2>
              </div>
              <div className="order-2 md:order-1 xl:order-1 lg:order-1 2xl:order-1">
                <div className="       ">
                  <div className="titleHiddenMobile">
                    <h2 className="titleSubHeading 2xl:pb-[25px] xl:pb-[20px] lg:pb-[20px] md:pb-[15px] pb-[25px]">
                      About Us
                    </h2>
                  </div>
                  <p
                    className="2xl:pb-[50px]  2xl:text-[30px] 2xl:leading-[51px] 2xl:pt-0
                                    xl:text-[25px] xl:leading-[38.75px]  
                                    lg:text-[25px] lg:leading-[30px]  
                                    md:text-[20px] md:leading-[25px]  
                                    
                                font-glacialBase 
                                xl:pb-[40px] xl:pt-0
                                lg:pb-[40px] lg:pt-0
                                md:pb-[30px] md:pt-0
                                text-[15px] leading-[25.5px] pb-[20px] pt-[20px]
                                
                                "
                  >
                    <span className="font-glaCailBold text-[#FF0000]">
                      Fowzi Media,
                    </span>{" "}
                    A leading branding and marketing agency specializing in
                    video production, photography, and strategic communications.
                    Our unique perspective as a minority-immigrant-owned firm
                    drives compelling digital storytelling that engages
                    audiences and catalyzes social change. We excel at bridging
                    communication gaps between public, nonprofit, and private
                    sector leaders and immigrant and minority communities.
                    Grounded in trust-building, our approach fosters meaningful
                    relationships essential for successful marketing and
                    branding campaigns. With a dedicated team of five experts,
                    we collaborate with diverse independent contractors to
                    deliver innovative marketing solutions. From powerful video
                    commercials to comprehensive strategies, Fowzi Media is your
                    partner for success.
                  </p>
                  {/* <h2 className="aboutParaHeading">Our Philosophy :</h2>
                                    <p className="aboutUsText
                                    ">We believe in the power of unique stories and digital creativity. Our mission is to empower businesses and non-profits to share their vision, breaking barriers and making meaningful connections.</p> */}

                  {/* <div className="hidden lg:block xl:block 2xl:block">

                                        <h2 className="aboutParaHeading ">Why Choose Us ?</h2>
                                        <p className="aboutUsText">
                                            Combining artistry with strategy, we create digital solutions that are beautiful and effective. Our hands-on, collaborative approach is driven by results, supporting your journey from concept to creation, ensuring every step is seamless and transformative.
                                        </p>
                                    </div> */}

                  {/* ----------- hidden items for mobile , md and lg devicess */}
                  {/* <div className="aboutHiddenItems">


                                        <h2 className="aboutParaHeading" >Join Us :</h2>
                                        <p className="aboutUsText 2xl:pb-0 xl:pb-0">
                                            Embark on a digital adventure that takes your story beyond the ordinary. With Fowzi Media, your story is just the beginning. Discover the future of digital media with us.
                                        </p>

                                    </div> */}
                </div>
              </div>

              <div className="order-1 md:order-2 xl:order-2 lg:order-2 2xl:order-2">
                <div className="2xl:mt-[15px] xl:mt-[15px]  ">
                  <div className="aboutImgparent">
                    <img
                      className="w-full h-full  object-cover rounded-[25px]"
                      src="/aboutSideImg.png"
                      alt=""
                    />
                  </div>
                  <div
                    className="bg-white 2xl:rounded-[40px] 2xl:mt-[50px] 
                                xl:mt-[40px] xl:rounded-[25px]
                                 lg:mt-[35px] lg:rounded-[20px]  
                                 md:mt-[25px] md:rounded-[20px]
                                 mt-[30px] rounded-[15px] "
                  >
                    <div className="flex ">
                      <div className="aboutParent">
                        <div className=" aboutChildParent ">
                          <div className="childContent ">
                            <h3 className="childHeading">10.5+</h3>
                            <p className="childText">Years Experience</p>
                          </div>
                        </div>
                        <div className=" aboutChildParent ">
                          <div className="childContent">
                            <h3 className="childHeading">511+</h3>
                            <p className="childText">Project Challenge</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex ">
                      <div
                        className="aboutParent 
                                        2xl:pt-0 2xl:pb-[30px]
                                        xl:pt-0 xl:pb-[20px] 
                                        lg:pt-0 lg:pb-[20px] 
                                        pt-0 pb-[15px] 
                                        
                                        "
                      >
                        <div className=" aboutChildParent ">
                          <div className="childContent ">
                            <h3 className="childHeading">5 Star</h3>
                            <p className="childText">Google Review</p>
                          </div>
                        </div>
                        <div className=" aboutChildParent ">
                          <div className="childContent">
                            <h3 className="childHeading">14,153+</h3>
                            <p className="childText">Cups of Coffee</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* ----------- hidden items for large devices xl, 2xl devicess */}
              <div className="aboutShowItemsMobile">
                {/* <div className="aboutCommonItems">
                                    <h2 className="aboutParaHeading">Why Choose Us ?</h2>
                                    <p className="aboutUsText">
                                        Combining artistry with strategy, we create digital solutions that are beautiful and effective. Our hands-on, collaborative approach is driven by results, supporting your journey from concept to creation, ensuring every step is seamless and transformative.
                                    </p>
                                </div>

                                <h2 className="aboutParaHeading" >Join Us :</h2>
                                <p className="aboutUsText 2xl:pb-0 xl:pb-0">
                                    Embark on a digital adventure that takes your story beyond the ordinary. With Fowzi Media, your story is just the beginning. Discover the future of digital media with us.
                                </p> */}
              </div>
            </div>
          </div>
        </div>
        {/*------------ our team Section--------- */}
        <OurTeam></OurTeam>
        <div className="">
          <TrustedBy></TrustedBy>
          <div className="2xl:pb-[200px] xl:pb-[180px] lg:pb-[150px] md:pb-[100px] pb-[60px]">
            {/* <div className="2xl:pb-[20px] xl:pb-[10px] lg:pb-[10px] md:pb-[10px] pb-[10px]"> */}
            <Testimonial></Testimonial>
          </div>

          {/* --- cantact PopUp section -------- */}
          {showContact && (
            <>
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen">
                  <div
                    className="fixed inset-0 bg-black bg-opacity-35 transition-opacity"
                    aria-hidden="true"
                  ></div>
                  <div className="relative bg-[#111111] xl:rounded-3xl 2xl:rounded-3xl lg:rounded-2xl md:rounded-2xl rounded-xl w-[90%] md:w-[70%] lg:w-[70%] xl:w-[70%] 2xl:w-[50%]  mx-auto overflow-hidden shadow-md transform transition-all ">
                    <div className="px-6 py-4">
                      <div className="flex justify-between items-start">
                        <div className="text-lg text-gray-300 font-semibold mb-4 ">
                          <h2 className="text-lg text-gray-300 font-semibold">
                            Contact Now
                          </h2>
                          <p className="text-[12px] text-gray-300"></p>
                        </div>
                        <button
                          className="text-md text-gray-300 py-2 rounded-md focus:outline-none font-semibold hover:text-red-600"
                          onClick={closeContactForm}
                        >
                          <RxCross1 />
                        </button>
                      </div>

                      <div className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-1 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 w-[90%]">
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                        />
                        <input
                          type="number"
                          placeholder="Enter Your Phone Number"
                          className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                        />
                      </div>
                      <div className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-1 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 w-[90%]">
                        <input
                          type="text"
                          placeholder="Enter Your Company Name"
                          className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                        />
                        <input
                          type="email"
                          placeholder="Enter Email Address "
                          className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-1 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 w-[90%]">
                        <textarea
                          onChange={handleDescriptionChangeContact}
                          className="text-[14px] rounded-sm bg-transparent outline-none border border-gray-500 py-2 px-2 text-gray-300 resize-none overflow-hidden"
                          placeholder="Message"
                          rows={2}
                          style={{ minHeight: "3rem", maxHeight: "10rem" }}
                        ></textarea>
                      </div>
                    </div>

                    <div className="px-2 py-4 bg-[#111111] flex md:justify-end lg:justify-end xl:justify-end 2xl:justify-end justify-center">
                      <div>
                        <button className="text-md py-2 px-4 rounded-md focus:outline-none text-white font-semibold">
                          Submit
                        </button>
                        <button
                          className="text-md py-2 px-4 rounded-md focus:outline-none text-white font-semibold"
                          onClick={closeContactForm}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          <CallToAction></CallToAction>

          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
