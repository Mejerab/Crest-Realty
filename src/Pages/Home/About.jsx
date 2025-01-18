import { IoIosArrowRoundForward } from "react-icons/io";
import PointHook from "../../hooks/PointHook";

const About = () => {
    return (
        <div id="about" className="max-w-[1296px] px-5 2xl:px-1 mx-auto flex justify-between items-center gap-x-16">
            <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="w-full -ml-2.5 2xl:-ml-1"><img src="https://i.imgur.com/PONZQyu.png" alt="" /></button>
            <div data-aos='fade-left'>
                <PointHook black text={'About Us'} />
                <h3 className="text-[48px] leading-[57.6px] font-semibold font text-[#01000E]">Dreamland Realty Making Your Home Dreams a Reality</h3>
                <p className="text-[16px] py-5 inter w-[34rem] leading-[24px]">Welcome to Crest Realty Properties, where your vision meets our expertise to achieve exceptional results. With a focus on innovation and client satisfaction, we offer comprehensive real estate</p>
                <div className="flex items-center justify-between pb-6 pt-0">
                    <div className="relative w-1/2">
                        <div className="w-[68px] h-[68px] rounded-full bg-[#F1ECE9]"></div>
                        <p className="inter text-[16px] -mt-3 absolute top-6 left-8 flex leading-[24px] text-[#272727]"><h4 className="font text-[64px] mr-3 font-semibold text-[#1B634E] mt-3">15 <span className="text-[#E55027] -ml-4 text-[32px]">+</span></h4>Years of <br />
                            Experience</p>
                    </div>
                    <div className="relative w-1/2">
                        <div className="w-[68px] h-[68px] rounded-full bg-[#F1ECE9]"></div>
                        <p className="inter text-[16px] -mt-3 absolute top-6 left-8 flex leading-[24px] text-[#272727]"><h4 className="font text-[64px] mr-3 font-semibold text-[#1B634E] mt-3">30k <span className="text-[#E55027] -ml-4 text-[32px]">+</span></h4>Completed <br />
                            This Projects</p>
                    </div>
                </div>
                <div className="relative button w-fit">
                    <button className="w-[200px] 2xl:w-[210px] btn hover:bg-transparent hover:border-[#E55027] border-[#E55027] hover:text-[#E55027] z-40 relative text-white rounded-none h-[58px] inter text-[18px] font-medium bg-transparent">More About Us<IoIosArrowRoundForward className="text-3xl transition-transform -rotate-45" /></button>
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

export default About;