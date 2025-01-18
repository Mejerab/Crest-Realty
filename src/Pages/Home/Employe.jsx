import { FiPlus } from "react-icons/fi";
import PointHook from "../../hooks/PointHook";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSkype } from "react-icons/fa";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Employe = () => {
    const [one, setOne] = useState(true);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    console.log(one);

    return (
        <div className="!mt-52 max-w-[1296px] mx-auto px-5 2xl:px-1">
            <div data-aos='fade-down' className="flex flex-col items-center">
                <PointHook text={'Services'} black />
                <h4 className="text-[48px] font-semibold font text-[#01000E]">Our Expert Team</h4>
            </div>
            <div className="mt-14 empl">
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={window.innerWidth>'1199px'?15:10}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="h-[570px]"
                >
                    <SwiperSlide>
                        <div className="w-full h-[500px] bg-[#F1ECE9] relative">
                            <img className="w-[340px]" src="https://i.imgur.com/ZjoGNMv.png" alt="" />
                            <div className="triangle absolute right-0 top-0 pt-8">
                                <div className={`${one ? 'block space-y-4' : 'hidden'} tra`}>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaSkype className="text-[#E55027] text-2xl" />
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaFacebookF className="text-[#E55027] text-xl" />
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaInstagram className="text-[#E55027] text-2xl" />
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaLinkedinIn className="text-[#E55027] text-2xl" />
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => { setOne(!one); setTwo(false); setThree(false) }} className="w-[60px] ico hover:w-[40px] hover:h-[40px] absolute -bottom-11 hover:-bottom-[2.1rem] tra hover:left-[1.17rem] left-2 h-[60px] rounded-full flex justify-center items-center bg-[#E550274D]">
                                    <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#E55027]">
                                        <FiPlus className={`text-white transition-transform text-2xl ${one && '-rotate-45'}`} />
                                    </div>
                                </button>
                            </div>
                            <div className="flex flex-col items-center mt-5">
                                <h5 className="font font-semibold text-[24px] text-[#272727]">Courtney Henry</h5>
                                <p className="inter text-[16px]">Architecture</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-[500px] bg-[#F1ECE9] relative">
                            <img className="w-[340px]" src="https://i.imgur.com/1MladAx.png" alt="" />
                            <div className="triangle absolute right-0 top-0 pt-8">
                                <div className={`${two ? 'block space-y-4' : 'hidden'} tra`}>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaSkype className="text-[#E55027] text-2xl" />
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaFacebookF className="text-[#E55027] text-xl" />
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaInstagram className="text-[#E55027] text-2xl" />
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaLinkedinIn className="text-[#E55027] text-2xl" />
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => { setTwo(!two); setOne(false); setThree(false) }} className="w-[60px] ico hover:w-[40px] hover:h-[40px] absolute -bottom-11 hover:-bottom-[2.1rem] tra hover:left-[1.17rem] left-2 h-[60px] rounded-full flex justify-center items-center bg-[#E550274D]">
                                    <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#E55027]">
                                        <FiPlus className={`text-white transition-transform text-2xl ${two && '-rotate-45'}`} />
                                    </div>
                                </button>
                            </div>
                            <div className="flex flex-col items-center mt-5">
                                <h5 className="font font-semibold text-[24px] text-[#272727]">Jacob Jones</h5>
                                <p className="inter text-[16px]">Engineer</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-[500px] bg-[#F1ECE9] relative">
                            <img className="w-[340px]" src="https://i.imgur.com/ZF9fkti.png" alt="" />
                            <div className="triangle absolute right-0 top-0 pt-8">
                                <div className={`${three ? 'block space-y-4' : 'hidden'} tra`}>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaSkype className="text-[#E55027] text-2xl" />
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaFacebookF className="text-[#E55027] text-xl" />
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaInstagram className="text-[#E55027] text-2xl" />
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaLinkedinIn className="text-[#E55027] text-2xl" />
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => { setThree(!three); setTwo(false); setOne(false) }} className="w-[60px] ico hover:w-[40px] hover:h-[40px] absolute -bottom-11 hover:-bottom-[2.1rem] tra hover:left-[1.17rem] left-2 h-[60px] rounded-full flex justify-center items-center bg-[#E550274D]">
                                    <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#E55027]">
                                        <FiPlus className={`text-white transition-transform text-2xl ${three && '-rotate-45'}`} />
                                    </div>
                                </button>
                            </div>
                            <div className="flex flex-col items-center mt-5">
                                <h5 className="font font-semibold text-[24px] text-[#272727]">Eleanor Pena</h5>
                                <p className="inter text-[16px]">Site Manager</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-[500px] bg-[#F1ECE9] relative">
                            <img className="w-[340px]" src="https://i.imgur.com/ZjoGNMv.png" alt="" />
                            <div className="triangle absolute right-0 top-0 pt-8">
                                <div className={`${one ? 'block space-y-4' : 'hidden'} tra`}>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaSkype className="text-[#E55027] text-2xl" />
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaFacebookF className="text-[#E55027] text-xl" />
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaInstagram className="text-[#E55027] text-2xl" />
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaLinkedinIn className="text-[#E55027] text-2xl" />
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => { setOne(!one); setTwo(false); setThree(false) }} className="w-[60px] ico hover:w-[40px] hover:h-[40px] absolute -bottom-11 hover:-bottom-[2.1rem] tra hover:left-[1.17rem] left-2 h-[60px] rounded-full flex justify-center items-center bg-[#E550274D]">
                                    <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#E55027]">
                                        <FiPlus className={`text-white transition-transform text-2xl ${one && '-rotate-45'}`} />
                                    </div>
                                </button>
                            </div>
                            <div className="flex flex-col items-center mt-5">
                                <h5 className="font font-semibold text-[24px] text-[#272727]">Courtney Henry</h5>
                                <p className="inter text-[16px]">Architecture</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-[500px] bg-[#F1ECE9] relative">
                            <img className="w-[340px]" src="https://i.imgur.com/1MladAx.png" alt="" />
                            <div className="triangle absolute right-0 top-0 pt-8">
                                <div className={`${two ? 'block space-y-4' : 'hidden'} tra`}>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaSkype className="text-[#E55027] text-2xl" />
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaFacebookF className="text-[#E55027] text-xl" />
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaInstagram className="text-[#E55027] text-2xl" />
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaLinkedinIn className="text-[#E55027] text-2xl" />
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => { setTwo(!two); setOne(false); setThree(false) }} className="w-[60px] ico hover:w-[40px] hover:h-[40px] absolute -bottom-11 hover:-bottom-[2.1rem] tra hover:left-[1.17rem] left-2 h-[60px] rounded-full flex justify-center items-center bg-[#E550274D]">
                                    <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#E55027]">
                                        <FiPlus className={`text-white transition-transform text-2xl ${two && '-rotate-45'}`} />
                                    </div>
                                </button>
                            </div>
                            <div className="flex flex-col items-center mt-5">
                                <h5 className="font font-semibold text-[24px] text-[#272727]">Jacob Jones</h5>
                                <p className="inter text-[16px]">Engineer</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-[500px] bg-[#F1ECE9] relative">
                            <img className="w-[340px]" src="https://i.imgur.com/ZF9fkti.png" alt="" />
                            <div className="triangle absolute right-0 top-0 pt-8">
                                <div className={`${three ? 'block space-y-4' : 'hidden'} tra`}>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaSkype className="text-[#E55027] text-2xl" />
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaFacebookF className="text-[#E55027] text-xl" />
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaInstagram className="text-[#E55027] text-2xl" />
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-white">
                                            <FaLinkedinIn className="text-[#E55027] text-2xl" />
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => { setThree(!three); setTwo(false); setOne(false) }} className="w-[60px] ico hover:w-[40px] hover:h-[40px] absolute -bottom-11 hover:-bottom-[2.1rem] tra hover:left-[1.17rem] left-2 h-[60px] rounded-full flex justify-center items-center bg-[#E550274D]">
                                    <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#E55027]">
                                        <FiPlus className={`text-white transition-transform text-2xl ${three && '-rotate-45'}`} />
                                    </div>
                                </button>
                            </div>
                            <div className="flex flex-col items-center mt-5">
                                <h5 className="font font-semibold text-[24px] text-[#272727]">Eleanor Pena</h5>
                                <p className="inter text-[16px]">Site Manager</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Employe;