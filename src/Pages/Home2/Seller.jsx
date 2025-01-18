import { IoIosArrowRoundForward } from "react-icons/io";
import PointHook from "../../hooks/PointHook";

const Seller = () => {
    return (
        <div className="max-w-[1296px] mx-auto px-5 2xl:px-1 flex justify-between items-center pt-3">
                <div data-aos='fade-right' className="mr-12 space-y-3">
                    <PointHook text={'For Seller'} black/>
                    <h3 className="font font-semibold text-[48px] text-[#01000E] leading-[57.6px]">Value Your Dream corporate Building</h3>
                    <p className="inter text-[16px] leading-[24px] text-[#272727]">Welcome to Crest Realty Properties, where your vision meets our expertise to achieve exceptional results. With a focus on innovation </p>
                    <p className="inter text-[16px] leading-[24px] text-[#272727] pr-3">Welcome to Crest Realty Properties, where your vision meets our expertise to achieve exceptional results. With a focus on innovation </p>
                    <p className="font font-semibold pt-5 border-b-2 border-[#27272726] pb-5 text-[24px] text-[#01000E]"><span className="text-[#E55027] pr-3">01</span>Your Gateway to Property Paradise</p>
                    <p className="font font-semibold text-[24px] pt-2 text-[#01000E] pb-7"><span className="text-[#E55027] pr-3">02</span>Crafting Your Perfect Property Story</p>
                    <div className="relative button w-fit">
                        <button className="w-[200px] btn hover:bg-transparent hover:border-[#E55027] border-[#E55027] hover:text-[#E55027] z-40 relative text-white rounded-none h-[58px] inter text-[18px] font-medium bg-transparent">Contact Us<IoIosArrowRoundForward className="text-3xl transition-transform -rotate-45" /></button>
                    </div>
                </div>
                <img className="" src="https://i.imgur.com/obBK2wK.png" alt="" />
            </div>
    );
};

export default Seller;