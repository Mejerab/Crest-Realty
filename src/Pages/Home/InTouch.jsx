import { IoIosArrowRoundForward } from "react-icons/io";
import PointHook from "../../hooks/PointHook";

const InTouch = () => {
    return (
        <div id="contact" className="bg-[#01000E] py-24 text-white flex items-center">
            <div data-aos='fade-right' className="max-w-[1296px] mx-auto px-5 2xl:px-1">
                <PointHook text={'Contact Us'} />
                <h4 className="font font-semibold text-[48px] w-96">Get In Touch</h4>
                <form className="mt-6 w-[526px] space-y-5">
                    <input placeholder="Your Name" className="input rounded-none w-full inter text-[16px] placeholder:text-[#F1ECE9] text-[#F1ECE9] h-[60px] focus:border-[#E55027] bg-[#272727]" type="text" />
                    <div className="flex gap-5">
                        <input placeholder="Your Number" className="input rounded-none w-full inter text-[16px] placeholder:text-[#F1ECE9] text-[#F1ECE9] h-[60px] focus:border-[#E55027] bg-[#272727]" type="text" />
                        <input placeholder="Subject" className="input rounded-none w-full inter text-[16px] placeholder:text-[#F1ECE9] text-[#F1ECE9] h-[60px] focus:border-[#E55027] bg-[#272727]" type="text" />
                    </div>
                    <input placeholder="Your Address" className="input rounded-none w-full inter text-[16px] placeholder:text-[#F1ECE9] text-[#F1ECE9] h-[60px] focus:border-[#E55027] bg-[#272727]" type="text" />
                    <textarea rows={4} placeholder="Write Your Comment" className="textarea rounded-none w-full inter text-[16px] placeholder:text-[#F1ECE9] text-[#F1ECE9] focus:border-[#E55027] bg-[#272727]" type="text" />
                    <div className="relative button w-fit">
                        <button className="2xl:w-[210px] w-[200px] btn hover:bg-transparent hover:border-[#E55027] border-[#E55027] hover:text-[#E55027] z-40 relative text-white rounded-none h-[58px] inter text-[18px] font-medium bg-transparent">Send Message <IoIosArrowRoundForward className="text-3xl transition-transform -rotate-45" /></button>
                    </div>
                </form>
            </div>
            <div className="relative w-1/2 2xl:w-fit">
                <img className="" src="https://i.imgur.com/0l4rXRw.png" alt="" />
                <div className="w-[416px] h-[526px] bg-[#1B634E] absolute top-28 2xl:top-[8.5rem] -left-8 2xl:-left-[9rem] flex flex-col justify-center pl-12 gap-y-12">
                    <h4 className="font-medium text-[32px] font">Any Time Call</h4>
                    <div className="flex items-center gap-x-5">
                        <img src="https://i.imgur.com/WaNXhIX.png" alt="" />
                        <div>
                            <p className="inter text-[16px] text-[#F1ECE9]">Have A Question?</p>
                            <h5 className="inter text-[18px] font-medium">Free +92 34567 8090</h5>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5">
                        <img src="https://i.imgur.com/TttmALY.png" alt="" />
                        <div>
                            <p className="inter text-[16px] text-[#F1ECE9]">Send Mail </p>
                            <h5 className="inter text-[18px] font-medium">needhelp@compnay.com</h5>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5">
                        <img src="https://i.imgur.com/t9FyVqw.png" alt="" />
                        <div>
                            <p className="inter text-[16px] text-[#F1ECE9]">Visit Anytime</p>
                            <h5 className="inter text-[18px] font-medium pr-12">2222 Westhimer Rd. Santa & Illions 656582</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InTouch;