import React from 'react';

export default function FeatureItem({ icon, title, description }) {
  return (
    <div className="feature-item flex flex-col items-center sm:items-center md:items-center">
      <img
        src={icon}
        alt={title}
        className="feature-icon w-[50px] h-[55px] mb-[18px] sm:w-[40px] sm:h-[45px] sm:mb-[8px] md:w-[40px] md:h-[45px] md:mb-[8px]"
      />
      <h3 className="feature-title text-[18px] font-extrabold text-[#222222] mb-[12px] sm:text-[14px] sm:mb-[6px] text-center">
        {title}
      </h3>
      <p className="feature-description text-[14px] font-light text-[#222222] sm:text-[12px] sm:max-w-[230px] text-center">
        {description}
      </p>
    </div>
  );
}
