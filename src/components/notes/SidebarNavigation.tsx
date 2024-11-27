export default function SidebarNavigation() {
  const navigationItems = [
    { icon: '📄', label: '전체 노트' },
    { icon: '📂', label: '기본폴더' },
    { icon: '🔗', label: '공유 받은 노트' },
    { icon: '🗑️', label: '휴지통' }
  ];

  return (
    <nav className="space-y-4">
      {/* <div className="flex items-center space-x-8 text-gray-400 hover:text-white justify-center mb-4">
        <button className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full">
          🎙️
        </button>
        <button className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full">
          📁
        </button>
      </div> */}
      {navigationItems.map((item, index) => (
        <a 
          key={index} 
          href="#" 
          className="flex items-center space-x-3 text-gray-400 hover:text-white"
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}