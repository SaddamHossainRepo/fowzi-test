
import { Link } from "react-router-dom";
import blog1 from "/blogOne.png"
import blog2 from "/blogTwo.jpg"
import blog3 from "/importanceOfUsing.jpg"
import {  Element } from 'react-scroll';



const Blog = () => {
    return (
        <Element name="blog">
            <div className="leftRight 2xl:pb-[200px] xl:pb-[180px] lg:pb-[100px] md:pb-[50px] pb-[10px] ">
                <h2 className="titleSubHeading">Case Studies</h2>
                <div className="md:grid md:grid-cols-3  xl:flex lg:grid lg:grid-cols-3 2xl:flex   justify-between ">
                    <Link to='awad.pdf' target="_blank">
                        <div

                        // 2xl:bg-[url('/largeBorder.png')] xl:bg-[url('/mdBlogBorder.png')] 

                            className="  2xl:w-[494px]  2xl:mr-[55px] 2xl:mb-0
                            xl:w-[368.06px]  xl:mb-0
                            mb-[40px]
                            lg:mr-[30px]
                            md:mr-[15px]
                            md:h-[370px]
                            lg:h-[350px]
                           border rounded-[15px] ">

                            <img className="blogImg" src={blog1} alt="" />

                            <div
                                className="2xl:px-[15px] 2xl:pt-[25px] 2xl:pb-[25px]
                                xl:px-[11px] xl:pt-[19px] xl:pb-[19px]
                                px-[5px] pt-[10px] pb-[10px]
                                flex justify-between items-center">
                                {/* <div className="flex items-center">
                                    <div>
                                        <img className="xl:h-[25px] xl:w-[25px] h-[30px] w-[30px] object-cover" src={profile} alt="" />
                                    </div>
                                    <div className="2xl:ml-[10px] xl:ml-[7.24px] ml-[10px]">
                                        <h3 className="blogUserTitle">Hossen Noor</h3>
                                        <h3 className="blogDate">Dec 28, 2022</h3>
                                    </div>
                                </div>
                                <div>
                                    <p><BsThreeDotsVertical className="text-white"></BsThreeDotsVertical></p>
                                </div> */}
                            </div>
                            <p className="blogHeading">Awad For Puntland</p>
                            <p className="blogPara">
                            Case Study For Amb. Ahmed Isse Awad, Puntland Presidential Candidate, 2024
                            </p>
                           
                        </div>
                    </Link>

                    {/* card two */}
                    <Link to='jfw.pdf' target="_blank">
                    <div
                            className="   2xl:w-[494px]    2xl:mr-[55px] 2xl:mb-0
                            xl:w-[368.06px]  xl:mb-0
                            mb-[40px]
                            lg:mr-[30px]
                            md:mr-[15px]
                            border rounded-[15px]
                            md:h-[370px]
                            lg:h-[350px]
                            object-cover bg-no-repeat">

                            <img className="blogImg" src={blog2} alt="" />

                            <div
                                className="2xl:px-[15px] 2xl:pt-[25px] 2xl:pb-[25px]
                                xl:px-[11px] xl:pt-[19px] xl:pb-[19px]
                                px-[5px] pt-[10px] pb-[10px]
                                flex justify-between items-center">
                                {/* <div className="flex items-center">
                                    <div>
                                        <img className="xl:h-[25px] xl:w-[25px] h-[30px] w-[30px] object-cover" src={profile} alt="" />
                                    </div>
                                    <div className="2xl:ml-[10px] xl:ml-[7.24px] ml-[10px]">
                                        <h3 className="blogUserTitle">Hossen Noor</h3>
                                        <h3 className="blogDate">Dec 28, 2022</h3>
                                    </div>
                                </div>
                                <div>
                                    <p><BsThreeDotsVertical className="text-white"></BsThreeDotsVertical></p>
                                </div> */}
                            </div>
                            <p className="blogHeading">Jannah Fitwear</p>
                            <p className="blogPara">
                            Case Study For Jannah Fitwear, A Clothing Fitness Lifestyle Brand For Muslim Women
                            </p>
                            
                        </div>
                    </Link>

                    {/* card three */}
                    {/* <Link to='#' target="_blank"> */}
                    <div
                            className="   2xl:w-[494px]    2xl:mr-[5px] 2xl:mb-0
                            xl:w-[368.06px]  xl:mb-0
                            md:h-[370px]
                            lg:h-[350px]
                            border rounded-[15px]
                            object-cover bg-no-repeat">

                            <img className="blogImg" src={blog3} alt="" />

                            <div
                                className="2xl:px-[15px] 2xl:pt-[25px] 2xl:pb-[25px]
                                xl:px-[11px] xl:pt-[19px] xl:pb-[19px]
                                px-[5px] pt-[10px] pb-[10px]
                                flex justify-between items-center">
                                {/* <div className="flex items-center">
                                    <div>
                                        <img className="xl:h-[25px] xl:w-[25px] h-[30px] w-[30px] object-cover" src={profile} alt="" />
                                    </div>
                                    <div className="2xl:ml-[10px] xl:ml-[7.24px] ml-[10px]">
                                        <h3 className="blogUserTitle">Hossen Noor</h3>
                                        <h3 className="blogDate">Dec 28, 2022</h3>
                                    </div>
                                </div>
                                <div>
                                    <p><BsThreeDotsVertical className="text-white"></BsThreeDotsVertical></p>
                                </div> */}
                            </div>
                            <p className="blogHeading">2020 Census</p>
                            <p className="blogPara">
                            A case study for the city of Minneapolis 2020 Census.
                            </p>
                          
                        </div>
                    {/* </Link> */}
                </div>


               
                {/* See more button for show all blogs */}
                {/* <Link><button className="blogSeeMore">See More</button></Link> */}
            </div>



        </Element>
    );
};

export default Blog;