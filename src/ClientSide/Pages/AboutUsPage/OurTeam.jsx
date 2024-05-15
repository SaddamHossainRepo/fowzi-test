import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { RiYoutubeLine } from "react-icons/ri";


const OurTeam = () => {
    return (
        <div className="leftRight
        ">
            <h2 className="titleSubHeading">Our Team</h2>

            <div className="grid 2xl:grid-cols-3  xl:grid-cols-3 lg:grid-cols-3  md:grid-cols-3 grid-cols-2  2xl:gap-[50px] xl:gap-[35px] lg:gap-[15px] md:gap-[15px] gap-[20px] justify-between ">

                <div className="border xl:rounded-[15px]  2xl:rounded-[18px] lg:rounded-[15px] md:rounded-[15px] rounded-[10px] ">
                    <div className="teamImgThree">
                        <img className="h-full w-full  object-cover xl:rounded-[15px]  2xl:rounded-[18px] lg:rounded-[15px] md:rounded-[15px] rounded-[10px] " src="/team3.png" alt="" />
                    </div>
                    <div className="2xl:p-[25px] xl:p-[15px] lg:p-[15px] md:p-[10px] p-[10px]">
                        <h3 className="teamHeading">Hossein Noor</h3>
                        <p className="teamSubHeading">Creative Director</p>
                        <div className="flex text-white">
                            <p><FaFacebookF /></p>
                            <p className="px-[8.5px]"><IoLogoInstagram /></p>
                            <p><RiYoutubeLine /></p>
                        </div>
                    </div>
                </div>

                {/* -----------------Team Card Two ----------- */}
                <div className="
                   xl:mx-0
                 border 2xl:mx-0
                 xl:rounded-[15px]  2xl:rounded-[18px] lg:rounded-[15px] md:rounded-[15px] rounded-[10px]
                ">
                    <div className="teamImgThree">
                        <img className="h-full w-full  object-cover xl:rounded-[15px]  2xl:rounded-[18px] lg:rounded-[15px] md:rounded-[15px] rounded-[10px] " src="/team2.png" alt="" />
                    </div>
                    <div className="2xl:p-[25px] xl:p-[15px] lg:p-[15px] md:p-[10px] p-[10px]">
                        <h3 className="teamHeading">Abdimalik Mohamed</h3>
                        <p className="teamSubHeading">Marketing Manager</p>
                        <div className="flex text-white">
                            <p><FaFacebookF /></p>
                            <p className="px-[8.5px]"><IoLogoInstagram /></p>
                            <p><RiYoutubeLine /></p>
                        </div>
                    </div>
                </div>

                {/* -----------------Team Card Three ----------- */}
                <div className="border xl:border-[1px] xl:rounded-[15px]  2xl:rounded-[18px] lg:rounded-[15px] md:rounded-[15px] rounded-[10px]">
                    <div className="teamImgThree">
                        <img className="h-full w-full  object-cover xl:rounded-[15px]  2xl:rounded-[18px] lg:rounded-[15px] md:rounded-[15px] rounded-[10px] " src="/team1.png" alt="" />
                    </div>
                    <div className="2xl:p-[25px] xl:p-[15px] lg:p-[15px] md:p-[10px] p-[10px]">
                        <h3 className="teamHeading">Ishak Yasin</h3>
                        <p className="teamSubHeading">Cinematographer</p>
                        <div className="flex text-white">
                            <p><FaFacebookF /></p>
                            <p className="px-[8.5px]"><IoLogoInstagram /></p>
                            <p><RiYoutubeLine /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;