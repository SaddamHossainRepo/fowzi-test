import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "../../Shared/Footer/Footer";
import headerLogo from "/headerLogo.png";
// import social icons
import fb from "/fb.png";
import instra from "/instra.png";
import youtube from "/youtube.png";
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";

import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const PortFolioVideography = () => {
  const [showContact, setShowContact] = useState(false);

  const contactBtn = () => {
    setShowContact(true);
  };
  const closeContactForm = () => {
    setShowContact(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // description height funtionality
  const adjustTextareaHeight = (element) => {
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  };

  const handleDescriptionChange = (e) => {
    adjustTextareaHeight(e.target);
  };

  // Email functionality
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const inputs = Array.from(e.target.elements);

    const isEmpty = inputs.some(
      (input) => input.type !== "submit" && input.value.trim() === ""
    );

    if (isEmpty) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill all the fields",
      });

      const firstEmptyInput = inputs.find(
        (input) => input.type !== "submit" && input.value.trim() === ""
      );
      if (firstEmptyInput) {
        firstEmptyInput.focus();
      }

      return;
    }

    emailjs
      .sendForm("service_6h9xaia", "template_4oix8d5", form.current, {
        publicKey: "MaxR-SmKU3X9z0oRj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          Swal.fire({
            icon: "success",
            title: "Email Sent",
            text: "Email sent successfully",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div
        className=" 
        2xl:bg-[url('/vport.png')] 
        xl:bg-[url('/vport.png')]
        lg:bg-[url('/vport.png')]
        md:bg-[url('/vport.png')]
        bg-[url('/vportm.png')]
   bg-no-repeat bg-cover w-[100%] bg-black 
   2xl:h-[100dvh] 
   xl:h-[100dvh] 
   lg:h-[100dvh] 
   md:h-[100dvh] 
   h-[60dvh] "
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
                                <Link to="/"> <li className="desktopMenu">SERVICES</li> </Link>
                                <Link to="/" > <li className=" desktopMenu">ABOUT</li> </Link>
                                <Link to="/"> <li className="desktopMenu ">PORTFOLIO</li> </Link>
                                <Link to="/"> <li className=" desktopMenu">BLOG</li> </Link>
                                <Link> <li className="cursor-pointer" onClick={contactBtn}> CONTACT</li> </Link>
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
                                                <Link to="/">
                                                    <li >SERVICES</li>
                                                </Link>
                                                <Link to="/" >
                                                    <li >ABOUT</li>
                                                </Link>
                                                <Link to="/">
                                                    <li >PORTFOLIO</li>
                                                </Link>
                                                <Link to="/">
                                                    <li >BLOG</li>
                                                </Link>
                                                <Link>
                                                    <li className="cursor-pointer" onClick={contactBtn}> CONTACT</li>
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
        className="bg-[#111111] 2xl:mt-[-100px] 2xl:rounded-t-[50px] 
            xl:mt-[-50px] xl:rounded-t-[50px]
            lg:mt-[-50px] lg:rounded-t-[50px]
            
            "
      >
        <div
          className=" 2xl:px-[150px] 2xl:pt-[50px] 2xl:pb-[200px] 
                xl:px-[80px] xl:pt-[40px] xl:pb-[200px] 
                lg:px-[70px] lg:pt-[40px] lg:pb-[150px]
                md:px-[50px] md:pt-[40px] md:pb-[100px]
                px-[20px] pt-[40px] pb-0
                 text-white"
        >
          <p className="pageTitle">
            <Link to="/">Home</Link> . <Link to="/">Portfolio</Link> .
            Videography
          </p>

          <h2 className="titleSubHeading ">Videography</h2>

          <p
            className="
                            2xl:text-[30px] 2xl:leading-[51px]  2xl:pb-[50px] 
                            xl:text-[25px] xl:leading-[38.75px] xl:pb-[40px]   
                            lg:text-[25px] lg:leading-[30px] lg:pb-[30px]
                            md:text-[20px] md:leading-[25px] md:pb-[20px]
                            text-[15px] leading-[25.5px] pb-[20px] 
                            text-white font-glacialBase  "
          >
            Welcome to Our Videography Portfolio! Experience storytelling at
            its finest. Dive into our collection of captivating films,
            commercials, documentaries, and event coverage. Each video is
            crafted to leave a lasting impression.
          </p>
          <div className="md:flex lg:flex xl:flex 2xl:flex justify-between w-full ">
            <div className="2xl:w-[776px] xl:w-[578px] lg:w-[48%] md:w-[48%]">

              {/* ---------------left one card --------------- */}
              <Link to="/PortFolioVideoGraphyFirst">
                <div
                  className=" 2xl:mb-[68px] 2xl:w-[776px] 2xl:h-[450px]  
                            xl:w-full xl:h-[300px] xl:mb-[50px] 
                            lg:w-full lg:h-[270px] lg:mb-[40px] md:mb-[25px] 
                            md:w-full md:h-[250px]
                            mb-[20px]

                            relative group"
                >
                  <img
                    src="/videoL1.png"
                    className="w-full h-full object-cover xl:rounded-[25px] lg:rounded-[25px] md:rounded-[25px] rounded-[25px] "
                    alt=""
                  />

                  <div className="w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div
                      className=" 
                                    2xl:w-[776px] 2xl:py-[20px]  2xl:rounded-b-[25px] 2xl:px-[40px] 
                                    xl:w-[578px] xl:rounded-b-[25px] xl:px-[30px] xl:py-[10px]
                                    lg:rounded-b-[25px] lg:px-[20px] lg:py-[10px]
                                    md:rounded-b-[25px] md:px-[20px] md:py-[10px]   rounded-b-[25px] px-[20px] py-[10px]
                                    
                                    bg-white bg-opacity-30 flex justify-between 
                                    "
                    >
                      <div>
                        <Link to="/PortFolioVideoGraphyFirst">
                          <p className="2xl:text-[25px] 2xl:leading-[30px] xl:text-[20px] xl:leading-[24px] cursor-pointer">
                            View Project
                          </p>
                        </Link>
                      </div>
                      <div className="flex ">
                        <Link to="/PortFolioVideoGraphyFirst">
                          <p>
                            <FaArrowRightLong className="text-[28px]  cursor-pointer"></FaArrowRightLong>
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* ---------------left two card --------------- */}
              <Link to="/PortFolioVideographySBD">
                <div
                  className=" 2xl:mb-[68px] 2xl:w-[776px] 2xl:h-[450px] 
                            xl:w-full xl:h-[300px] xl:mb-[50px] 
                            lg:w-full lg:h-[270px] lg:mb-[40px] md:mb-[25px] mb-[20px]
                            md:w-full md:h-[250px]

                            relative group"
                >
                  <img
                    src="/videoL2.png"
                    className="w-full h-full object-cover xl:rounded-[25px] lg:rounded-[25px] md:rounded-[25px] rounded-[25px]"
                    alt=""
                  />

                  <div className="w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div
                      className=" 
                                    2xl:w-[776px] 2xl:py-[20px]  2xl:rounded-b-[25px] 2xl:px-[40px] 
                                    xl:w-[578px] xl:rounded-b-[25px] xl:px-[30px] xl:py-[10px]
                                    lg:rounded-b-[25px] lg:px-[20px] lg:py-[10px]
                                    md:rounded-b-[25px] md:px-[20px] md:py-[10px]   rounded-b-[25px] px-[20px] py-[10px]
                                    
                                    bg-white bg-opacity-30 flex justify-between 
                                    "
                    >
                      <div>
                        <Link to="/PortFolioVideographySBD">
                          <p className="2xl:text-[25px] 2xl:leading-[30px] xl:text-[20px] xl:leading-[24px] cursor-pointer">
                            View Project
                          </p>
                        </Link>
                      </div>
                      <div className="flex ">
                        <Link to="/PortFolioVideographySBD">
                          <p>
                            <FaArrowRightLong className="text-[28px]  cursor-pointer"></FaArrowRightLong>
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* ---------------left three card --------------- */}
              {/* <Link to="/PortFolioVideoTeo"> */}
              <Link to="/PortFolioVideoShamilMirza">
                <div
                  className=" 2xl:mb-[68px] 2xl:w-[776px] 2xl:h-[450px]  
                            xl:w-full xl:h-[300px] mb-[20px] md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0
                            lg:w-full lg:h-[270px]
                            md:w-full md:h-[250px]

                            relative group"
                >
                  <img
                    src="/portVidThree.png"
                    // src="/videoL3.png"
                    className="w-full h-full object-cover xl:rounded-[25px] lg:rounded-[25px] md:rounded-[25px] rounded-[25px]"
                    alt=""
                  />

                  <div className="w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div
                      className=" 
                                    2xl:w-[776px] 2xl:py-[20px]  2xl:rounded-b-[25px] 2xl:px-[40px] 
                                    xl:w-[578px] xl:rounded-b-[25px] xl:px-[30px] xl:py-[10px]
                                    lg:rounded-b-[25px] lg:px-[20px] lg:py-[10px]
                                    md:rounded-b-[25px] md:px-[20px] md:py-[10px]   rounded-b-[25px] px-[20px] py-[10px]
                                    
                                    bg-white bg-opacity-30 flex justify-between 
                                    "
                    >
                      <div>
                        {/* <Link to="/PortFolioVideoTeo"> */}
                        <Link to="/PortFolioVideoShamilMirza">
                          <p className="2xl:text-[25px] 2xl:leading-[30px] xl:text-[20px] xl:leading-[24px] cursor-pointer">
                            View Project
                          </p>
                        </Link>
                      </div>
                      <div className="flex ">
                        {/* <Link to="/PortFolioVideoTeo"> */}
                        <Link to="/PortFolioVideoShamilMirza">
                          <p>
                            <FaArrowRightLong className="text-[28px]  cursor-pointer"></FaArrowRightLong>
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* ----------------------right Side content --------------------------------- */}

            <div className="2xl:ml-[68px] lg:w-[48%] md:w-[48%]">
              <Link to="/PortFolioVideoaJnnah">
                <div
                  className=" 2xl:mb-[68px] 2xl:w-[776px] 2xl:h-[450px]  
                            xl:w-[578px] xl:h-[300px] xl:mb-[50px] 
                            lg:w-full lg:h-[270px] lg:mb-[40px] md:mb-[25px] mb-[20px]
                            md:w-full md:h-[250px]

                            relative group"
                >
                  <img
                    src="/videoR1.png"
                    className="w-full h-full object-cover xl:rounded-[25px] lg:rounded-[25px] md:rounded-[25px] rounded-[25px]"
                    alt=""
                  />

                  <div className="w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div
                      className=" 
                                    2xl:w-[776px] 2xl:py-[20px]  2xl:rounded-b-[25px] 2xl:px-[40px] 
                                    xl:w-[578px] xl:rounded-b-[25px] xl:px-[30px] xl:py-[10px]
                                    lg:rounded-b-[25px] lg:px-[20px] lg:py-[10px]
                                    md:rounded-b-[25px] md:px-[20px] md:py-[10px]   rounded-b-[25px] px-[20px] py-[10px]
                                    
                                    bg-white bg-opacity-30 flex justify-between 
                                    "
                    >
                      <div>
                        <Link to="/PortFolioVideoaJnnah">
                          <p className="2xl:text-[25px] 2xl:leading-[30px] xl:text-[20px] xl:leading-[24px] cursor-pointer">
                            View Project
                          </p>
                        </Link>
                      </div>
                      <div className="flex ">
                        <Link to="/PortFolioVideoaJnnah">
                          <p>
                            <FaArrowRightLong className="text-[28px]  cursor-pointer"></FaArrowRightLong>
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* ----------------Right card two -------------------- */}

              
              <Link to="/PortFolioVideominneapolis">
                <div
                  className=" 2xl:mb-[68px] 2xl:w-[776px] 2xl:h-[450px] 
                            xl:w-[578px] xl:h-[300px] xl:mb-[50px] 
                            
                            lg:w-full lg:h-[270px] lg:mb-[40px] md:mb-[25px] mb-[20px]
                            md:w-full md:h-[250px]

                            relative group"
                >
                  <img
                    src="/videoR2.png"
                    className="w-full h-full object-cover 2xl:rounded-[25px] xl:rounded-[25px] lg:rounded-[25px] md:rounded-[25px] rounded-[25px]"
                    alt=""
                  />

                  <div className="w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div
                      className=" 
                                    2xl:w-[776px] 2xl:py-[20px]  2xl:rounded-b-[25px] 2xl:px-[40px] 
                                    xl:w-[578px] xl:rounded-b-[25px] xl:px-[30px] xl:py-[10px]
                                    lg:rounded-b-[25px] lg:px-[20px] lg:py-[10px]
                                    md:rounded-b-[25px] md:px-[20px] md:py-[10px]   rounded-b-[25px] px-[20px] py-[10px]
                                    
                                    bg-white bg-opacity-30 flex justify-between 
                                    "
                    >
                      <div>
                        <Link to="/PortFolioVideominneapolis">
                          <p className="2xl:text-[25px] 2xl:leading-[30px] xl:text-[20px] xl:leading-[24px] cursor-pointer">
                            View Project
                          </p>
                        </Link>
                      </div>
                      <div className="flex ">
                        <Link to="/PortFolioVideominneapolis">
                          <p>
                            <FaArrowRightLong className="text-[28px]  cursor-pointer"></FaArrowRightLong>
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              

              {/* ---------------right Card three */}
              <Link to="/PortFolioVideoIslamCollective">
                <div
                  className=" 2xl:mb-[68px] 2xl:w-[776px] 2xl:h-[450px]  
                            xl:w-[578px] xl:h-[300px] 
                            lg:w-full lg:h-[270px]
                            md:w-full md:h-[250px]

                            relative group"
                >
                  <img
                    // src="/videoR3.png"
                    src="/portVidRightThree.png"
                    className="w-full h-full object-cover 2xl:rounded-[35px] xl:rounded-[25px] lg:rounded-[25px] md:rounded-[25px] rounded-[25px]"
                    alt=""
                  />

                  <div className="w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div
                      className=" 
                                    2xl:w-[776px] 2xl:py-[20px]  2xl:rounded-b-[25px] 2xl:px-[40px] 
                                    xl:w-[578px] xl:rounded-b-[25px] xl:px-[30px] xl:py-[10px]
                                    lg:rounded-b-[25px] lg:px-[20px] lg:py-[10px]
                                    md:rounded-b-[25px] md:px-[20px] md:py-[10px]   rounded-b-[25px] px-[20px] py-[10px]
                                    
                                    bg-white bg-opacity-30 flex justify-between 
                                    "
                    >
                      <div>
                        <Link to="/PortFolioVideoIslamCollective">
                          <p className="2xl:text-[25px] 2xl:leading-[30px] xl:text-[20px] xl:leading-[24px] cursor-pointer">
                            View Project
                          </p>
                        </Link>
                      </div>
                      <div className="flex ">
                        <Link to="/PortFolioVideoIslamCollective">
                          <p>
                            <FaArrowRightLong className="text-[28px]  cursor-pointer"></FaArrowRightLong>
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* --- cantact PopUp section -------- */}

        {/* call to action */}
        <div>
          <div
            className="
            leftRight 
            2xl:pb-[200px] 2xl:pt-0
            xl:pb-[200px] xl:pt-0
            lg:pb-[150px] lg:pt-0
            md:pb-[100px] md:pt-0 
            pt-[100px] pb-[100px] 

        "
          >
            <div
              className=" 
            2xl:rounded-[30px] 2xl:h-[400px] 
            xl:rounded-[30px] xl:h-[300px] 
            lg:rounded-[25px] lg:h-[200px]
            md:rounded-[20px] md:h-[180px]
            rounded-[15px] 
            
            bg-gradient-to-r from-white to-transparent   p-[1px]
            "
            >
              <div
                className="
               2xl:rounded-[30px]
               xl:rounded-[30px]
               lg:rounded-[25px]
               md:rounded-[20px]
               rounded-[15px]
                text-white bg-black relative h-full w-full  "
              >
                <div className=" h-full w-full">
                  <div className="text-center md:text-left lg:text-left xl:text-left 2xl:text-left  px-[15px] md:px-0 lg:px-0 xl:px-0 2xl:px-0  md:flex lg:flex xl:flex 2xl:flex justify-center items-center h-full w-full">
                    <div
                      className="
                            2xl:max-w-[520px] 2xl:mr-[180px]
                            xl:max-w-[550px] xl:mr-[120px] 
                            lg:max-w-[400px] lg:mr-[100px]
                            md:max-w-[400px] md:mr-[80px]
                        "
                    >
                      <h2 className="ctaHeading">
                        Got a brilliant idea you're itching to discuss?
                      </h2>
                      {/* <p className="ctaPara">Don't settle for mediocrity. Partner with Fowzi Media and take your brand to new heights. Schedule a consultation today and discover how our branding services can transform your business.</p> */}
                    </div>
                    <div className="ctaBtnParent">
                      <button className="ctaBtn" onClick={contactBtn}>
                        Let's discuss
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- reveal cta form section -------- */}
          {showContact && (
            <>
              <form ref={form} onSubmit={sendEmail}>
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
                              Get a quote
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
                            name="user_name"
                            className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                          />
                          <input
                            type="number"
                            placeholder="Enter Your Phone Number"
                            name="user_phone"
                            className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                          />
                        </div>
                        <div className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-1 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 w-[90%]">
                          <input
                            type="text"
                            placeholder="Enter Your Company Name"
                            name="user_company"
                            className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                          />
                          <input
                            type="email"
                            placeholder="Enter Your Email Address "
                            name="user_email"
                            className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                          />
                        </div>
                        <div className="grid grid-cols-1 gap-1 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 w-[90%]">
                          <textarea
                            name="user_message"
                            onChange={handleDescriptionChange}
                            className="text-[14px] rounded-sm bg-transparent outline-none border border-gray-500 py-2 px-2 text-gray-300 resize-none overflow-hidden"
                            placeholder="Project Brief"
                            rows={2}
                            style={{ minHeight: "3rem", maxHeight: "10rem" }}
                          ></textarea>
                        </div>
                      </div>

                      <div className="px-2 py-4 bg-[#111111] flex md:justify-end lg:justify-end xl:justify-end 2xl:justify-end justify-center">
                        <div>
                          <button
                            type="submit"
                            className="text-md py-2 px-4 rounded-md focus:outline-none text-white font-semibold"
                          >
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
              </form>
            </>
          )}
        </div>



        {/* footer section */}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default PortFolioVideography;
