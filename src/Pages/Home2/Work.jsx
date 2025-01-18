import PointHook from "../../hooks/PointHook";

const Work = () => {
    return (
        <div id="work" className="bg-[#01000E] py-36">
            <div className="max-w-[1296px] mx-auto px-5 2xl:px-1">
                <div data-aos='fade-down' className="flex flex-col items-center">
                    <PointHook text={'How it Work'} />
                    <h3 className="font font-semibold text-[48px] leading-[57.6px] w-[40rem] text-center text-white">We Are Working Provide Step By Step</h3>
                </div>
                <div className="mt-14 grid grid-cols-3 items-center">
                    <div data-aos='fade-right' className="flex flex-col items-center relative z-30">
                        <img className="h-[236px] relative z-20" src="https://i.imgur.com/tU0Iz6u.png" alt="" />
                        <h5 className="text-[24px] py-4 font font-semibold text-white">Initial Consultation</h5>
                        <p className="inter text-[16px] leading-[24px] text-[#F1ECE9] text-center w-[22rem]">As premier real estate experts, we specialize in curating a portfolio of exclusive in the
                            properties that embody sophistication</p>
                        <div className="absolute top-1 right-28 w-[55px] z-30 h-[55px] flex justify-center items-center rounded-full bg-white text-[#E55027]">
                            <span className="font font-semibold text-[24px]">01</span>
                        </div>
                        <img src="https://i.imgur.com/9O6bGZQ.png" className="absolute top-20 right-12" alt="" />
                    </div>
                    <div data-aos='fade-up' className="flex flex-col items-center relative z-30">
                        <img className="h-[236px] relative z-20" src="https://i.imgur.com/mcF07Kw.png" alt="" />
                        <h5 className="text-[24px] py-4 font font-semibold text-white">Design Conceptual & Development</h5>
                        <p className="inter text-[16px] leading-[24px] text-[#F1ECE9] text-center w-[22rem]">As premier real estate experts, we specialize in curating a portfolio of exclusive in the
                            properties that embody sophistication</p>
                        <div className="absolute top-1 right-28 w-[55px] z-30 h-[55px] flex justify-center items-center rounded-full bg-white text-[#E55027]">
                            <span className="font font-semibold text-[24px]">02</span>
                        </div>
                        <img src="https://i.imgur.com/9O6bGZQ.png" className="absolute top-[4.5rem] right-14" alt="" />
                    </div>
                    <div data-aos='fade-left' className="flex flex-col items-center relative z-30">
                        <img className="h-[236px] relative z-20" src="https://i.imgur.com/ss5vOAX.png" alt="" />
                        <h5 className="text-[24px] py-4 font font-semibold text-white">Completion & Handover</h5>
                        <p className="inter text-[16px] leading-[24px] text-[#F1ECE9] text-center w-[22rem]">As premier real estate experts, we specialize in curating a portfolio of exclusive in the
                            properties that embody sophistication</p>
                        <div className="absolute top-1 right-28 w-[55px] z-30 h-[55px] flex justify-center items-center rounded-full bg-white text-[#E55027]">
                            <span className="font font-semibold text-[24px]">03</span>
                        </div>
                        <img src="https://i.imgur.com/9O6bGZQ.png" className="absolute top-[4.5rem] right-14" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;