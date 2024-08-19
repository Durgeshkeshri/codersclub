import './Button.scss';
import { BsArrowDownRight } from "react-icons/bs";

const CircularButton = () => {
  return (
    <a href="#" className="circular-link">
      <svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg" className="circular-link__svg" aria-labelledby="link-title link-desc">
        <title id="link-title">Explore Button</title>
        <desc id="link-desc">A rotating button with text placed around a circle and an arrow that animates on hover</desc>
        
        <circle cx="100" cy="100" r="65" fill="#0080FF" /> {/* 1.5x larger inner circle */}

        <path id="link-circle" className="circular-link__path" d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" stroke="none" fill="none" />
        <text className="circular-link__text">
          <textPath href="#link-circle" stroke="none">
            Explore Explore Explore Explore
          </textPath>
        </text>
      </svg>
      <div className="circular-link__arrow">
        <BsArrowDownRight size={60} color="#FFFFFF" />
      </div>
    </a>
  );
};

export default CircularButton;

