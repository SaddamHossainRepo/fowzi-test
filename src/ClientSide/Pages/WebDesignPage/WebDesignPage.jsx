import { Link } from "react-router-dom";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import Footer from "../Shared/Footer/Footer";
import headerLogo from "/headerLogo.png";
// import social icons
import fb from "/fb.png";
import instra from "/instra.png";
import youtube from "/youtube.png";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";


const WebDesignPage = () => {

  const [popUp, setPopUp] = useState(false);

  const adjustTextareaHeight = (element) => {
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  };

  const handleDescriptionChange = (e) => {
    adjustTextareaHeight(e.target);
  };

  const revealPrice = () => {
    setPopUp(true);
  };

  const closePopUp = () => {
    setPopUp(false);
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
      .sendForm('service_6h9xaia', 'template_4oix8d5', form.current, {
        publicKey: 'MaxR-SmKU3X9z0oRj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          Swal.fire({
            icon: "success",
            title: "Email Sent",
            text: "Email sent successfully",

          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className=" 
            2xl:bg-[url('/herob.png')] 
            xl:bg-[url('/herob.png')]
            lg:bg-[url('/herob.png')]
            md:bg-[url('/herob.png')]
            bg-[url('/herowm.webp')]
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
                                <Link to='/' > <li className="desktopMenu">SERVICES</li> </Link>
                                <Link to="/"  > <li className=" desktopMenu">ABOUT</li> </Link>
                                <Link to="/" > <li className="desktopMenu ">PORTFOLIO</li> </Link>
                                <Link to="/" > <li className=" desktopMenu">BLOG</li> </Link>
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
                                                <Link to='/' >
                                                    <li >SERVICES</li>
                                                </Link>
                                                <Link to="/"  >
                                                    <li >ABOUT</li>
                                                </Link>
                                                <Link to="/" >
                                                    <li >PORTFOLIO</li>
                                                </Link>
                                                <Link to="/" >
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
            <div className="md:block lg:block  xl:block 2xl:block hidden ">
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
        className="bg-[#111111] 
            2xl:mt-[-100px] 2xl:rounded-t-[50px] 
            xl:mt-[-50px] xl:rounded-t-[50px]
            lg:mt-[-50px] lg:rounded-t-[50px]
            md:mt-[-50px] md:rounded-t-[50px]
            "
      >
        <div className=" webDesignParent ">
          <p className="pageTitle">
            <Link to="/">Home</Link> . <Link to="/">Our Service</Link> . Website
            Development
          </p>
          <h2
            className="titleSubHeading block md:hidden lg:hidden xl:hidden 2xl:hidden
                            "
          >
            Website Development
          </h2>
          <div className="flex justify-between w-full flex-col-reverse md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
            <div className="2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[40%]  ">
              <h2
                className="titleSubHeading hidden md:block lg:block xl:block 2xl:block
                            "
              >
                Website Development
              </h2>

              <p className="brandingParaText">
                Transform your online presence with{" "}
                <span className="text-[#FF0000] font-glaCailBold">
                  {" "}
                  Fowzi Media
                </span>{" "}
                expert website development services. We specialize in creating
                stunning websites that captivate your audience and drive
                results. With our streamlined process and personalized approach,
                achieving your online goals has never been easier.
              </p>

              <div className="block lg:hidden md:hidden">
                <div className="barndingListItems">
                  <div className="flex flex-wrap gap-x-[10px] md:gap-x-[15px] lg:gap-x-[20px] xl:gap-x-[20px] 2xl:space-x-[30px]">
                    <li>Responsive Website</li>
                    <li>Real Estate</li>
                    <li>Health Care</li>
                  </div>
                  <div className="flex flex-wrap gap-x-[20px] md:gap-x-[15px] lg:gap-x-[20px] xl:gap-x-[20px] 2xl:space-x-[30px]">
                    <li>Transport</li>
                    <li>Travel</li>
                    <li>Media & Entertainment</li>
                  </div>
                  <div className="flex flex-wrap gap-x-[10px] md:gap-x-[15px] lg:gap-x-[20px] xl:gap-x-[20px]  2xl:space-x-[30px]">
                    <li>Restaurant</li>
                    <li>E - Learning</li>
                    <li>Custom Proactive Solutions</li>
                  </div>
                </div>
              </div>

              {/* <div className=" hidden xl:block 2xl:block">
                <h2
                  className="titleSubHeading
                                2xl:pt-[50px] 2xl:pb-[60px]
                                xl:pt-[50px] xl:pb-[35px]
                               
                                
                                "
                >
                  Why Choose Fowzi Media?
                </h2>

                <li className="weblistItem">
                  {" "}
                  <span className="webListHead">Expertise : </span>With years of
                  experience in website development, we have the knowledge and
                  skills to deliver exceptional results
                </li>

                <li className="weblistItem xl:py-[15px] 2xl:py-[25px]">
                  {" "}
                  <span className="webListHead">Customization : </span> Every
                  website we create is tailored to your unique needs and
                  objectives, ensuring a one-of-a-kind online presence.
                </li>

                <li className="weblistItem">
                  {" "}
                  <span className="webListHead">
                    Customer Satisfaction:{" "}
                  </span>{" "}
                  We prioritize customer satisfaction, delivering high-quality
                  websites that exceed expectations and drive results.
                </li>
              </div> */}
            </div>

            {/* right side img  */}

            <div className="webDesignImgParent">
              <img
                className="h-full w-full xl:rounded-[30px] 2xl:rounded-[30px] lg:rounded-[15px] md:rounded-[10px]"
                src="/radiant.jpg"
                alt=""
              />
            </div>
          </div>

          {/* for 1024 lg device */}
          <div className="hidden lg:block md:block xl:hidden 2xl:hidden">
            <div className="barndingListItems">
              <div className="flex gap-x-[10px] md:gap-x-[15px] lg:gap-x-[20px] xl:gap-x-[20px] 2xl:space-x-[30px]">
                <li>Responsive Website</li>
                <li>Real Estate</li>
                <li>Health Care</li>
              </div>
              <div className="flex gap-x-[20px] md:gap-x-[15px] lg:gap-x-[20px] xl:gap-x-[20px] 2xl:space-x-[30px]">
                <li>Transport</li>
                <li>Travel</li>
                <li>Media & Entertainment</li>
              </div>
              <div className="flex gap-x-[10px] md:gap-x-[15px] lg:gap-x-[20px] xl:gap-x-[20px]  2xl:space-x-[30px]">
                <li>Restaurant</li>
                <li>E-Learning</li>
                <li>Custom Proactive Solutions</li>
              </div>
            </div>
          </div>
          {/* =======for mobile ============= */}
          {/* <div className="block md:block lg:block xl:hidden 2xl:hidden ">
            <h2
              className="titleSubHeading
                                 lg:pt-[50px] lg:pb-[40px]
                                 md:pt-[40px] md:pb-[30px]
                                 pt-[30px] pb-[20px] 
                                
                                "
            >
              Why Choose Fowzi Media?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
              <li className="weblistItem">
                {" "}
                <span className="webListHead">Expertise : </span>With years of
                experience in website development, we have the knowledge and
                skills to deliver exceptional results
              </li>

              <li className="weblistItem xl:py-[15px] 2xl:py-[25px]">
                {" "}
                <span className="webListHead">Customization : </span> Every
                website we create is tailored to your unique needs and
                objectives, ensuring a one-of-a-kind online presence.
              </li>

              <li className="weblistItem">
                {" "}
                <span className="webListHead">Customer Satisfaction: </span> We
                prioritize customer satisfaction, delivering high-quality
                websites that exceed expectations and drive results.
              </li>
            </div>
          </div> */}
        </div>
        {/* --------------our Process Section --------------- */}

        <div className="text-white leftRight">
          <h4 className="titleSubHeading">Our Process</h4>
          <div className="processParent">
            <div className="brandingNumberParent">
              <div>
                <div className="brandingNumber">01</div>
              </div>
              <div>
                <h4 className="processHeading">Consultation</h4>
                {/* <p className="processPara">
                    We begin with a consultation to understand your business,
                    goals, and vision for your website. This allows us to tailor
                    our approach to meet your specific needs and objectives.
                  </p> */}
              </div>
            </div>
            <div className="brandingNumberParent">
              <div>
                <div className="brandingNumber">02</div>
              </div>
              <div>
                <h4 className="processHeading">Design & Planning</h4>
                {/* <p className="processPara">
                    Our team of talented designers will work closely with you to
                    create a custom design that reflects your brand identity and
                    resonates with your target audience. We'll also develop a
                    detailed plan outlining the structure and functionality of
                    your website.
                  </p> */}
              </div>
            </div>

            <div className="brandingNumberParent">
              <div>
                <div className="brandingNumber">03</div>
              </div>
              <div>
                <h4 className="processHeading">Development</h4>
                {/* <p className="processPara">
                    Once the design and plan are approved, our developers will
                    bring your website to life using the latest technologies and
                    best practices. We ensure your website is not only visually
                    stunning but also fully functional and user-friendly.
                  </p> */}
              </div>
            </div>

            <div className="brandingNumberParent">
              <div>
                <div className="brandingNumber">04</div>
              </div>
              <div>
                <h4 className="processHeading">Testing & Optimization</h4>
                {/* <p className="processPara">
                    Before launching your website, we conduct thorough testing
                    to ensure everything is working seamlessly across all
                    devices and browsers. We also optimize your website for
                    speed, performance, and search engine visibility to maximize
                    its effectiveness.
                  </p> */}
              </div>
            </div>

            <div className="brandingNumberParent">
              <div>
                <div className="brandingNumber">05</div>
              </div>
              <div>
                <h4 className="processHeading">Launch</h4>
                {/* <p className="processPara">
                    With everything in place, we'll launch your website to the
                    world. We'll handle all the technical aspects of deployment
                    to ensure a smooth and successful launch.
                  </p> */}
              </div>
            </div>

            <div className="brandingNumberParent">
              <div>
                <div className="brandingNumber">06</div>
              </div>
              <div>
                <h4 className="processHeading">Support & Maintenance</h4>
                {/* <p className="processPara">
                    Our commitment to your success doesn't end with the launch
                    of your website. We offer ongoing support and maintenance to
                    keep your site running smoothly and up-to-date with the
                    latest trends and technologies.
                  </p> */}
              </div>
            </div>
          </div>
        </div>

        {/* -------------------our work sections */}
        <div className="leftRight">
          <div>
            <h4 className="titleSubHeading">Our Works :</h4>
          </div>
          <div className="ourWorkParent">
            <Link to="https://almasirestaurant.com/" target="_blank">
              <div className="relative WorkImgOne">
                <img
                  className=" object-cover h-full w-full 2xl:rounded-[20px] xl:rounded-[20px] lg:rounded-[15px] md:rounded-[15px] rounded-[10px] "
                  src="/almasi.jpg"
                  alt=""
                />
                <div className="overlay absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 hover:opacity-100">
                  <div className="overlay-content text-white flex flex-col items-center justify-center rounded-lg">
                    <h5 className="overlayText">View Website</h5>
                    <p>
                      <FaArrowRightLong></FaArrowRightLong>
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <div>
              <Link to="https://goshenhservices.com/" target="_blank">
                <div className="relative WorkImgTwo">
                  <img
                    className=" object-cover h-full w-full 2xl:rounded-[20px] xl:rounded-[20px] lg:rounded-[15px] md:rounded-[15px] rounded-[10px] "
                    src="/goshen.jpg"
                    alt=""
                  />
                  <div className="overlay absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 hover:opacity-100">
                    <div className="overlay-content text-white flex flex-col items-center justify-center rounded-lg">
                      <h5 className="overlayText">View Website</h5>
                      <p>
                        <FaArrowRightLong></FaArrowRightLong>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="https://washingtontoe.com/" target="_blank">
                <div className="relative WorkImgThree">
                  <img
                    className=" object-cover h-full w-full 2xl:rounded-[20px] xl:rounded-[20px] lg:rounded-[15px] md:rounded-[15px] rounded-[10px] "
                    src="/non3.webp"
                    alt=""
                  />
                  <div className="overlay absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 hover:opacity-100">
                    <div className="overlay-content text-white flex flex-col items-center justify-center rounded-lg">
                      <h5 className="overlayText">View Website</h5>
                      <p>
                        <FaArrowRightLong></FaArrowRightLong>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="https://integrityqualitycare.com/" target="_blank">
                <div className="relative WorkImgOne">
                  <img
                    className=" object-cover h-full w-full 2xl:rounded-[20px] xl:rounded-[20px] lg:rounded-[15px] md:rounded-[15px] rounded-[10px] "
                    src="/integrity.jpg"
                    alt=""
                  />
                  <div className="overlay absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 hover:opacity-100">
                    <div className="overlay-content text-white flex flex-col items-center justify-center rounded-lg">
                      <h5 className="overlayText">View Website</h5>
                      <p>
                        <FaArrowRightLong></FaArrowRightLong>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* ----------Testimonial Sections -------------- */}

        <Testimonial></Testimonial>

        {/* -----------Call to Action Section ------------ */}

        <div
          className="
            leftRight 
            2xl:pb-[200px] 2xl:pt-[200px]
            xl:pb-[200px] xl:pt-[200px]
            lg:pb-[150px] lg:pt-[150px]
            md:pb-[100px] md:pt-[100px]
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
                      {/* Ready to Transform Your Online Presence? */}
                      Ready to Transform Your Online Presence?
                    </h2>
                    {/* <p className="ctaPara">Don't let your website hold you back. Partner with Fowzi Media and unleash the full potential of your online brand. Schedule a consultation today and let's create a website that sets you apart from the competition.</p> */}
                  </div>
                  <div className="ctaBtnParent">
                    <button className="ctaBtn" onClick={revealPrice}>
                      Reveal Price
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- reveal PopUp section -------- */}
        {popUp && (
          <form ref={form} onSubmit={sendEmail}>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen">
                <div
                  className="fixed inset-0 bg-black bg-opacity-35 transition-opacity"
                  aria-hidden="true"
                ></div>
                <div className="relative bg-[#111111] xl:rounded-3xl 2xl:rounded-3xl lg:rounded-2xl md:rounded-2xl rounded-xl w-[90%] md:w-[70%] lg:w-[70%] xl:w-[70%] 2xl:w-[50%]  mx-auto overflow-hidden shadow-md transform transition-all">
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
                        onClick={closePopUp}
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
                        name="user_company"
                        placeholder="Enter Your Company Name"
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
                      <button type="submit" className="text-md py-2 px-4 rounded-md focus:outline-none text-white font-semibold">
                        Submit
                      </button>
                      <button
                        className="text-md py-2 px-4 rounded-md focus:outline-none text-white font-semibold"
                        onClick={closePopUp}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}



        {/* footer section */}
        <Footer></Footer>
      </div>
    </>
  );
};

export default WebDesignPage;
