import { FaPlay } from "react-icons/fa";
import PointHook from "../../hooks/PointHook";

const WeDo = () => {
    return (
        <div className="bg-[#F1ECE9] py-36">
            <div className="max-w-[1296px] mx-auto px-5 2xl:px-1">
                <div data-aos='fade-right'>
                    <PointHook text={'What We Do'} black />
                    <h3 className="font font-semibold text-[48px] text-[#01000E] w-96 leading-[57.6px] pt-4">We Provide Best Modern House</h3>
                </div>
                <div>
                    <div className="h-[2px] w-full bg-[#27272780] rounded-[30px] relative top-24"></div>
                    <div className="flex justify-between px-28">
                        <div className="relative weDown py-20 pl-7">
                            <div className="w-[32px] t-line h-[32px] rounded-full flex justify-center items-center bg-[#E5502766]"><div className="w-[20px] h-[20px] bg-white tra rounded-full"></div></div>
                            <div className="w-[295px] inn tra h-[227px] bg-white absolute shadow-lg top-40 -left-[7rem] text-black flex flex-col justify-center items-center">
                                <h4 className="font font-semibold text-[24px]">Urban Exterior</h4>
                                <p className="inter text-[16px] leading-[24px] w-[12.5rem] text-center pt-4 text-[#272727]">Modern your dream home effortlessly. Explore diverse properties</p>
                                <div className="w-[50px] h-[50px] rec invisible bg-[#1B634E] rounded-[0.9rem] left-[8.2rem] rotate-45 absolute -top-0 z-10"></div>
                            </div>
                        </div>
                        <div className="relative weDown py-20">
                            <div className="w-[32px] t-line h-[32px] rounded-full flex justify-center items-center bg-[#E5502766]"><div className="w-[20px] h-[20px] bg-white tra rounded-full"></div></div>
                            <div className="w-[295px] inn tra h-[227px] bg-white absolute shadow-lg top-40 -left-[8.8rem] text-black flex flex-col justify-center items-center">
                                <h4 className="font font-semibold text-[24px]">Budget Friendly</h4>
                                <p className="inter text-[16px] leading-[24px] w-[12.5rem] text-center pt-4 text-[#272727]">Modern your dream home effortlessly. Explore diverse properties</p>
                                <div className="w-[50px] h-[50px] rec invisible bg-[#1B634E] rounded-[0.9rem] left-[8.2rem] rotate-45 absolute -top-0 z-10"></div>
                            </div>
                        </div>
                        <div className="relative weHover py-20">
                            <div className="w-[32px] t-line h-[32px] rounded-full flex justify-center items-center bg-[#E5502766]"><div className="w-[20px] h-[20px] bg-white tra rounded-full"></div></div>
                            <div className="w-[295px] inn tra h-[227px] bg-white absolute shadow-lg -top-48 -left-[8.8rem] text-black flex flex-col justify-center items-center">
                                <h4 className="font font-semibold text-[24px]">Ultra Concept</h4>
                                <p className="inter text-[16px] leading-[24px] w-[12.5rem] text-center pt-4 text-[#272727]">Modern your dream home effortlessly. Explore diverse properties</p>
                                <div className="w-[50px] h-[50px] rec invisible bg-[#1B634E] rounded-[0.9rem] left-[8.2rem] rotate-45 absolute -bottom-0 z-10"></div>
                            </div>
                        </div>
                        <div className="relative weHover py-20 pr-2">
                            <div className="w-[32px] t-line h-[32px] rounded-full flex justify-center items-center bg-[#E5502766]"><div className="w-[20px] h-[20px] bg-white tra rounded-full"></div></div>
                            <div className="w-[295px] inn tra h-[227px] bg-white absolute shadow-lg -top-48 -right-[7rem] text-black flex flex-col justify-center items-center">
                                <h4 className="font font-semibold text-[24px]">Interior Design</h4>
                                <p className="inter text-[16px] leading-[24px] w-[12.5rem] text-center pt-4 text-[#272727]">Modern your dream home effortlessly. Explore diverse properties</p>
                                <div className="w-[50px] h-[50px] rec invisible bg-[#1B634E] rounded-[0.9rem] left-[8.3rem] rotate-45 absolute -bottom-0 z-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos='fade-left' className="w-[30rem] ml-auto space-y-7">
                    <p className="inter text-[16px] leading-[24px] text-[#272727]">At Dreamland Legacy Realty, we understand that finding your dream home is more than just a transaction; it&apos;s about creating lasting memories and building a legacy for generations to come.</p>
                    <div className="flex items-center gap-x-5">
                        <div onClick={() => document.getElementById('my_modal_3').showModal()} className="w-[65px] cursor-pointer h-[65px] rounded-full flex justify-center items-center bg-white border border-[#E550274D]">
                            <FaPlay className="text-xl text-[#E55027]" />
                        </div>
                        <p className="inter text-[18px] font-medium text-[#01000E]">Video Presentation</p>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box max-w-[55rem] h-full max-h-[34rem] flex justify-center items-center bg-white">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <video className="!w-[120rem] rounded-xl" autoPlay controls src="https://i.imgur.com/ce9hiE3.mp4"></video>
                </div>
            </dialog>
        </div>
    );
};

export default WeDo;