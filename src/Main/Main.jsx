import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
// ..
const Main = () => {
    useEffect(() => {
        AOS.init({
            delay: 200,
            duration: 1500,
            once: true
        });
    }, [])
    return (
        <div className="font">
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;