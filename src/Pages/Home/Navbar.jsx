import { FaFacebookF, FaLinkedinIn, FaSkype } from "react-icons/fa";
import { HiPhoneXMark } from "react-icons/hi2";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Navbar = ({ black }) => {
    return (
        <div className="relative top-5 max-w-[1310px] mx-auto pl-5 pr-5 2xl:pr-3.5">
            <div className={`flex justify-between ${black ? 'bg-[#27272766] backdrop-blur-sm' : 'bg-[#1B634E66]'} h-[139px] px-5 w-full`}>
                <div className="flex items-center">
                    <img className="mr-5" src="https://i.imgur.com/0u5BkSj.png" alt="" />
                    <h4 className="font-semibold text-[32px]">Crest Realty</h4>
                </div>
                <div className="pt-5">
                    <div className="flex justify-between ml-auto w-[82%] pb-4 border-b border-[#F1ECE9] mb-4">
                        <div className="flex items-center">
                            <HiPhoneXMark className="text-[20px] mr-5" />
                            <a className="inter text-[18px] font-medium" href="tel:12345698755">+123 456 987 55</a>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <p className="inter text-[18px] font-medium">Follow Us</p>
                            <div className="flex gap-x-4">
                                <div className="w-[32px] h-[32px] hover:text-white transition-colors hover:bg-[#E55027] rounded-full border border-[#E55027] bg-transparent text-white flex justify-center items-center"><IoLogoInstagram className="text-[20px]" /></div>
                                <div className="w-[32px] h-[32px] hover:text-white transition-colors hover:bg-[#E55027] rounded-full border border-[#E55027] bg-transparent text-white flex justify-center items-center"><FaFacebookF className="text-[14px]" /></div>
                                <div className="w-[32px] h-[32px] hover:text-white transition-colors hover:bg-[#E55027] rounded-full border border-[#E55027] bg-transparent text-white flex justify-center items-center"><FaSkype className="text-[16px]" /></div>
                                <div className="w-[32px] h-[32px] hover:text-white transition-colors hover:bg-[#E55027] rounded-full border border-[#E55027] bg-transparent text-white flex justify-center items-center"><FaLinkedinIn className="text-[16px]" /></div>
                            </div>
                        </div>
                    </div>
                    <ul className="flex justify-end gap-x-12 inter text-[18px] font-medium">
                        <li className="relative drop h-14 cursor-pointer">Home
                            <ul className={`w-44 pl-7 py-5 bg-transparent absolute top-16 tra border border-[#1B634E] space-y-3 ${black ? 'bg-[#1B634E4D]' : 'backdrop-blur-lg'}`}>
                                <li className="list relative hover:text-[#E55027] tra w-fit"><Link to='/'>Home1</Link></li>
                                <li className="list relative hover:text-[#E55027] tra w-fit"><Link to='/home2'>Home2</Link></li>
                            </ul>
                        </li>
                        <li className="list relative hover:text-[#E55027] h-fit tra"><button onClick={()=>document.getElementById(black ? 'about2' : 'about').scrollIntoView({
                            behavior: 'smooth'
                        })}>About Us</button></li>
                        <li className="list relative hover:text-[#E55027] h-fit tra"><button onClick={()=>document.getElementById(black ? 'prop' : 'property').scrollIntoView({
                            behavior: 'smooth'
                        })}>Properties</button></li>
                        <li className="list relative hover:text-[#E55027] h-fit tra"><Link to='/'>Pages</Link></li>
                        <li className="list relative hover:text-[#E55027] h-fit tra"><button onClick={()=>document.getElementById(black ? 'work' : 'blog').scrollIntoView({
                            behavior: 'smooth'
                        })}>Blog</button></li>
                        <li className="list relative hover:text-[#E55027] h-fit tra"><button onClick={()=>document.getElementById(black ? '' : 'contact').scrollIntoView({
                            behavior: 'smooth'
                        })}>Contact</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
Navbar.propTypes = {
    black: PropTypes.bool
}

export default Navbar;