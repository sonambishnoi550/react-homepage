import React from 'react';
import { useLocation } from 'react-router-dom';

const CommonHeading = ({ className, text, redText }) => {
  const pathname = useLocation().pathname;

  console.log(pathname);

  return (
    <div> 
      <h1 className={`font-lato font-extrabold text-6xl leading-[72px] max-w-[786px] text-center text-white ${className}`}>
        {text}
        <span className={`${pathname === "/" ? "text-white" : pathname === "/about" ? "text-red-600" : ""}`}>
          {redText}
        </span>
      </h1>
      <div
        className={`${pathname === "/"
            ? "bg-black rounded-t-[30px]"
            : pathname === "/about"
              ? "bg-[#002B43]"
              : ""
          }`}
      >
        <h1> {pathname === "/" ? "" : pathname === "/about" ? "" : "Other Page"}</h1>
      </div>
    </div>
  );
};

export default CommonHeading;
