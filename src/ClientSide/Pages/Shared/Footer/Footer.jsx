import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { PiYoutubeLogoBold } from "react-icons/pi";
import headerLogo from "/headerLogo.png";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

const Footer = () => {
  return (
    <Element className="border-t  " name="footer">
      <div className="leftRight pt-[50px]">
        <div
          className="
                2xl:w-[54px] 2xl:h-[61px] 
                xl:w-[48px] xl:h-[54.22px] 
                w-[30px] "
        >
          <img
            className="w-full h-full object-cover"
            src={headerLogo}
            alt="footerLogo"
          />
        </div>
        <div
          className="
                w-full
                2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 grid-cols-2
                2xl:pb-[50px] 2xl:pt-[50px] 2xl:justify-items-center
                xl:pt-[50px] xl:pb-[50px] xl:justify-items-center
                lg:justify-items-center
                md:justify-items-center
                
                pt-[20px]
                justify-center 
                grid  text-white                 
                pb-[50px]"
        >
          <div className=" text-white">
            <p
              className="2xl:text-[25px] 2xl:leading-[30px]   
                        xl:text-[20px] xl:leading-[20px] 
                         text-[13px]
                        font-glacialBase  "
            >
              1729 N 2nd St Studio 204A,Minneapolis, MN 55411
            </p>
            <p className="footerEmailPhone  xl:mt-[20px] 2xl:mt-[25px] mt-[15px]">
              hello@fowzimedia.com
            </p>
            <p className="footerEmailPhone xl:mt-[10px] 2xl:mt-[10px] mt-[5px]">
              Tel: (612)466-4688
            </p>
            <p className="footerEmailPhone xl:mt-[20px] 2xl:mt-[25px] mt-[15px]">
              Social Media{" "}
            </p>

            {/*-------------- footer Socail icons---------  */}
            <div
              className="flex 2xl:pt-[15px] 2xl:pb-[50px] xl:pt-[9.41px] xl:pb-[40px] 
                        pt-[10px] pb-[20px]
                        cursor-pointer"
            >
              <Link to="https://www.facebook.com/fowzimedia" target="_blank">
                <p>
                  {" "}
                  <FaFacebookF className="2xl:w-[21.65px] 2xl:h-[45.2px] 2xl:mr-[23px] xl:w-[12.82px] xl:h-[27.25px] xl:mr-[20.09px] mr-[5px]"></FaFacebookF>{" "}
                </p>
              </Link>
              <Link to="https://www.instagram.com/fowzimedia/" target="_blank">
                <p>
                  <IoLogoInstagram className="2xl:w-[42.57px] 2xl:h-[41.77px] 2xl:mr-[20px] xl:w-[25.59px] xl:h-[25.11px] xl:mr-[19.23px] mr-[5px]"></IoLogoInstagram>
                </p>
              </Link>
              <Link to="https://www.youtube.com/@husseinnoor" target="_blank">
                {" "}
                <p>
                  <PiYoutubeLogoBold className="2xl:w-[58.07px] 2xl:h-[48.31px] xl:w-[35.26px] xl:h-[23.24px]"></PiYoutubeLogoBold>
                </p>
              </Link>
            </div>
          </div>

          <div className="ml-[50px] md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0">
            <h3 className="footerHeading">Information</h3>
            <p className="footerListItems">Home</p>
            <p className="footerListItems">Services</p>
            <p className="footerListItems">Portfolio</p>
            <p className="footerListItems">Blogs</p>
          </div>

          <div>
            <h3 className="footerHeading">Help Center</h3>
            <p className="footerListItems">Supports</p>
            <Link to='/termsAndConditions'>
              <p className="footerListItems">Terms & Condition</p>
            </Link>
            <p className="footerListItems">Privacy Policy</p>
          </div>
          <div className="ml-[50px] md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0">
            <h3 className="footerHeading">Opening Hours</h3>
            <p className="footerListItems">
              Monday - Thursday <br /> 9am - 6pm
            </p>
            <p className="footerListItems">
              Friday <br /> 9am - 12.30pm
            </p>
            <p className="footerListItems">Weekend Closed</p>
            {/* <p className="footerListItems">Closed</p> */}
          </div>
        </div>
      </div>
      <div className="xl:py-[50px] 2xl:py-[50px] py-[20px] border-t text-white text-center w-full">
        {/* <p>Designed and Developed by <Link to="https://www.fowzimedia.com" target="_blank" className="font-glaCailBold hover:underline">Fowzi Media.</Link> Copyright © Fowzi Media. All rights reserved.</p> */}
        <p>
          Designed and Developed by{" "}
          <Link
            to="https://www.fowzimedia.com"
            target="_blank"
            className="font-glaCailBold hover:underline"
          >
            Fowzi Media.{" "}
          </Link>
          © Fowzi Media. All rights reserved.
        </p>
      </div>
    </Element>
  );
};

export default Footer;
