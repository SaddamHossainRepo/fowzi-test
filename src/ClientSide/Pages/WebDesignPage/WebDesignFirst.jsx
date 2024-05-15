import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";






const WebDesignFirst = () => {
    return (
        <div>
            <div className="bg-[url('/portFoliohero.png')] bg-center bg-no-repeat  w-[1920px] 2xl:h-[905px] xl:w-full xl:h-[100dvh] ">
                <div className="flex justify-between 2xl:px-[150px] 2xl:pt-[50px] xl:px-[60px] xl:pt-[50px]">
                    <Link to="/"><img className="headerLogo" src="/headerLogo.png" alt="" /></Link>
                    <div className="">
                        <button className="headerHireUsBtn">Hire us</button>
                    </div>
                </div>

            </div>
            <div className="bg-[#111111] 2xl:mt-[-100px] 2xl:rounded-t-[50px] xl:mt-[-50px] xl:rounded-t-[50px] ">
                <div className=" 2xl:px-[150px] 2xl:pt-[50px] 2xl:pb-[200px] xl:px-[60px] xl:pt-[40px] xl:pb-[150px]  text-white">
                    <p className="pageTitle"><Link to='/'>Home</Link> . <Link to='/'>Portfolio</Link> . Web Design . Friday Fashion</p>
                    <h2
                        className="2xl:text-[25px] 2xl:leading-[30px] font-glaCailBold 2xl:pb-[50px]
                    xl:text-[20px] xl:leading-[20px] xl:pb-[20px] 
                     text-[#FF0000]">Friday Fashion</h2>
                    <div className="flex ">
                        <div className="">

                            <div className="2xl:w-full 2xl:h-[1965px] xl:w-full xl:h-[500px] ">
                                <img src="/webDesignDetailsPage.png" className="w-full h-full object-cover xl:rounded-[25px] 2xl:rounded-[50px]" alt="" />
                            </div>
                            <div className="2xl:mt-[60px] xl:mt-[40px]">
                                <p className="2xl:text-[18px] 2xl:leading-[21.58px] xl:text-[16px] xl:leading-[18px] font-glacialBase">Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.</p>

                                <p className="videoGraphyPara">Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.</p>

                                <p className="videoGraphyPara">Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.</p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* footer section */}
                <Footer></Footer>
            </div>
        </div>
    );
};

export default WebDesignFirst;