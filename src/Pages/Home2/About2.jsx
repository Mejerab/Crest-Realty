import { IoIosArrowRoundForward } from "react-icons/io";
import PointHook from "../../hooks/PointHook";

const About2 = () => {
    return (
        <div id="about2" className="max-w-[1296px] mx-auto px-5 2xl:px-1 flex justify-between items-center">
            <div className="relative w-fit">
                <img src="https://i.imgur.com/y9UIs98.png" alt="" />
                <div className="w-[413px] absolute top-0 right-0 text-center h-[151px] border-t-0 border-r-0 bg-[#1B634E] border-[6px] border-white">
                    <h4 className="text-[80px] leading-[84px] font font-bold text-[#E55027] mt-1">20+</h4>
                    <p className="text-[32px] font-semibold text-white font">Professional Experienced</p>
                </div>
            </div>
            <div data-aos='fade-left' className="w-[48%] space-y-5">
                <PointHook text={'About Us'} black />
                <h4 className="font font-semibold text-[48px] leading-[58px] text-[#01000E]">Finding Your Place In The Real Estate Market</h4>
                <p className="inter text-[16px] leading-[24px] text-[#272727] w-[35rem]">Welcome to Crest Realty Properties, where your vision meets our expertise to achieve exceptional results. With a focus on  client satisfaction, we offer comprehensive real estate</p>
                <div className="py-4 flex items-center justify-between">
                    <img className="w-[42%] 2xl:w-full mr-3" src="https://i.imgur.com/UkoZLwt.png" alt="" />
                    <div className="space-y-6">
                        <div className="flex items-center gap-x-4">
                            <div className="w-[70px] h-[70px] rounded-full flex justify-center items-center bg-[#F1ECE9]">
                                <img src="https://i.imgur.com/4TupAFJ.png" alt="" />
                            </div>
                            <div className="w-64 space-y-3">
                                <h5 className="font font-semibold text-[24px] text-[#01000E]">Luce Living Concepts</h5>
                                <p className="inter text-[16px] leading-[24px] text-[#272727]">Where your vision meets our to achieve exceptional results. </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <div className="w-[70px] h-[70px] rounded-full flex justify-center items-center bg-[#F1ECE9]">
                                <img src="https://i.imgur.com/RMxs6K0.png" alt="" />
                            </div>
                            <div className="w-64 space-y-3">
                                <h5 className="font font-semibold text-[24px] text-[#01000E]">Modern Home Service</h5>
                                <p className="inter text-[16px] leading-[24px] text-[#272727]">Where your vision meets our to achieve exceptional results. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative button w-fit">
                    <button className="2xl:w-[210px] w-[200px] btn hover:bg-transparent hover:border-[#E55027] border-[#E55027] hover:text-[#E55027] z-40 relative text-white rounded-none h-[58px] inter text-[18px] font-medium bg-transparent">More About Us <IoIosArrowRoundForward className="text-3xl transition-transform -rotate-45" /></button>
                </div>
            </div>
        </div>
    );
};

export default About2;