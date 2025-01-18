import { useEffect, useState } from "react";
import PointHook from "../../hooks/PointHook";
import { GrLocation } from "react-icons/gr";

const Properties = () => {
    const [datas, setData] = useState([]);
    useEffect(()=>{
        fetch('/properties.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    console.log(datas);
    
    return (
        <div id="property" className="bg-[#01000E] py-20">
            <div className="max-w-[1296px] px-5 2xl:px-2 mx-auto text-white">
                <div data-aos='fade-down' className="flex flex-col justify-center items-center">
                    <PointHook text={'Properties'}/>
                    <h3 className="font text-[48px] leading-[57.6px] font-semibold w-[36rem] text-center py-3">We Are Provide Excellent Latest Properties</h3>
                    <p className="inter text-[16px] leading-[24px] text-[#F1ECE9] max-w-[42rem] text-center">Welcome to Crest Realty Properties, where your vision meets our expertise to achieve exceptional results. With a focus on innovation and client satisfaction</p>
                </div>
                <div className="grid grid-cols-2 gap-7 justify-between mt-14">
                    {
                        datas.map(data=>
                            <div data-aos={`${parseInt(data.id)%2==0?'fade-left': 'fade-right'}`} key={data.id} className='cont w-full h-[580px] relative hover:cursor-pointer'>
                                <img className="h-full w-full" src={data.image} alt="" />
                                <div className="child absolute bottom-0 w-full h-[225px] tra pt-5 bg-[#272727CC] px-5">
                                    <div className="flex justify-between">
                                        <p className="font font-semibold text-[32px]">{data.price}</p>
                                        <button className={`btn w-[106px] tra h-[51px] text-white rounded-none font-medium border-0 inter text-[18px] ${data.type?'bg-[#1B634E] hover:text-[#1B634E] hover:bg-white':'bg-[#E55027] hover:bg-white hover:text-[#E55027]'}`}>{data.type?'For Sale':'For Rent'}</button>
                                    </div>
                                    <h3 className="font font-semibold text-[32px] py-3 pb-6">{data.title}</h3>
                                    <p className="inter text-[16px]"><GrLocation className="w-[20px] h-[20px] inline -mt-1 mr-2" />{data.location}</p>
                                    <div className="pt-2 flex items-center gap-x-7">
                                        <div className="flex items-center gap-x-2 inter text-[16px]">
                                            <div className="w-[10px] h-[10px] bg-[#E55027] rounded-full"></div>
                                            4 Rooms
                                        </div>
                                        <div className="flex items-center gap-x-2 inter text-[16px]">
                                            <div className="w-[10px] h-[10px] bg-[#E55027] rounded-full"></div>
                                            3 Baths
                                        </div>
                                        <div className="flex items-center gap-x-2 inter text-[16px]">
                                            <div className="w-[10px] h-[10px] bg-[#E55027] rounded-full"></div>
                                            400 Sq Fit
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Properties;