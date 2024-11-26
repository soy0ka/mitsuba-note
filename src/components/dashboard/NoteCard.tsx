import React from "react";

interface NoteCardProps {
  type: 'record' | 'upload';
  title: string;
  summary: string;
  timestamp: string;
  duration: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ type, title, summary, timestamp, duration }) => {
  return (
    <div className="flex items-center justify-between bg-gray-800 text-white p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
      {/* 왼쪽 섹션 */}
      <div className="flex items-center space-x-4">
        {/* 아이콘 */}
        <div className="flex items-center space-x-2">
        {(type === 'record' ? (
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
            🎙️
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            📁
          </div>
        ))}
        </div>

        {/* 텍스트 섹션 */}
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-400 truncate">{summary}</p>
        </div>
      </div>

      {/* 오른쪽 섹션 */}
      <div className="flex items-center space-x-8">
        <div className="text-sm text-gray-400">{timestamp}</div>
        <div className="text-sm font-bold">{duration}</div>
      </div>
    </div>
  );
};

export default NoteCard;