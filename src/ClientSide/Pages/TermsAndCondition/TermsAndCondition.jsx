import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import { useEffect } from "react";
import headerLogo from "/headerLogo.png";
import fb from "/fb.png";
import instra from "/instra.png";
import youtube from "/youtube.png";

const TermsAndCondition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // Header
    // portFoliohero.png
    <div>
      <div
        className=" 
        2xl:bg-[url('/portVideo.png')] 
            xl:bg-[url('/portVideo.png')]
            lg:bg-[url('/portVideo.png')]
            md:bg-[url('/portVideo.png')]
            bg-[url('/portVideo.png')]
        bg-no-repeat bg-cover  w-[100%] bg-black 
        
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
                                <Link to='/'   > <li className="desktopMenu">SERVICES</li> </Link>
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

      {/* ================ page body ================ */}
      <div
        className="bg-[#111111] 
            2xl:mt-[-100px] 2xl:rounded-t-[50px] 
            xl:mt-[-50px] xl:rounded-t-[50px]
            lg:mt-[-40px] lg:rounded-t-[40px]
            "
      >
        <div className=" brandigParent ">
          <p className="pageTitle">
            <Link to="/">Home</Link> . <Link to="/">Terms and Conditions</Link>
          </p>

          <p className="termsPara">
            These terms and conditions ("Terms") govern your use of the Fowzi
            Media website ("Website") accessible at www.fowzimedia.com. By
            accessing or using the Website, you agree to be bound by these
            Terms. If you do not agree to these Terms, please do not use the
            Website.
          </p>

          <h3 className="termsHead">Acceptance of Terms</h3>

          <p className="termsPara">
            By accessing or using the Website, you agree to be bound by these
            Terms. If you do not agree with any part of these Terms, you may not
            use the Website.
          </p>

          <h3 className="termsHead">Intellectual Property</h3>

          <p className="termsPara">
            All content included on this Website, such as text, graphics, logos,
            button icons, images, audio clips, digital downloads, data
            compilations, and software, is the property of Fowzi Media or its
            content suppliers and is protected by international copyright laws.
          </p>

          <h3 className="termsHead">Use License</h3>

          <p className="termsPara pb-0">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Fowzi Media's Website for
            personal, non-commercial transitory viewing only. This is the grant
            of a license, not a transfer of title, and under this license, you
            may not:
          </p>

          <div
            className="termsPara 
          2xl:pt-[35px] 2xl:pb-[80px]
          xl:pt-[25px] xl:pb-[50px]
          lg:pt-[20px] lg:pb-[40px]
          md:pt-[20px] md:pb-[40px]
          pt-[15px] pb-[30px]
          
          "
          >
            <ul className="list-disc 2xl:pl-[25px] xl:pl-[25px] lg:pl-[25px] md:pl-[18px] pl-[15px]">
              <li>Modify or copy the materials;</li>
              <li>
                Use the materials for any commercial purpose, or for any public
                display (commercial or non-commercial);
              </li>
              <li>
                Attempt to decompile or reverse engineer any software contained
                on Fowzi Media's Website;
              </li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                Transfer the materials to another person or "mirror" the
                materials on any other server.
              </li>
            </ul>
          </div>

          <h3 className="termsHead">Limitations</h3>

          <p className="termsPara">
            In no event shall Fowzi Media or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on Fowzi Media's Website, even if
            Fowzi Media or a Fowzi Media authorized representative has been
            notified orally or in writing of the possibility of such damage.
          </p>

          <h3 className="termsHead">Links</h3>

          <p className="termsPara">
            Fowzi Media has not reviewed all of the sites linked to its Website
            and is not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by Fowzi Media of
            the site. Use of any such linked website is at the user's own risk.
          </p>

          <h3 className="termsHead">Modifications</h3>

          <p className="termsPara">
            Fowzi Media may revise these Terms at any time without notice. By
            using this Website, you agree to be bound by the current version of
            these Terms.
          </p>

          <h3 className="termsHead">Governing Law</h3>

          <p className="termsPara">
            These Terms shall be governed and construed in accordance with the
            laws of the State of Minnesota, without regard to its conflict of
            law provisions.
          </p>

          <h3 className="termsHead">Contact Information</h3>

          <p
            className="termsPara 2xl:pb-[200px] xl:pb-[200px] lg:pb-[150px] 
          md:pb-[100px] pb-[100px]"
          >
            If you have any questions about these Terms, please contact us at{" "}
            <span className="font-glacialBase text-[#FF0000]">
              hello@fowzimedia.com
            </span>
          </p>
        </div>

        {/* footer section */}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default TermsAndCondition;
