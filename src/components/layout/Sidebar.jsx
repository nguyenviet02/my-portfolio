import { Link, useLocation } from 'react-router-dom';
import { User, Briefcase, BookOpen, Users, FileBadge } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const sidebarItems = [
    {
      icon: <User className="w-6 h-6 text-text-primary" />,
      text: 'My Profile',
      path: '/profile',
    },
    {
      icon: <Briefcase className="w-6 h-6 text-text-primary" />,
      text: 'Projects',
      path: '/',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-text-primary" />,
      text: 'Skills',
      path: '/skills',
    },
    {
      icon: <Users className="w-6 h-6 text-text-primary" />,
      text: 'Contact',
      path: '/messages',
    },
    // {
    //   icon: <FileBadge className="w-6 h-6 text-text-primary" />,
    //   text: 'Resume',
    //   path: '/resume',
    // },
  ];

  const isActive = (path) => {
    if (path === '/' && currentPath === '/') return true;
    return currentPath === path || (path !== '/' && currentPath.startsWith(path));
  };

  return (
    <aside className="hidden md:block w-[300px] pr-4 py-4 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
      <div className="space-y-1">
        {sidebarItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center gap-3 p-2 rounded-lg transition-colors cursor-target ${isActive(item.path) ? 'bg-gray-200 dark:bg-[#3A3B3C]' : 'hover:bg-gray-200 dark:hover:bg-[#3A3B3C]'}`}
          >
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${isActive(item.path) ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-500' : 'bg-gray-200 dark:bg-[#3A3B3C]'}`}>
              {item.icon}
            </div>
            <span className={`font-medium ${isActive(item.path) ? 'text-blue-500 font-semibold' : 'text-gray-800 dark:text-gray-200'}`}>{item.text}</span>
          </Link>
        ))}
      </div>
      <div className="border-t border-gray-300 dark:border-gray-700 mt-4 pt-4">
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium px-2">@2025 My Portfolio</p>
      </div>
    </aside>
  );
};

export default Sidebar;
