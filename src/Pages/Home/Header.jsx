import { IoIosArrowRoundForward } from "react-icons/io";
import PointHook from "../../hooks/PointHook";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="bg-[url(https://i.imgur.com/Gt3jJCJ.png)] bg-cover bg-no-repeat text-white">
            <div className="">
                <Navbar />
                <div className="px-5 2xl:px-1 2xl:pl-12 h-full 2xl:max-w-[1368px] mx-auto py-20">
                    <div className="w-fit flex justify-between items-center">
                        <div data-aos='fade-right' className="w-fit 2xl:w-1/2">
                            <PointHook text={'Excellent Real Estate House'} />
                            <h2 className="font font-semibold leading-[70.4px] 2xl:leading-[70.4px] py-4 text-[54px] 2xl:text-[64px] 2xl:w-[38rem]">Your perfect Dream To call Home</h2>
                            <p className="inter text-[18px] leading-[27px] pb-7 text-[#F1ECE9] 2xl:w-[33rem]">Welcome to Crest Realty, where we believe in elevating your real estate experience to new heights.</p>
                            <div className="relative button w-fit">
                                <button className="w-[200px] btn hover:bg-transparent hover:border-[#E55027] border-[#E55027] hover:text-[#E55027] z-40 relative text-white rounded-none h-[58px] inter text-[18px] font-medium bg-transparent">View Projects <IoIosArrowRoundForward className="text-3xl transition-transform -rotate-45" /></button>
                            </div>
                        </div>
                        <img className="2xl:ml-9" src="https://i.imgur.com/fwcsVcr.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;