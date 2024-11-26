"use client";
import { useState } from 'react';

export default function UploadSection() {
  const [selectedLanguage, setSelectedLanguage] = useState('한국어');
  const languages = ['자동감지', '한국어', 'English', '日本語', '中文'];

  return (
    <section className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <span className="text-gray-400">폴더</span>
          <button className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">전체 노트</button>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400">참석자</span>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">디아</span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">너울</span>
            <button className="w-8 h-8 bg-gray-800 flex items-center justify-center rounded-full">
              +
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 bg-neutral-800 rounded-lg space-y-4">
        <p className="text-gray-300">
          녹음 또는 파일 업로드로 음성 기록을 만들어 보세요.
          <br />
          파일 업로드 시 먼저 인식 언어를 선택한 다음 파일 첨부를 클릭하거나 직접 끌어 놓으세요.
          <br />
          (파일 길이: 180분, 지원 형식: .m4a, .mp3, .aac, .amr, .wav)
        </p>
        <div className="flex items-center space-x-4">
          <select
            className="p-2 bg-neutral-700 text-gray-300 rounded focus:outline-none"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            {languages.map((lang, index) => (
              <option key={index}>{lang}</option>
            ))}
          </select>
          <button className="px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-500">
            녹음
          </button>
          <button className="px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600">
            파일 첨부
          </button>
        </div>
      </div>
    </section>
  );
}