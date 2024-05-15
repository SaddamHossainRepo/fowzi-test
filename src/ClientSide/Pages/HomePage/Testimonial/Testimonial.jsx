import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonial.css';
import pic1 from "/pic-1.png"
import pic2 from "/abdiYasin.png"
import pic3 from "/pic-3.png"
import pic4 from "/feisalAli.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";




const CustomPrevArrow = (props) => (
    

<button {...props} className="arrow-button" aria-label="Previous" type="button">
    <FaArrowRightLong></FaArrowRightLong>
</button>
);

const CustomNextArrow = (props) => (
    <button {...props} className="arrow-button2" aria-label="Next" type="button">
        <FaArrowLeftLong></FaArrowLeftLong>
    </button>
);

const Testimonial = () => {

    // const [show, setShow] = useState(true);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };


    // const showBtn = () => {
    //     setShow(!show)
    // }


    return (
        <div className="leftRight">
            <h1 className="titleSubHeading">Testimonial</h1>
            {/* <Marquee {...settings} autoFill={true} pauseOnHover={true}> */}
            <Slider {...settings}>
                {/* testimonial 1 */}
                <div >
                    <div className='relative flex flex-col xl:justify-between xl:flex-row 2xl:flex-row 2xl:justify-between '>
                        <div className=''>
                            <div className='flex items-center border-red-600 '>
                                <div >
                                    <img
                                        src={pic3}
                                        className="block 2xl:w-[51px] 2xl:h-[51px] xl:w-[42px] xl:h-[42px] w-[30px]"
                                        alt="Wild Landscape"
                                    />
                                </div>
                                <div className='text-white 2xl:ml-[20px] xl:ml-[15px] ml-[5px]'>
                                    <h3 className='testHeading'>Rondo Services</h3>
                                    <div className='flex items-center'>
                                        {/* <h4 className='testSubHeading'>Graphics Designer</h4> */}
                                        {/* <h3 className='2xl:ml-[10px] 2xl:mt-[10px] xl:ml-[5px] xl:mt-[5px] ml-1 mt-1'><img className='h-[1px] xl:w-[25px] 2xl:w-[34px] w-[10px]' src={line} alt="" /></h3> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='2xl:w-[1180px] xl:w-[781px] 2xl:ml-[200px] '>
                            <p className="text-white 2xl:text-[30px] 2xl:leading-[51px] 
                            xl:text-[25px] xl:leading-[38.75px] 
                            lg:text-[25px] lg:leading-[30px] 
                            md:text-[20px] md:leading-[25px] 
                            text-[15px] leading-[25.5px]  
                            font-glacialBase">
                               The Fowzi Media team has been excellent to work with. From start to finish, the communication was on point. The design was done exceptionally well per our requirements and was delivered to all locations on time. We highly recommend this company for all digital and web design needs!
                            </p>
                            {/* <p className="pt-[5px] text-[#FF0101]" onClick={()=>showBtn()}>{show? "Show More" : "Show Less"}</p> */}
                        </div>
                    </div>
                </div>
                
                {/* testimonial 6 */}
                <div >
                    <div className='relative flex flex-col xl:justify-between xl:flex-row 2xl:flex-row 2xl:justify-between'>
                        <div className='  '>
                            <div className='flex items-center mr-2'>
                                <div>
                                    <img
                                        src={pic2}
                                        className="block 2xl:w-[51px] 2xl:h-[51px] xl:w-[42px] xl:h-[42px] w-[30px]"
                                        alt="Wild Landscape"
                                    />
                                </div>
                                <div className='text-white 2xl:ml-[20px] xl:ml-[15px] ml-[5px]'>
                                    <h3 className='testHeading '>Abdifatah Yusuf</h3>
                                    <div className='flex items-center'>
                                        {/* <h4 className='testSubHeading'>Graphics Designer</h4> */}
                                        {/* <h3 className='2xl:ml-[10px] 2xl:mt-[10px] xl:ml-[5px] xl:mt-[5px] ml-1 mt-1'><img className='h-[1px] xl:w-[25px] 2xl:w-[34px] w-[10px]' src={line} alt="" /></h3> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='2xl:w-[1180px] xl:w-[781px] 2xl:ml-[200px] '>
                            <p className="text-white 2xl:text-[30px] 2xl:leading-[51px] 
                            xl:text-[25px] xl:leading-[38.75px]
                            lg:text-[25px] lg:leading-[30px] 
                            md:text-[20px] md:leading-[25px] 
                            text-[15px] leading-[25.5px] 
                            font-glacialBase ">
                               I worked with Fowzi Media couple of times since 2020. FM shot commercials for our e-commerce brand. They have been professional, communicative and responsive during our partnership. All products of our products they shot turned Ty out so valuable that it increased our CTR and CVR substantially. I'd definitely recommend working Fowzi Media, you'll be surprised with their creativity and quick turnaround

                            </p>
                            {/* <p className="pt-[5px] text-[#FF0101]" onClick={()=>showBtn()}>{show? "Show More" : "Show Less"}</p> */}
                        </div>
                    </div>
                </div>

                
                {/* testimonial 2 */}
                <div >
                    <div className='relative flex flex-col xl:justify-between xl:flex-row 2xl:flex-row 2xl:justify-between'>
                        <div className='  '>
                            <div className='flex items-center '>
                                <div>
                                    <img
                                        src={pic4}
                                        className="block 2xl:w-[51px] 2xl:h-[51px] xl:w-[42px] xl:h-[42px] w-[30px]"
                                        alt="Wild Landscape"
                                    />
                                </div>
                                <div className='text-white 2xl:ml-[20px] xl:ml-[15px] ml-[5px]'>
                                    <h3 className='testHeading'>Feisal Ali</h3>
                                    <div className='flex items-center'>
                                        {/* <h4 className='testSubHeading'>Graphics Designer</h4> */}
                                        {/* <h3 className='2xl:ml-[10px] 2xl:mt-[10px] xl:ml-[5px] xl:mt-[5px] ml-1 mt-1'><img className='h-[1px] xl:w-[25px] 2xl:w-[34px] w-[10px]' src={line} alt="" /></h3> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='2xl:w-[1180px] xl:w-[781px] 2xl:ml-[200px] '>
                            <p className="text-white 2xl:text-[30px] 2xl:leading-[51px] 
                            xl:text-[25px] xl:leading-[38.75px]
                            lg:text-[25px] lg:leading-[30px] 
                            md:text-[20px] md:leading-[25px] 
                            text-[15px] leading-[25.5px] 
                            font-glacialBase ">
                               Very professional and work done timely.
Will recommend for your business needs!
                            </p>
                            {/* <p className="pt-[5px] text-[#FF0101]" onClick={()=>showBtn()}>{show? "Show More" : "Show Less"}</p> */}
                        </div>
                    </div>
                </div>
                {/* testimonial 3 */}
                
                <div >
                    <div className='relative flex flex-col xl:justify-between xl:flex-row 2xl:flex-row 2xl:justify-between'>
                        <div className='  '>
                            <div className='flex items-center mr-2'>
                                <div>
                                    <img
                                        src={pic1}
                                        className="block 2xl:w-[51px] 2xl:h-[51px] xl:w-[42px] xl:h-[42px] w-[30px]"
                                        alt="Wild Landscape"
                                    />
                                </div>
                                <div className='text-white 2xl:ml-[20px] xl:ml-[15px] ml-[5px]'>
                                    <h3 className='testHeading '>Liban Yasin</h3>
                                    <div className='flex items-center'>
                                        {/* <h4 className='testSubHeading'>Graphics Designer</h4> */}
                                        {/* <h3 className='2xl:ml-[10px] 2xl:mt-[10px] xl:ml-[5px] xl:mt-[5px] ml-1 mt-1'><img className='h-[1px] xl:w-[25px] 2xl:w-[34px] w-[10px]' src={line} alt="" /></h3> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='2xl:w-[1180px] xl:w-[781px] 2xl:ml-[200px] '>
                            <p className="text-white 2xl:text-[30px] 2xl:leading-[51px] 
                            xl:text-[25px] xl:leading-[38.75px]
                            lg:text-[25px] lg:leading-[30px] 
                            md:text-[20px] md:leading-[25px] 
                            text-[15px] leading-[25.5px] 
                            font-glacialBase ">
                               They provided me with a high quality work for a friendly price and responded to feedback in a timely way. I will highly recommend to using Fowzi Media's services. A very satisfied client. Thanks
                            </p>
                            {/* <p className="pt-[5px] text-[#FF0101]" onClick={()=>showBtn()}>{show? "Show More" : "Show Less"}</p> */}
                        </div>
                    </div>
                </div>

                {/* testimonial 4 */}
                <div >
                    <div className='relative flex flex-col xl:justify-between xl:flex-row 2xl:flex-row 2xl:justify-between'>
                        <div className='  '>
                            <div className='flex items-center mr-2'>
                                <div>
                                    <img
                                        src={pic2}
                                        className="block 2xl:w-[51px] 2xl:h-[51px] xl:w-[42px] xl:h-[42px] w-[30px]"
                                        alt="Wild Landscape"
                                    />
                                </div>
                                <div className='text-white 2xl:ml-[20px] xl:ml-[15px] ml-[5px]'>
                                    <h3 className='testHeading '>Abdifatah Yasin</h3>
                                    <div className='flex items-center'>
                                        {/* <h4 className='testSubHeading'>Graphics Designer</h4> */}
                                        {/* <h3 className='2xl:ml-[10px] 2xl:mt-[10px] xl:ml-[5px] xl:mt-[5px] ml-1 mt-1'><img className='h-[1px] xl:w-[25px] 2xl:w-[34px] w-[10px]' src={line} alt="" /></h3> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='2xl:w-[1180px] xl:w-[781px] 2xl:ml-[200px] '>
                            <p className="text-white 2xl:text-[30px] 2xl:leading-[51px] 
                            xl:text-[25px] xl:leading-[38.75px]
                            lg:text-[25px] lg:leading-[30px] 
                            md:text-[20px] md:leading-[25px] 
                            text-[15px] leading-[25.5px] 
                            font-glacialBase ">
                               Excellent service, timely response, excellent customer service. Highly recommended for anyone looking for branding, website develop, social media sites.

                            </p>
                            {/* <p className="pt-[5px] text-[#FF0101]" onClick={()=>showBtn()}>{show? "Show More" : "Show Less"}</p> */}
                        </div>
                    </div>
                </div>

                {/* testimonial 5 */}
                <div >
                    <div className='relative flex flex-col xl:justify-between xl:flex-row 2xl:flex-row 2xl:justify-between'>
                        <div className='  '>
                            <div className='flex items-center mr-2'>
                                <div>
                                    <img
                                        src={pic2}
                                        className="block 2xl:w-[51px] 2xl:h-[51px] xl:w-[42px] xl:h-[42px] w-[30px]"
                                        alt="Wild Landscape"
                                    />
                                </div>
                                <div className='text-white 2xl:ml-[20px] xl:ml-[15px] ml-[5px]'>
                                    <h3 className='testHeading '>Abdishakur Mohamed</h3>
                                    <div className='flex items-center'>
                                        {/* <h4 className='testSubHeading'>Graphics Designer</h4> */}
                                        {/* <h3 className='2xl:ml-[10px] 2xl:mt-[10px] xl:ml-[5px] xl:mt-[5px] ml-1 mt-1'><img className='h-[1px] xl:w-[25px] 2xl:w-[34px] w-[10px]' src={line} alt="" /></h3> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='2xl:w-[1180px] xl:w-[781px] 2xl:ml-[200px] '>
                            <p className="text-white 2xl:text-[30px] 2xl:leading-[51px] 
                            xl:text-[25px] xl:leading-[38.75px]
                            lg:text-[25px] lg:leading-[30px] 
                            md:text-[20px] md:leading-[25px] 
                            text-[15px] leading-[25.5px] 
                            font-glacialBase ">
                               Best media group in Minnesota

                            </p>
                            {/* <p className="pt-[5px] text-[#FF0101]" onClick={()=>showBtn()}>{show? "Show More" : "Show Less"}</p> */}
                        </div>
                    </div>
                </div>

                
                
          

            </Slider>
            {/* </Marquee> */}
        </div>
    );
};

export default Testimonial;
