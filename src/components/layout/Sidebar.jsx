import { Link } from 'react-router-dom';
import { User, Briefcase, BookOpen, Users, FileBadge } from 'lucide-react';

const Sidebar = () => {
  const sidebarItems = [
    { 
      icon: <User className="w-6 h-6" />, 
      text: 'My Profile', 
      path: '/profile' 
    },
    { 
      icon: <Briefcase className="w-6 h-6" />, 
      text: 'Projects', 
      path: '/' 
    },
    { 
      icon: <BookOpen className="w-6 h-6" />, 
      text: 'Skills', 
      path: '/skills' 
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      text: 'Contact', 
      path: '/messages' 
    },
    { 
      icon: <FileBadge className="w-6 h-6" />, 
      text: 'Resume', 
      path: '/resume' 
    },
  ];

  return (
    <aside className="hidden md:block w-[300px] pr-4 py-4 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
      <div className="space-y-1">
        {sidebarItems.map((item, index) => (
          <Link 
            key={index}
            to={item.path}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#3A3B3C] transition-colors"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-[#3A3B3C]">
              {item.icon}
            </div>
            <span className="text-gray-800 dark:text-gray-200 font-medium">
              {item.text}
            </span>
          </Link>
        ))}
      </div>
      <div className="border-t border-gray-300 dark:border-gray-700 mt-4 pt-4">
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium px-2">
          © 2024 My Portfolio
        </p>
      </div>
    </aside>
  );
};

export default Sidebar; 