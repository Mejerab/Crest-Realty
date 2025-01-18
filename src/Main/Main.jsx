import { Outlet } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
import Footer from "../Pages/Home/Footer";
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
        <div className="font overflow-hidden">
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;