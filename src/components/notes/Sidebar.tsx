import SidebarFooter from './SidebarFooter';
import SidebarHeader from './SidebarHeader';
import SidebarNavigation from './SidebarNavigation';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-neutral-900 p-6 flex flex-col justify-between">
      <div className="space-y-6">
        <SidebarHeader />
        <SidebarNavigation />
      </div>
      <SidebarFooter />
    </aside>
  );
}