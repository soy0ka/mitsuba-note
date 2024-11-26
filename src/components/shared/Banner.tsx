import React from "react";

interface BannerProps {
  title: string;
  description?: string;
  bgColor: string;
}

const Banner: React.FC<BannerProps> = ({ title, description, bgColor }) => {
  return (
    <div
      className={`relative p-6 rounded-lg shadow-lg ${bgColor} text-white flex items-center space-x-4 hover:shadow-2xl transition-transform transform hover:scale-105`}
    >
      {/* 텍스트 섹션 */}
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
        {description && <p className="text-sm text-gray-200 mt-2">{description}</p>}
      </div>

      {/* 배경 장식 */}
      <div className="absolute inset-0 opacity-20 from-white to-transparent rounded-lg"></div>
    </div>
  );
};

export default Banner;