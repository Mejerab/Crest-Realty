import About2 from "./About2";
import Buyers from "./Buyers";
import Faq from "./Faq";
import Header2 from "./Header2";
import Projects from "./Projects";
import Seller from "./Seller";
import Services2 from "./Services2";
import Updates from "./Updates";
import WeDo from "./WeDo";
import Work from "./Work";

const Home2 = () => {
    return (
        <div className="">
            <Header2 />
            <WeDo />
            <div className="space-y-36 pt-36">
                <About2 />
                <Services2 />
                <Projects />
                <Buyers />
                <Seller />
                <Work />
                <Faq />
                <Updates />
            </div>
        </div>
    );
};

export default Home2;