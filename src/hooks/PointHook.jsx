import PropTypes from 'prop-types';
const PointHook = ({black, text, white, green}) => {
    return (
        <div className="flex items-center gap-x-3">
            <img src={`${black?'https://i.imgur.com/hijHZkY.png':green?'https://i.imgur.com/3Fwj7g8.png':'https://i.imgur.com/tJJdiHP.png'} `} alt="" />
            <p className={`inter font font-medium text-[18px] ${white?'text-white':'text-[#E55027]'}`}>{text}</p>
        </div>
    );
};

PointHook.propTypes = {
    black: PropTypes.bool,
    text: PropTypes.string,
    white: PropTypes.bool,
    green: PropTypes.bool,
}

export default PointHook;