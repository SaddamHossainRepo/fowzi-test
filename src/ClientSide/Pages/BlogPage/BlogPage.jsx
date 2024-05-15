import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import { useEffect } from "react";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="bg-[url('/portFoliohero.png')] bg-no-repeat  w-[1920px] 2xl:h-[905px] ">
        <div className="flex justify-between 2xl:px-[150px] 2xl:pt-[50px]">
          <Link to="/">
            <img className="headerLogo" src="/headerLogo.png" alt="" />
          </Link>
          <div className="">
            <button className="headerHireUsBtn">Hire us</button>
          </div>
        </div>
      </div>
      <div className="bg-[#111111] 2xl:mt-[-100px] 2xl:rounded-t-[50px]">
        <div className=" 2xl:px-[150px] 2xl:pt-[50px] 2xl:pb-[200px]  text-white">
          <p className="pageTitle">
            <Link to="/">Home</Link> . <Link to="/">Portfolio</Link> . Blog
          </p>
          <div className="flex ">
            <div className="2xl:w-[776px]">
              <h2 className="2xl:text-[25px] 2xl:leading-[30px] font-glaCailBold 2xl:pb-[25px] text-[#FF0000]">
                Blog
              </h2>
              <p className="2xl:text-[18px] 2xl:leading-[21.58px] text-white font-glacialBase   2xl:pb-[50px]">
                Your website is often the first impression that potential
                customers have of your business. We can help you create a
                modern, user-friendly website that showcases your brand and
                effectively communicates your message.
              </p>
            </div>
          </div>
        </div>
        {/* footer section */}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default BlogPage;
