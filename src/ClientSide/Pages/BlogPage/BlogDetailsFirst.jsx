import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import { PiShareFatDuotone, PiYoutubeLogoBold } from "react-icons/pi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { useState, useEffect } from "react";






const BlogDetailsFirst = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return (
        <div>
            <div className="bg-[url('/blogDetailsImg1.png')] bg-no-repeat bg-center  w-[1920px] 2xl:h-[905px] xl:w-full xl:h-[100dvh]">
                <div className="flex justify-between 2xl:px-[150px] 2xl:pt-[50px] xl:px-[60px] xl:pt-[50px]">
                    <Link to="/"><img className="headerLogo" src="/headerLogo.png" alt="" /></Link>
                    <div className="">
                        <button className="headerHireUsBtn" >Hire us</button>
                    </div>
                </div>

            </div>
            <div className="bg-[#111111] 2xl:mt-[-100px] 2xl:rounded-t-[50px]  xl:mt-[-50px] xl:rounded-t-[50px]">
                <div className=" 2xl:px-[150px] 2xl:pt-[50px] 2xl:pb-[200px] xl:px-[60px] xl:pt-[40px] xl:pb-[150px]  text-white">
                    <p className="pageTitle"><Link to='/'>Home</Link> . Blog . The Importance of Using Video.....</p>

                    {/* ---------- Blog Author information ------------------- */}
                    <div className="flex justify-between 2xl:pb-[60px] xl:pb-[30px]">
                        <div className="flex items-center">
                            <div>
                                <img src="/profile.png" className="2xl:w-[72px] 2xl:h-[72px] object-cover" alt="" />
                            </div>
                            <div className="2xl:ml-[25px] xl:ml-[15px]">
                                <h3>Hoossen Noor</h3>
                                <p>Dec 28, 2023</p>
                            </div>
                        </div>
                        <div className="flex">
                            <Link><p> <FaFacebookF className="w-[16.7px] h-[34px] mr-[25.54px]" ></FaFacebookF> </p></Link>
                            <Link><p><IoLogoInstagram className="w-[32.84px] h-[32.22px] mr-[25.13px]" ></IoLogoInstagram></p></Link>
                            <Link> <p><PiYoutubeLogoBold className="w-[44.67px] h-[30.32px]" ></PiYoutubeLogoBold></p></Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="2xl:text-[25px] 2xl:leading-[30px]  2xl:mb-[25px]
                        xl:text-[20px] xl:leading-[20px] xl:pb-[20px]
                        font-glaCailBold ">The Importance of Using Video to Market Your Products or Services</h3>

                        <p className="2xl:text-[18px] 2xl:leading-[21.58px] text-white 2xl:mb-[25px]
                        xl:text-[16px] xl:leading-[19.19px] xl:pb-[40px]
                        
                        ">Video is an increasingly important tool for businesses looking to market themselves effectively in today's digital world. With the rise of social media and the increasing amount of time people spend online, video has become a vital way for businesses to reach their audience and promote their products or services. In this blog post, we'll explore the various ways in which businesses can use video to market themselves and the benefits of doing so.</p>
                    </div>

                    <div className="flex ">
                        <div className="">
                            <div className="2xl:w-full 2xl:h-[958px] xl:h-[400px]">
                                <img src="/blogDetailsImg.png" className="w-full h-full object-cover 2xl:rounded-[50px] xl:rounded-[10px]" alt="" />
                            </div>
                            <div className="2xl:mt-[25px] 2xl:mb-[50px] xl:mt-[40px] xl:mb-[40px]">
                                <p className="2xl:text-[18px] 2xl:leading-[21.58px] xl:text-[16px] xl:leading-[19.18px] font-glacialBase">One of the primary benefits of using video to market your business is that it allows you to connect with your audience on an emotional level. A well-produced video can capture the attention of your audience and convey your message in a way that text or static images simply cannot. Whether you're promoting a new product, sharing company updates, or highlighting the benefits of your services, video is a powerful way to engage with your audience and build a strong emotional connection.</p>

                                <p className="videoGraphyPara">Another advantage of using video to market your business is that it can help you to stand out in a crowded market. With so much content available online, it can be difficult for businesses to get noticed. By using video, you can create content that is more visually appealing and engaging, which can help you to differentiate your business from the competition.</p>

                                <p className="videoGraphyPara">Video is also a great way to showcase your products or services in action. Whether you're demonstrating how your product works or highlighting the benefits of your services, video is a powerful way to give your audience a better understanding of what you have to offer. This can be especially useful for businesses that sell complex or technical products, as it allows you to clearly communicate the value of your offering to potential customers.</p>

                                <p className="videoGraphyPara">In addition to the benefits mentioned above, video is also a highly effective way to drive traffic and conversions on your website. Studies have shown that websites with video are more likely to rank higher in search results, which can help to increase visibility and drive traffic to your site. Moreover, video can help to increase the amount of time that people spend on your site, which can lead to higher conversion rates.</p>

                                <p className="videoGraphyPara">There are a number of ways that businesses can use video to market themselves, including creating promotional videos, video ads, and video content for social media. Promotional videos are a great way to introduce your business and highlight the benefits of your products or services. These videos can be used on your website, social media channels, or even in emails to promote your business.</p>

                                <p className="videoGraphyPara">Video ads are another effective way to reach a larger audience and drive traffic to your website. By using platforms like YouTube or Facebook, businesses can target specific demographics and interests to ensure that their ads are being seen by the right people.</p>

                                <p className="videoGraphyPara">Finally, creating video content for social media is a great way to engage with your audience and build a strong following. Whether you're sharing company updates, product demos, or behind-the-scenes looks at your business, video content can help to build a strong connection with your audience and encourage them to follow your business on social media.</p>

                                <p className="videoGraphyPara">In conclusion, video is a powerful tool for businesses looking to market themselves effectively in today's digital world. From building emotional connections with your audience to driving traffic and conversions on your website, video offers a wide range of benefits that businesses of all sizes can take advantage of. Whether you're just starting out or you're an established business looking to reach a larger audience, video is an effective way to promote your products or services and build a strong online presence.  </p>
                            </div>

                            <div className="flex justify-between 2xl:px-[50px] border-t-[2px] border-b-[2px] 2xl:py-[25px] xl:px-[30px] xl:py-[10px]">
                                <div className="flex 2xl:text-[25px] 2xl:leading-[30px] text-white font-glacialBase">
                                    <p >2k Views</p>
                                    <p className="2xl:ml-[36px] xl:ml-[25px]" >42 Comment</p>
                                </div>
                                <div className="flex ">
                                    <p><PiShareFatDuotone className="text-[28px] mx-[20.26px]" ></PiShareFatDuotone></p>
                                    <p><MdOutlineFavoriteBorder className="text-[28px]"></MdOutlineFavoriteBorder></p>
                                </div>
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

export default BlogDetailsFirst;