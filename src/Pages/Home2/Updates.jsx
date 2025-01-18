import { BsArrowDownRight } from "react-icons/bs";
import PointHook from "../../hooks/PointHook";

const Updates = () => {
    return (
        <div className="max-w-[1296px] mx-auto px-5 2xl:px-1 pb-32">
            <div data-aos='fade-down' className="flex flex-col items-center">
                <PointHook text={'Recently Updates'} black />
                <h3 className="font font-semibold text-[48px] leading-[57.6px] text-[#01000E] w-[35rem] text-center">Latest See Our News & Articles </h3>
            </div>
            <div className="mt-14 flex justify-between items-center gap-x-5">
                <div data-aos='fade-right'>
                    <img className="w-full" src="https://i.imgur.com/4aeg4mB.png" alt="" />
                    <div className="bg-[#01000E] h-[312px] p-8 space-y-4">
                        <h4 className="font font-semibold text-[24px] leading-[33.6px] w-[30rem] text-white">How To Select Individual Villa Property In Village?</h4>
                        <p className="inter text-[16px] leading-[24px] text-[#F1ECE9] w-[33rem]">With a focus on innovation and client satisfaction, we offer comprehensive real estate services tailored to your individual needs. Whether you&apos;re a first-time homebuyer or an experienced investor</p>
                        <div className="w-[81px] hover:bg-[#E55027] tra hover:-rotate-45 hover:border-[#E55027] h-[81px] flex justify-center items-center rounded-full border border-white">
                            <BsArrowDownRight className="text-2xl text-white" />
                        </div>
                    </div>
                </div>
                <div data-aos='fade-left'>
                    <img className="w-full" src="https://i.imgur.com/4i4zjJA.png" alt="" />
                    <div className="bg-[#01000E] h-[312px] p-8 space-y-4">
                        <h4 className="font font-semibold text-[24px] leading-[33.6px] w-[30rem] text-white">The Unique Features Of Premium Gated Community Villas</h4>
                        <p className="inter text-[16px] leading-[24px] text-[#F1ECE9] w-[33rem]">With a focus on innovation and client satisfaction, we offer comprehensive real estate services tailored to your individual needs. Whether you&apos;re a first-time homebuyer or an experienced investor</p>
                        <div className="w-[81px] hover:bg-[#E55027] tra hover:-rotate-45 hover:border-[#E55027] h-[81px] flex justify-center items-center rounded-full border border-white">
                            <BsArrowDownRight className="text-2xl text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Updates;