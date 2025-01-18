import { IoIosArrowRoundForward } from "react-icons/io";
import PointHook from "../../hooks/PointHook";
import Navbar from "../Home/Navbar";

const Header2 = () => {
    return (
        <div className="bg-[url(https://i.imgur.com/04awri7.png)] bg-cover bg-bottom text-white">
            <Navbar black />
            <div className="max-w-[1296px] mx-auto px-5 2xl:px-1 flex flex-col justify-center items-center py-20">
                <div className="w-[697px] h-[454px] bg-[#1B634E99] flex flex-col justify-center items-center">
                    <PointHook text={'Excellent Real Estate House'} />
                    <h3 className="text-[64px] font font-semibold text-center leading-[70px] pb-3 pt-6">Your Modern Real Estate Home</h3>
                    <p className="inter text-[18px] leading-[27px] text-[#F1ECE9] text-center w-[32rem]">Welcome to Crest Realty, where we believe in elevating your real estate experience to new heights.</p>
                    <div className="relative button w-fit mt-12">
                        <button className="w-[200px] btn hover:bg-transparent hover:border-[#E55027] border-[#E55027] hover:text-[#E55027] z-40 relative text-white rounded-none h-[58px] inter text-[18px] font-medium bg-transparent">View Projects <IoIosArrowRoundForward className="text-3xl transition-transform -rotate-45" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header2;