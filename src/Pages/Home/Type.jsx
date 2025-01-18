import PointHook from "../../hooks/PointHook";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Type = () => {
    return (
        <div className="max-w-[1296px] mx-auto px-5 2xl:px-1">
            <div  data-aos='fade-down' className="flex flex-col items-center">
                <PointHook black text={'Property Type'} />
                <h4 className="font font-semibold text-[48px] text-[#01000E]">Try Searching For Your Home</h4>
            </div>
            <div className="mt-14 flex justify-between hover:cursor-pointer">
                <Swiper
                    slidesPerView={5}
                    slidesPerGroup={1}
                    spaceBetween={36}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: true
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="h-[320px]"
                >
                    <SwiperSlide className="!h-[243px]">
                        <div className="border border-l-0 border-b-0 hover:bg-[#E55027] cardd hover:-translate-y-2 hover:text-white tra w-[227px] !h-[243px] border-[#E55027] shadow-xl flex flex-col justify-center items-center">
                            <div className="w-[96px] h-[96px] rounded-full mb-4 bg-[#F1ECE9] flex justify-center items-center">
                                <img src="https://i.imgur.com/ZEo4gGS.png" alt="" />
                            </div>
                            <h4 className="font font-semibold text-[24px] pb-2 text-[#01000E]">Apartment </h4>
                            <p className="inter text-[16px] font-medium text-[#272727]">200 Property</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="!h-[243px]">
                        <div className="border border-l-0 border-b-0 hover:bg-[#E55027] cardd hover:-translate-y-2 hover:text-white tra w-[227px] !h-[243px] border-[#E55027] shadow-xl flex flex-col justify-center items-center">
                            <div className="w-[96px] h-[96px] rounded-full mb-4 bg-[#F1ECE9] flex justify-center items-center">
                                <img src="https://i.imgur.com/Nc7WaQg.png" alt="" />
                            </div>
                            <h4 className="font font-semibold text-[24px] pb-2 text-[#01000E]">Studio</h4>
                            <p className="inter text-[16px] font-medium text-[#272727]">220 Property</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="!h-[243px]">
                        <div className="border border-l-0 border-b-0 hover:bg-[#E55027] cardd hover:-translate-y-2 hover:text-white tra w-[227px] !h-[243px] border-[#E55027] shadow-xl flex flex-col justify-center items-center">
                            <div className="w-[96px] h-[96px] rounded-full mb-4 bg-[#F1ECE9] flex justify-center items-center">
                                <img src="https://i.imgur.com/Nc7WaQg.png" alt="" />
                            </div>
                            <h4 className="font font-semibold text-[24px] pb-2 text-[#01000E]">Villa</h4>
                            <p className="inter text-[16px] font-medium text-[#272727]">300 Property</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="!h-[243px]">
                        <div className="border border-l-0 border-b-0 hover:bg-[#E55027] cardd hover:-translate-y-2 hover:text-white tra w-[227px] !h-[243px] border-[#E55027] shadow-xl flex flex-col justify-center items-center">
                            <div className="w-[96px] h-[96px] rounded-full mb-4 bg-[#F1ECE9] flex justify-center items-center">
                                <img src="https://i.imgur.com/YR6lgz1.png" alt="" />
                            </div>
                            <h4 className="font font-semibold text-[24px] pb-2 text-[#01000E]">Office</h4>
                            <p className="inter text-[16px] font-medium text-[#272727]">200 Property</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="!h-[243px]">
                        <div className="border border-l-0 border-b-0 hover:bg-[#E55027] cardd hover:-translate-y-2 hover:text-white tra w-[227px] !h-[243px] border-[#E55027] shadow-xl flex flex-col justify-center items-center">
                            <div className="w-[96px] h-[96px] rounded-full mb-4 bg-[#F1ECE9] flex justify-center items-center">
                                <img src="https://i.imgur.com/02hvRh5.png" alt="" />
                            </div>
                            <h4 className="font font-semibold text-[24px] pb-2 text-[#01000E]">Commercial</h4>
                            <p className="inter text-[16px] font-medium text-[#272727]">200 Property</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="!h-[243px]">
                        <div className="border border-l-0 border-b-0 hover:bg-[#E55027] cardd hover:-translate-y-2 hover:text-white tra w-[227px] !h-[243px] border-[#E55027] shadow-xl flex flex-col justify-center items-center">
                            <div className="w-[96px] h-[96px] rounded-full mb-4 bg-[#F1ECE9] flex justify-center items-center">
                                <img src="https://i.imgur.com/ZEo4gGS.png" alt="" />
                            </div>
                            <h4 className="font font-semibold text-[24px] pb-2 text-[#01000E]">Apartment </h4>
                            <p className="inter text-[16px] font-medium text-[#272727]">200 Property</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="!h-[243px]">
                        <div className="border border-l-0 border-b-0 hover:bg-[#E55027] cardd hover:-translate-y-2 hover:text-white tra w-[227px] !h-[243px] border-[#E55027] shadow-xl flex flex-col justify-center items-center">
                            <div className="w-[96px] h-[96px] rounded-full mb-4 bg-[#F1ECE9] flex justify-center items-center">
                                <img src="https://i.imgur.com/Nc7WaQg.png" alt="" />
                            </div>
                            <h4 className="font font-semibold text-[24px] pb-2 text-[#01000E]">Studio</h4>
                            <p className="inter text-[16px] font-medium text-[#272727]">220 Property</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Type;