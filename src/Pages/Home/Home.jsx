import About from "./About";
import Choose from "./Choose";
import Employe from "./Employe";
import Header from "./Header";
import InTouch from "./InTouch";
import Properties from "./Properties";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Type from "./Type";

const Home = () => {
    return (
        <div className="space-y-24">
            <Header />
            <About />
            <Properties />
            <Choose />
            <Type />
            <Services />
            <Employe />
            <Testimonials />
            <InTouch />
        </div>
    );
};

export default Home;