export default function Home() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-900 p-6 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              🎙️
            </div>
            <span className="text-xl font-semibold">☘️ミツバノート</span>
          </div>
          <span className="text-sm ml-14 text-gray-400">클로바노트가 뭐죠?</span>
          <nav className="space-y-4">
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white">
              <span>📄</span>
              <span>전체 노트</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white">
              <span>📂</span>
              <span>기본폴더</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white">
              <span>🔗</span>
              <span>공유 받은 노트</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white">
              <span>🗑️</span>
              <span>휴지통</span>
            </a>
          </nav>
        </div>
        <div className="space-y-4">
          <div className="text-sm text-gray-400">
            <div className="flex items-center justify-between">
              <span>300분 남았겠냐?</span>
              <span>300분</span>
            </div>
            <div className="w-full h-1 bg-gray-700 rounded">
              <div className="h-full w-[50%] bg-blue-500 rounded"></div>
            </div>
          </div>
          <div className="text-gray-400 space-y-2">
            <a href="#" className="block hover:text-white">알림</a>
            <a href="#" className="block hover:text-white">서비스 설정</a>
            <a href="#" className="block hover:text-white">도움말 및 지원</a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 space-y-6">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-xl font-semibold text-gray-500">노트 정보를 입력해 주세요</h1>
          <h2 className="text-2xl font-bold text-gray-500">새로운 노트</h2>
        </header>

        {/* Upload and Note Sections */}
        <section className="space-y-6">
          {/* Folder and Participants */}
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

          {/* Audio Upload Section */}
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
                defaultValue="한국어"
              >
                <option>자동감지</option>
                <option>한국어</option>
                <option>English</option>
                <option>日本語</option>
                <option>中文</option>
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

        {/* Memo Section */}
        <section className="p-6 bg-neutral-800 rounded-lg">
          <h3 className="text-gray-300 text-sm">메모</h3>
          <textarea
            className="text-sm w-full h-25 mt-2 p-4 bg-neutral-900 text-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="메모를 작성해 보세요."
          ></textarea>
        </section>
      </main>
    </div>
  );
}