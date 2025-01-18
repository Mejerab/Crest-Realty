import { IoIosArrowRoundForward } from "react-icons/io";
import PointHook from "../../hooks/PointHook";
import { IoLocationOutline } from "react-icons/io5";

const Projects = () => {
    return (
        <div className="bg-[#1B634E] h-[1180px]">
            <div className="max-w-[1296px] mx-auto px-5 2xl:px-1 pt-56">
                <div className="flex justify-between items-center">
                    <div data-aos='fade-right'>
                        <PointHook text={'Project'} green white />
                        <h3 style={{ '-webkit-text-stroke': '2px #ffffffcc' }} className="font text-transparent font-semibold text-[80px] leading-[85px] ">Our Excellent Project</h3>
                    </div>
                    <div data-aos='fade-left' className="relative button w-fit">
                        <button className="w-[200px] btn hover:bg-transparent hover:border-[#E55027] border-[#E55027] hover:text-[#E55027] z-40 relative text-white rounded-none h-[58px] inter text-[18px] font-medium bg-transparent">View Projects <IoIosArrowRoundForward className="text-3xl transition-transform -rotate-45" /></button>
                    </div>
                </div>
                <div className="mt-14">
                    <div className="grid grid-cols-3 gap-x-5">
                        <div className="relative flex justify-center cursor-pointer items-center proHover">
                            <img src="https://i.imgur.com/tfgGDhi.png" alt="" />
                            <div className="w-2/3 mx-auto h-1/4 bg-[#27272766] tra proIn flex justify-center flex-col border border-[#E55027] absolute backdrop-blur-md  pl-5 text-white gap-y-2">
                                <h4 className="font font-semibold text-[24px]">Restaurant Rectorate</h4>
                                <p><IoLocationOutline className="text-2xl inline" /> 9 Eshelby Drive, UK</p>
                                <h3 style={{ '-webkit-text-stroke': '2px #ffffffcc' }} className="font font-semibold text-[48px] text-transparent absolute -bottom-2 right-2">01</h3>
                            </div>
                        </div>
                        <div className="relative flex justify-center cursor-pointer items-center proHover">
                            <img src="https://i.imgur.com/EKhY90J.png" alt="" />
                            <div className="w-2/3 mx-auto h-1/4 bg-[#27272766] tra proIn flex justify-center flex-col border border-[#E55027] absolute backdrop-blur-md  pl-5 text-white gap-y-2">
                                <h4 className="font font-semibold text-[24px]">Restaurant Rectorate</h4>
                                <p><IoLocationOutline className="text-2xl inline" /> 9 Eshelby Drive, UK</p>
                                <h3 style={{ '-webkit-text-stroke': '2px #ffffffcc' }} className="font font-semibold text-[48px] text-transparent absolute -bottom-2 right-2">02</h3>
                            </div>
                        </div>
                        <div className="relative flex justify-center cursor-pointer items-center proHover">
                            <img src="https://i.imgur.com/MH6pqeF.png" alt="" />
                            <div className="w-2/3 mx-auto h-1/4 bg-[#27272766] tra proIn flex justify-center flex-col border border-[#E55027] absolute backdrop-blur-md  pl-5 text-white gap-y-2">
                                <h4 className="font font-semibold text-[24px]">Restaurant Rectorate</h4>
                                <p><IoLocationOutline className="text-2xl inline" /> 9 Eshelby Drive, UK</p>
                                <h3 style={{ '-webkit-text-stroke': '2px #ffffffcc' }} className="font font-semibold text-[48px] text-transparent absolute -bottom-2 right-2">03</h3>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 mt-5 gap-x-5">
                        <div className="relative flex justify-center cursor-pointer items-center proHover">
                            <img src="https://i.imgur.com/Qx63bT4.png" alt="" />
                            <div className="w-2/3 mx-auto h-[187px] bg-[#27272766] tra proIn flex justify-center flex-col border border-[#E55027] absolute backdrop-blur-md pl-5 text-white gap-y-2">
                                <h4 className="font font-semibold text-[24px]">Restaurant Rectorate</h4>
                                <p><IoLocationOutline className="text-2xl inline" /> 9 Eshelby Drive, UK</p>
                                <h3 style={{ '-webkit-text-stroke': '2px #ffffffcc' }} className="font font-semibold text-[48px] text-transparent absolute -bottom-2 right-2">04</h3>
                            </div>
                        </div>
                        <div className="relative flex justify-center cursor-pointer items-center proHover">
                            <img src="https://i.imgur.com/ixKN1nn.png" alt="" />
                            <div className="w-2/3 mx-auto h-[187px] bg-[#27272766] tra proIn flex justify-center flex-col border border-[#E55027] absolute backdrop-blur-md pl-5 text-white gap-y-2">
                                <h4 className="font font-semibold text-[24px]">Restaurant Rectorate</h4>
                                <p><IoLocationOutline className="text-2xl inline" /> 9 Eshelby Drive, UK</p>
                                <h3 style={{ '-webkit-text-stroke': '2px #ffffffcc' }} className="font font-semibold text-[48px] text-transparent absolute -bottom-2 right-2">05</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;