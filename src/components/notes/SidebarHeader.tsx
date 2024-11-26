export default function SidebarHeader() {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
          🎙️
        </div>
        <span className="text-xl font-semibold">☘️ミツバノート</span>
      </div>
      <span className="text-sm ml-14 text-gray-400">클로바노트가 뭐죠?</span>
    </div>
  );
}