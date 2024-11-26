export default function SidebarNavigation() {
  const navigationItems = [
    { icon: '📄', label: '전체 노트' },
    { icon: '📂', label: '기본폴더' },
    { icon: '🔗', label: '공유 받은 노트' },
    { icon: '🗑️', label: '휴지통' }
  ];

  return (
    <nav className="space-y-4">
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