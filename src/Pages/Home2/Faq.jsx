import { FaMinus, FaPlus } from "react-icons/fa";
import PointHook from "../../hooks/PointHook";
import { useState } from "react";

const Faq = () => {
    const [one, setOne] = useState(true);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [four, setFour] = useState(false);
    return (
        <div className="relative">
            <div className="max-w-[1296px] mx-auto px-5 2xl:px-1 flex flex-col h-full">
                <div  data-aos='fade-right' className="w-1/2 mt-7">
                    <PointHook text={'FAQ'} black />
                    <h3 className="text-[47px] leading-[57.6px] text-[#01000E] font font-semibold">Frequently Asked Question</h3>
                    <div className="mt-4 w-full">
                        <div onClick={() =>{setOne(true);setTwo(false);setThree(false);setFour(false)}} className="collapse border-b border-[#2727274D] rounded-none">
                            <input type="radio" name="my-accordion-1" defaultChecked />
                            <div className="pr-0 collapse-title font flex justify-between items-center font-semibold text-[20px] text-[#272727]"><span>Do you offer financing options?</span>
                                <div className="pr-0 w-[40px] h-[40px] rounded-full bg-[#E55027] flex justify-center items-center">
                                    {one ? <FaPlus className="text-xl text-white" /> : <FaMinus className="text-xl text-white" />}
                                </div>
                            </div>
                            <div className="collapse-content">
                                <p className="inter text-[16px] leading-[24px] text-[#272727]">Yes, we have established partnerships with reputable mortgage brokers and lending institutions. Our team can connect you with experts who can assist in exploring a range of financing options tailored to your specific needs.</p>
                            </div>
                        </div>
                        <div onClick={() => { setTwo(true); setOne(false); setThree(false); setFour(false) }} className="collapse border-b border-[#2727274D] rounded-none">
                            <input type="radio" name="my-accordion-1" />
                            <div className="pr-0 collapse-title font font-semibold text-[20px] flex justify-between items-center text-[#272727]"><span>What is the Price Range of Your Properties?</span>
                                <div className="pr-0 w-[40px] h-[40px] rounded-full bg-[#E55027] flex justify-center items-center">
                                    {two ? <FaPlus className="text-xl text-white" /> : <FaMinus className="text-xl text-white" />}
                                </div>
                            </div>
                            <div className="pr-0 collapse-content">
                                <p className="inter text-[16px] leading-[24px] text-[#272727]">Yes, we have established partnerships with reputable mortgage brokers and lending institutions. Our team can connect you with experts who can assist in exploring a range of financing options tailored to your specific needs.</p>
                            </div>
                        </div>
                        <div onClick={() => { setThree(true); setOne(false); setTwo(false); setFour(false) }} className="collapse border-b border-[#2727274D] rounded-none">
                            <input type="radio" name="my-accordion-1" />
                            <div className="pr-0 collapse-title font font-semibold text-[20px] flex justify-between items-center text-[#272727]"><span>Common Questions Answered</span>
                                <div className="pr-0 w-[40px] h-[40px] rounded-full bg-[#E55027] flex justify-center items-center">
                                    {three ? <FaPlus className="text-xl text-white" /> : <FaMinus className="text-xl text-white" />}
                                </div>
                            </div>
                            <div className="pr-0 collapse-content">
                                <p className="inter text-[16px] leading-[24px] text-[#272727]">Yes, we have established partnerships with reputable mortgage brokers and lending institutions. Our team can connect you with experts who can assist in exploring a range of financing options tailored to your specific needs.</p>
                            </div>
                        </div>
                        <div onClick={()=>{setFour(true);setOne(false);setThree(false);setTwo(false)}} className="collapse border-b border-[#2727274D] rounded-none">
                            <input type="radio" name="my-accordion-1" />
                            <div className="pr-0 collapse-title font font-semibold text-[20px] flex justify-between items-center text-[#272727]"><span>Where are your properties located?</span>
                                <div className="pr-0 w-[40px] h-[40px] rounded-full bg-[#E55027] flex justify-center items-center">
                                {four?<FaPlus className="text-xl text-white" />:<FaMinus className="text-xl text-white" />}
                                </div>
                            </div>
                            <div className="pr-0 collapse-content">
                                <p className="inter text-[16px] leading-[24px] text-[#272727]">Yes, we have established partnerships with reputable mortgage brokers and lending institutions. Our team can connect you with experts who can assist in exploring a range of financing options tailored to your specific needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="2xl:w-fit 2xl:!h-[115%] w-5/12 absolute right-0 top-0" src="https://i.imgur.com/497SRMM.png" alt="" />
        </div>
    );
};

export default Faq;