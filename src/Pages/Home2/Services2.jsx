import { IoIosArrowRoundForward } from "react-icons/io";
import PointHook from "../../hooks/PointHook";

const Services2 = () => {
    return (
        <div id="prop" className="max-w-[1296px] mx-auto px-5 2xl:px-1 relative">
            <div className="pb-24">
                <div className="flex justify-between items-end">
                    <div data-aos='fade-right'>
                        <PointHook text={'Service'} black />
                        <h3 className="font font-semibold text-[48px] leading-[57.6px] text-[#01000E] w-[40rem]">Get Your Modern Deram Home With Expert Helping </h3>
                    </div>
                    <div data-aos='fade-left' className="relative button w-fit">
                        <button className="w-[200px] btn hover:bg-transparent hover:border-[#E55027] border-[#E55027] hover:text-[#E55027] z-40 relative text-white rounded-none h-[58px] inter text-[18px] font-medium bg-transparent">Contact Us<IoIosArrowRoundForward className="text-3xl transition-transform -rotate-45" /></button>
                    </div>
                </div>
                <div className="mt-16 grid grid-cols-3 justify-between items-center gap-x-5">
                    <div  data-aos='fade-right'>
                        <img src="https://i.imgur.com/Qbf7r1l.png" alt="" />
                        <div className="w-full h-[178px] bg-[#1B634E] text-white flex flex-col justify-center items-center">
                            <h5 className="text-[24px] font-semibold font">Buy A New Home</h5>
                            <p className="inter text-[16px] leading-[24px] text-[#F1ECE9] mt-4 text-center px-2">Modern your dream home effortlessly. Explore diverse properties and expert guidance </p>
                        </div>
                    </div>
                    <div data-aos='fade-up'>
                        <img src="https://i.imgur.com/vQBsDHL.png" alt="" />
                        <div className="w-full h-[178px] bg-[#1B634E] text-white flex flex-col justify-center items-center">
                            <h5 className="text-[24px] font-semibold font">Rent A Home</h5>
                            <p className="inter text-[16px] leading-[24px] text-[#F1ECE9] mt-4 text-center px-2">Modern your dream home effortlessly. Explore diverse properties and expert guidance </p>
                        </div>
                    </div>
                    <div data-aos='fade-left'>
                        <img src="https://i.imgur.com/73FXU6j.png" alt="" />
                        <div className="w-full h-[178px] bg-[#1B634E] text-white flex flex-col justify-center items-center">
                            <h5 className="text-[24px] font-semibold font">Sell A Home</h5>
                            <p className="inter text-[16px] leading-[24px] text-[#F1ECE9] mt-4 text-center px-2">Modern your dream home effortlessly. Explore diverse properties and expert guidance </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute w-[96.8%] 2xl:w-[99.4%] -bottom-[16rem]">
                <div className="bg-[url(https://i.imgur.com/BonFLdd.png)] bg-cover bg-no-repeat">
                    <div className="bg-[#E55027F0] text-white w-full px-8 font font-semibold h-[233px] flex justify-between items-center">
                        <div className="flex items-center gap-x-5">
                            <img src="https://i.imgur.com/d32FFLt.png" alt="" />
                            <div>
                                <h4 className="text-[64px] leading-[70px]">2k+</h4>
                                <p className="text-[20px]">Project Complete </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-5">
                            <img src="https://i.imgur.com/JJ5vbej.png" alt="" />
                            <div>
                                <h4 className="text-[64px] leading-[70px]">2k+</h4>
                                <p className="text-[20px]">Customer Satisfied</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-5">
                            <img src="https://i.imgur.com/d32FFLt.png" alt="" />
                            <div>
                                <h4 className="text-[64px] leading-[70px]">400+</h4>
                                <p className="text-[20px]">Expert Team Member</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-5">
                            <img src="https://i.imgur.com/d32FFLt.png" alt="" />
                            <div>
                                <h4 className="text-[64px] leading-[70px]">90+</h4>
                                <p className="text-[20px]">Award Winner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services2;