import PointHook from "../../hooks/PointHook";
import Rating from '@mui/material/Rating';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay } from 'swiper/modules';

const Testimonials = () => {
    return (
        <div id="blog" className="max-w-[1296px] mx-auto px-5 2xl:px-1">
            <div data-aos='fade-down' className="flex flex-col items-center">
                <PointHook text={'Testimonials'} black />
                <h4 className="text-[48px] font font-semibold text-[#01000E]">What Client Say for Something</h4>
            </div>
            <div className="mt-14 text-white">
                <Swiper
                    slidesPerView={2}
                    slidesPerGroup={1}
                    spaceBetween={31}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className="w-full h-[410px] bg-[#1B634E] px-10 pt-8">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h5 className="font font-semibold text-[32px] mb-1">Great Services</h5>
                                    <Rating readOnly defaultValue={5} sx={{
                                        '& .MuiRating-icon': {
                                            fontSize: '27px', // Increase the size of stars
                                            marginRight: '11px'
                                        },
                                    }} />
                                </div>
                                <img className="select-none" src="https://i.imgur.com/1dmo8Lf.png" alt="" />
                            </div>
                            <p className="inter text-[16px] leading-[24px] text-[#F1ECE9] py-7 w-[32rem]">we are dedicated to leading the way in real estate excellence. With a commitment to integrity, professionalism, and personalized service, we strive to exceed your expectations at every turn. Whether you&apos;re searching for your forever home or looking to sell your property.</p>
                            <div className="flex items-center gap-x-6">
                                <div className="w-[98.4px] relative h-[97px] rounded-full bg-[#E55027]">
                                    <img className="-pb-12" src="https://i.imgur.com/02LCOUB.png" alt="" />
                                </div>
                                <div>
                                    <h5 className="font font-semibold text-[24px] mb-1">Theresa Webb</h5>
                                    <p className="text-[#F1ECE9] inter text-[16px]">Customer</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-[410px] bg-[#1B634E] px-10 pt-8">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h5 className="font font-semibold text-[32px] mb-1">Very Satisfying</h5>
                                    <Rating readOnly defaultValue={5} sx={{
                                        '& .MuiRating-icon': {
                                            fontSize: '27px', // Increase the size of stars
                                            marginRight: '11px'
                                        },
                                    }} />
                                </div>
                                <img className="select-none" src="https://i.imgur.com/1dmo8Lf.png" alt="" />
                            </div>
                            <p className="inter text-[16px] leading-[24px] text-[#F1ECE9] py-7 w-[32rem]">we are dedicated to leading the way in real estate excellence. With a commitment to integrity, professionalism, and personalized service, we strive to exceed your expectations at every turn. Whether you&apos;re searching for your forever home or looking to sell your property.</p>
                            <div className="flex items-center gap-x-6">
                                <div className="w-[98.4px] relative h-[97px] rounded-full bg-[#E55027]">
                                    <img className="-pb-12" src="https://i.imgur.com/Ad0CTZW.png" alt="" />
                                </div>
                                <div>
                                    <h5 className="font font-semibold text-[24px] mb-1">Robert Fox</h5>
                                    <p className="text-[#F1ECE9] inter text-[16px]">Customer</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-[410px] bg-[#1B634E] px-10 pt-8">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h5 className="font font-semibold text-[32px] mb-1">Great Services</h5>
                                    <Rating readOnly defaultValue={5} sx={{
                                        '& .MuiRating-icon': {
                                            fontSize: '27px', // Increase the size of stars
                                            marginRight: '11px'
                                        },
                                    }} />
                                </div>
                                <img className="select-none" src="https://i.imgur.com/1dmo8Lf.png" alt="" />
                            </div>
                            <p className="inter text-[16px] leading-[24px] text-[#F1ECE9] py-7 w-[32rem]">we are dedicated to leading the way in real estate excellence. With a commitment to integrity, professionalism, and personalized service, we strive to exceed your expectations at every turn. Whether you&apos;re searching for your forever home or looking to sell your property.</p>
                            <div className="flex items-center gap-x-6">
                                <div className="w-[98.4px] relative h-[97px] rounded-full bg-[#E55027]">
                                    <img className="-pb-12" src="https://i.imgur.com/02LCOUB.png" alt="" />
                                </div>
                                <div>
                                    <h5 className="font font-semibold text-[24px] mb-1">Theresa Webb</h5>
                                    <p className="text-[#F1ECE9] inter text-[16px]">Customer</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-[410px] bg-[#1B634E] px-10 pt-8">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h5 className="font font-semibold text-[32px] mb-1">Very Satisfying</h5>
                                    <Rating readOnly defaultValue={5} sx={{
                                        '& .MuiRating-icon': {
                                            fontSize: '27px', // Increase the size of stars
                                            marginRight: '11px'
                                        },
                                    }} />
                                </div>
                                <img className="select-none" src="https://i.imgur.com/1dmo8Lf.png" alt="" />
                            </div>
                            <p className="inter text-[16px] leading-[24px] text-[#F1ECE9] py-7 w-[32rem]">we are dedicated to leading the way in real estate excellence. With a commitment to integrity, professionalism, and personalized service, we strive to exceed your expectations at every turn. Whether you&apos;re searching for your forever home or looking to sell your property.</p>
                            <div className="flex items-center gap-x-6">
                                <div className="w-[98.4px] relative h-[97px] rounded-full bg-[#E55027]">
                                    <img className="-pb-12" src="https://i.imgur.com/Ad0CTZW.png" alt="" />
                                </div>
                                <div>
                                    <h5 className="font font-semibold text-[24px] mb-1">Robert Fox</h5>
                                    <p className="text-[#F1ECE9] inter text-[16px]">Customer</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;