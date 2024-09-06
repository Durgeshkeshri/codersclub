import './Button.scss';
import { BsArrowDownRight } from "react-icons/bs";
import { useState, useEffect } from 'react';

const CircularButton = () => {
  const [arrowSize, setArrowSize] = useState(60); 
  const [circleRadius, setCircleRadius] = useState(65); 

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 810) {
        setArrowSize(40);
        setCircleRadius(60); 
      } else {
        setArrowSize(60);
        setCircleRadius(65); 
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize(); 

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div href="#" className="circular-link -mb-[6px]">
      <svg
        viewBox="0 0 200 200"
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        className="circular-link__svg"
        aria-labelledby="link-title link-desc"
      >
        <title id="link-title">Explore Button</title>
        <desc id="link-desc">
          A rotating button with text placed around a circle and an arrow that animates on hover
        </desc>
        
        <circle cx="100" cy="100" r={circleRadius} fill="#0080FF" /> 

        <path
          id="link-circle"
          className="circular-link__path"
          d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
          stroke="none"
          fill="none"
        />
        <text className="circular-link__text">
          <textPath href="#link-circle" stroke="none">
            Explore Explore Explore Explore
          </textPath>
        </text>
      </svg>
      <div className="circular-link__arrow">
        <BsArrowDownRight size={arrowSize} color="#FFFFFF" />
      </div>
    </div>
  );
};

export default CircularButton;
