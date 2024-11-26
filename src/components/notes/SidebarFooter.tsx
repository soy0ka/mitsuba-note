export default function SidebarFooter() {
  return (
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
  );
}