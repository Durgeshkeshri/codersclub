import { useState } from "react";
import { Link } from 'react-router-dom';

const Footer = ({ handleScroll }) => {
    const arr = ["Home", "About", "Events", "Gallery"];
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClickWithScroll = (item) => {
        handleScroll(item.toLowerCase());
        setActiveLink(item);
    };

    return (
        <div className="text-white flex flex-col gap-3 justify-center items-center text-[12px] sm:text-[16px] tracking-wider mt-4 ">
            <div className="flex gap-4">
                <ul className="flex gap-4">
                    {arr.map((item, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer ${activeLink === item ? 'text-[#0080FF]' : ''} hover:text-[#0080FF]`}
                            onClick={() => handleLinkClickWithScroll(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="text-center mb-3">
                <h6 className="max-smvideo:text-[12px]">© 2024 CodersClub All Rights Reserved</h6>
                <p className="max-smvideo:text-[12px]">D&D by Ashfaque Shaikh & Durgesh Keshri with ❤️</p>
            </div>
        </div>
    );
};

export default Footer;