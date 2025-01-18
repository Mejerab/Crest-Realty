import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaSkype } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { IoLogoInstagram } from "react-icons/io";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Footer = () => {
    return (
        <div className="bg-[#1B634E]">
            <div className="max-w-[1296px] mx-auto px-5 2xl:px-1">
                <div className=" grid grid-cols-3 justify-between pt-20 pb-12">
                    <div className="space-y-6">
                        <div className="flex items-center text-white">
                            <img className="mr-5" src="https://i.imgur.com/0u5BkSj.png" alt="" />
                            <h4 className="font-semibold text-[32px]">Crest Realty</h4>
                        </div>
                        <p className="inter text-[16px] leading-[24px] text-[#F1ECE9] w-[23rem]">These descriptions aim to convey the unique value proposition, expertise, and commitment to client satisfaction of each real estate business.</p>
                        <div className="flex gap-x-5 items-center">
                            <p className="inter text-[18px] font-medium text-white">FOLLOW US</p>
                            <div className="flex gap-x-4">
                                <button className="w-[32px] h-[32px] hover:text-white transition-colors hover:bg-[#E55027] bg-white rounded-full bg-transparent text-[#01000E] flex justify-center items-center"><IoLogoInstagram className="text-[20px]" /></button>
                                <button className="w-[32px] h-[32px] hover:text-white transition-colors hover:bg-[#E55027] bg-white rounded-full bg-transparent text-[#01000E] flex justify-center items-center"><FaFacebookF className="text-[14px]" /></button>
                                <button className="w-[32px] h-[32px] hover:text-white transition-colors hover:bg-[#E55027] bg-white rounded-full bg-transparent text-[#01000E] flex justify-center items-center"><FaSkype className="text-[16px]" /></button>
                                <button className="w-[32px] h-[32px] hover:text-white transition-colors hover:bg-[#E55027] bg-white rounded-full bg-transparent text-[#01000E] flex justify-center items-center"><FaLinkedinIn className="text-[16px]" /></button>
                            </div>
                        </div>
                    </div>
                    <ul className="mx-auto text-white inter text-[16px] space-y-3">
                        <h4 className="font font-semibold text-[24px] pb-2">Quick Link</h4>
                        <li className="flex items-center gap-x-1 hover:gap-x-3 tra cursor-pointer line"><RiArrowRightDoubleLine className="text-xl tra" />Properties</li>
                        <li className="flex items-center gap-x-1 hover:gap-x-3 tra cursor-pointer line"><RiArrowRightDoubleLine className="text-xl tra" />Our Team</li>
                        <li className="flex items-center gap-x-1 hover:gap-x-3 tra cursor-pointer line"><RiArrowRightDoubleLine className="text-xl tra" />Service</li>
                        <li className="flex items-center gap-x-1 hover:gap-x-3 tra cursor-pointer line"><RiArrowRightDoubleLine className="text-xl tra" />Blog</li>
                        <li className="flex items-center gap-x-1 hover:gap-x-3 tra cursor-pointer line"><RiArrowRightDoubleLine className="text-xl tra" />Contact Us</li>
                    </ul>
                    <div className="text-white space-y-3">
                        <h4 className="font font-semibold text-[24px]">Quick Contact</h4>
                        <p className="inter text-[16px] leading-[24px] text-[#F1ECE9]">Connect with Us Today through the Details Below or Fill Out the Form for a Prompt Response</p>
                        <div className="space-y-8 pt-6">
                            <div className="flex gap-x-7">
                                <div className="w-[48px] h-[48px] flex justify-center items-center rounded-full bg-[#F1ECE9]">
                                    <FaPhoneAlt className="text-lg text-[#E55027]" />
                                </div>
                                <div className="inter">
                                    <h5 className="text-[18px] font-medium">Any Time Call </h5>
                                    <a href="tel:021253987203" className="text-[16px] text-[#F1ECE9]">+(02+125 3987 203)</a>
                                </div>
                            </div>
                            <div className="flex gap-x-7">
                                <div className="w-[48px] h-[48px] flex justify-center items-center rounded-full bg-[#F1ECE9]">
                                    <HiMail className="text-xl text-[#E55027]" />
                                </div>
                                <div className="inter">
                                    <h5 className="text-[18px] font-medium">Send us a message</h5>
                                    <a href="mailto:glimp@gmail.com" className="text-[16px] text-[#F1ECE9]">+glimp@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex gap-x-7">
                                <div className="w-[48px] h-[48px] flex justify-center items-center rounded-full bg-[#F1ECE9]">
                                    <FaLocationDot className="text-xl text-[#E55027]" />
                                </div>
                                <div className="inter">
                                    <h5 className="text-[18px] font-medium">ADDRESS</h5>
                                    <p className="text-[16px] text-[#F1ECE9]">2715 Ash Dr. San Jose, <br /> South Dakota 83475</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-12 border-t border-[#F1ECE933]">
                    <p className="inter text-[18px] font-medium text-white text-center">© Copyright 2024, All Rights Reserved by Crest Realty</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;