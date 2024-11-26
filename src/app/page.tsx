import NoteCard from '@/components/dashboard/NoteCard';
import Sidebar from '@/components/notes/Sidebar';
import Banner from '@/components/shared/Banner';

export default function Home() {
  
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

const Dashboard: React.FC = () => {
  const banners = [
    {
      title: "AI가 회의를 정리해드립니다",
      description: "업무를 더 쉽게, 효율적으로 만들어보세요.",
      bgColor: "bg-green-500",
    },
  ];


  const notes = [
    {
      type: 'upload',
      title: "달달소 어둠의 ** 위원단 정기 회의",
      summary:
        "AI 요약 • 너울 추방 안건 관련 • 수능 문제의 어려움 • 2024년도 예산안",
      timestamp: "9.13 금 오전 8:45",
      duration: "130분",
    },
    {
      type: 'record',
      title: "파란머리 모레미 부흥 위원회",
      summary:
        "AI 요약 • 미래의 머리카락 색깔 • 머리카락 길이 • 머리카락 두께",
      timestamp: "11.13 수 오후 2:45",
      duration: "32분",
    }
  ];

  return (
    <div className="space-y-6 flex-1 p-6">
      {/* Banners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {banners.map((banner, index) => (
        <Banner
          key={index}
          title={banner.title}
          description={banner.description}
          bgColor={banner.bgColor}
        />
      ))}
    </div>

      {/* Notes Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-700 mb-4">최근 노트</h2>
        <ul className="space-y-2">
          {notes.map((note, index) => (
            <NoteCard
              key={index}
              type={note.type as 'record' | 'upload'}
              title={note.title}
              summary={note.summary}
              timestamp={note.timestamp}
              duration={note.duration}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
