
import AboutUs from "../AboutUs/AboutUs";
import Header from "../Header/Header";
import OurServices from "../OurServices/OurServices";
import TrustedBy from "../TrustedBy/TrustedBy";
import PortFolio from './../PortFolio/PortFolio';
import Blog from './../Blog/Blog';
import Footer from './../../Shared/Footer/Footer';
import Testimonial from "../Testimonial/Testimonial";
import CallToAction from "../CallToAction/CallToAction";


const Home = () => {
    return (
        <div className="bg-[#111111]">
            <Header></Header>
            <div id="helloServices">
                <OurServices></OurServices>
            </div>
            <AboutUs ></AboutUs>
            <PortFolio></PortFolio>
            <TrustedBy></TrustedBy>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <CallToAction></CallToAction>
            <Footer></Footer>
        </div>
    );
};

export default Home;