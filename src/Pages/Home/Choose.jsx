import { FaArrowRight } from "react-icons/fa";
import PointHook from "../../hooks/PointHook";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

const Choose = () => {
    return (
        <div className="max-w-[1296px] mx-auto px-5 2xl:px-2 flex gap-x-4 items-center justify-between">
            <div data-aos='fade-right' className="w-full">
                <PointHook text={'Why Choose Us'} black />
                <h3 className="text-[48px] leading-[58px] py-4 font-semibold font text-[#01000E]">Compelling Reasons to Choose Us for Your Real Estate Needs</h3>
                <p className="inter text-[16px] leading-[24px] text-[#272727] w-[42rem]">Welcome to Crest Realty Properties, where your vision meets our expertise to achieve exceptional results. With a focus on innovation and client satisfaction, we offer comprehensive real estate</p>
                <div className="py-9 grid grid-cols-2 gap-y-9">
                    <div className="flex items-center gap-x-3">
                        <FaRegCircleCheck className="text-[18px] text-[#E55027]" />
                        <p className="text-[16px] inter text-[#01000E] font-medium">Transparent Partnerships</p>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <FaRegCircleCheck className="text-[18px] text-[#E55027]" />
                        <p className="text-[16px] inter text-[#01000E] font-medium">Proven Expertise</p>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <FaRegCircleCheck className="text-[18px] text-[#E55027]" />
                        <p className="text-[16px] inter text-[#01000E] font-medium">Customized Solutions</p>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <FaRegCircleCheck className="text-[18px] text-[#E55027]" />
                        <p className="text-[16px] inter text-[#01000E] font-medium">Local Area Knowledge </p>
                    </div>
                </div>
                <button className="btn bt2 2xl:w-[180px] w-[160px] h-[58px] border-2 border-[#E55027] rounded-none bg-white inter text-[16px] text-[#E55027] hover:bg-[#E55027] hover:text-white tra">Contact Us <IoIosArrowRoundForward className="text-3xl tra" /></button>
            </div>
            <div  data-aos='fade-left' className="w-[526px] space-y-6">
                <div className="h-[234px] w-full shadow-2xl shadow-[#E550271A] gap-x-4 flex items-center px-7">
                    <div className="bg-[#F1ECE9] w-[96px] h-[96px] rounded-full flex justify-center items-center"><img src="https://i.imgur.com/ElpANxz.png" alt="" /></div>
                    <div className="space-y-4">
                        <h4 className="text-[#01000E] text-[24px] font-semibold">Buy A New Home</h4>
                        <p className="text-[16px] leading-[24px] text-[#272727] inter w-[21rem]">Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.</p>
                        <button className="inter text-[16px] font-medium text-[#01000E] flex items-center gap-x-4 hover:gap-x-2 tra hover:text-[#E55027]">Contact Us <FaArrowRight /></button>
                    </div>
                </div>
                <div className="h-[234px] w-full shadow-2xl shadow-[#E550271A] gap-x-4 flex items-center px-7">
                    <div className="bg-[#F1ECE9] w-[96px] h-[96px] rounded-full flex justify-center items-center"><img src="https://i.imgur.com/nQwfozS.png" alt="" /></div>
                    <div className="space-y-4">
                        <h4 className="text-[#01000E] text-[24px] font-semibold">Rent A Home</h4>
                        <p className="text-[16px] leading-[24px] text-[#272727] inter w-[21rem]">Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.</p>
                        <button className="inter text-[16px] font-medium text-[#01000E] flex items-center gap-x-4 hover:gap-x-2 tra hover:text-[#E55027]">Contact Us <FaArrowRight /></button>
                    </div>
                </div>
                <div className="h-[234px] w-full shadow-2xl shadow-[#E550271A] gap-x-4 flex items-center px-7">
                    <div className="bg-[#F1ECE9] w-[96px] h-[96px] rounded-full flex justify-center items-center"><img src="https://i.imgur.com/NKxJLQ9.png" alt="" /></div>
                    <div className="space-y-4">
                        <h4 className="text-[#01000E] text-[24px] font-semibold">Sell A Home</h4>
                        <p className="text-[16px] leading-[24px] text-[#272727] inter w-[21rem]">Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.</p>
                        <button className="inter text-[16px] font-medium text-[#01000E] flex items-center gap-x-4 hover:gap-x-2 tra hover:text-[#E55027]">Contact Us <FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;