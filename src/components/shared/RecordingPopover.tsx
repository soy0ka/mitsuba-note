import React from "react";

const RecordingUI: React.FC = () => {
  return (
<div
  className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white rounded-full p-3 px-6 flex items-center justify-between shadow-md hover:shadow-lg transition-all w-4/12 mx-auto"
  style={{ zIndex: 1000 }}
>
  {/* 왼쪽 섹션 */}
  <div className="flex items-center space-x-2">
    <button className="bg-gray-800 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="white"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 9v6m4-6v6m-7 4h10"
        />
      </svg>
    </button>
    <div className="flex items-center space-x-1 text-xs mx-4">
      <div className="h-2 w-0.5 bg-blue-500 animate-pulse"></div>
      <div className="h-2 w-0.5 bg-blue-400 animate-pulse delay-75"></div>
      <div className="h-2 w-0.5 bg-blue-300 animate-pulse delay-150"></div>
      <span>웹에서 녹음 중 00:11</span>
    </div>
  </div>

  {/* 오른쪽 섹션 */}
  <div className="flex items-center space-x-3 text-xs mx-4">
    <button className="text-gray-400 hover:text-white">취소</button>
    <button className="text-blue-400 hover:text-blue-300">종료</button>
  </div>
</div>
  );
};

export default RecordingUI;