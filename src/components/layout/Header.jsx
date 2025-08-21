import { Link, useLocation } from 'react-router-dom';
import { Search, Home, MessageCircle, User, Bell, Menu, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ThemeToggle } from '@/components/ThemeToggle';
import profile from '@/data/profile';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-blue-500" />,
      title: 'Email',
      value: 'john.doe@example.com',
    },
    {
      icon: <Phone className="w-5 h-5 text-blue-500" />,
      title: 'Phone',
      value: '+1 (234) 567-8900',
    },
    {
      icon: <Github className="w-5 h-5 text-blue-500" />,
      title: 'GitHub',
      value: 'github.com/username',
    },
    {
      icon: <Linkedin className="w-5 h-5 text-blue-500" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/username',
    },
  ];

  const menuItems = [
    {
      title: 'Home',
      icon: <Home className="w-5 h-5" />,
      path: '/',
    },
    {
      title: 'Messages',
      icon: <MessageCircle className="w-5 h-5" />,
      path: '/messages',
    },
    {
      title: 'Profile',
      icon: <User className="w-5 h-5" />,
      path: '/profile',
    },
  ];

  const isActive = (path) => {
    if (path === '/' && currentPath === '/') return true;
    return currentPath === path || (path !== '/' && currentPath.startsWith(path));
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-[#242526] shadow z-10 h-14">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Left section - Logo and Search */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-blue-500 text-2xl font-bold">
            <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          </Link>
          <div className="hidden md:flex relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <input className="bg-gray-100 dark:bg-[#3A3B3C] rounded-full pl-10 pr-4 py-2 focus:outline-none placeholder:text-text-primary" placeholder="Search" />
          </div>
        </div>

        {/* Center section - Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center">
            <Link
              to="/"
              className={`px-6 py-2 mx-2 border-b-4 ${
                isActive('/') ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#3A3B3C] rounded-lg cursor-target'
              }`}
            >
              <Home className="w-6 h-6" />
            </Link>
            <Link
              to="/messages"
              className={`px-6 py-2 mx-2 border-b-4 ${
                isActive('/messages') ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#3A3B3C] rounded-lg cursor-target'
              }`}
            >
              <MessageCircle className="w-6 h-6" />
            </Link>
            <Link
              to="/profile"
              className={`px-6 py-2 mx-2 border-b-4 ${
                isActive('/profile') ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#3A3B3C] rounded-lg cursor-target'
              }`}
            >
              <User className="w-6 h-6" />
            </Link>
          </div>
        </nav>

        {/* Right section - Profile */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Button size="icon" variant="ghost" className="rounded-full cursor-target">
            <Bell className="w-5 h-5 text-text-primary" />
          </Button>

          {/* Message Circle with Popover on mobile */}
          <Popover>
            <PopoverTrigger asChild>
              <Button size="icon" variant="ghost" className="rounded-full md:hidden">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" align="end">
              <div className="space-y-2">
                <h3 className="font-semibold text-sm text-gray-500 dark:text-gray-400 pb-2 border-b dark:border-gray-700">CONTACT INFORMATION</h3>
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 hover:bg-gray-100 dark:hover:bg-[#3A3B3C] rounded-lg">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-[#4E4F50]">{contact.icon}</div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{contact.title}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{contact.value}</p>
                    </div>
                  </div>
                ))}
                <div className="pt-2 border-t dark:border-gray-700">
                  <Button size="sm" className="w-full" asChild>
                    <Link to="/messages">See All Contacts</Link>
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Not mobile */}
          <Button size="icon" variant="ghost" className="rounded-full hidden md:flex cursor-target">
            <MessageCircle className="w-5 h-5 text-text-primary" />
          </Button>

          <Link to="/profile">
            <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden border-2 border-gray-300 cursor-target">
              <img src={profile.avatar} alt="Profile" className="h-full w-full object-cover" />
            </div>
          </Link>

          {/* Menu with Popover on mobile */}
          <Popover>
            <PopoverTrigger asChild>
              <Button size="icon" variant="ghost" className="md:hidden rounded-full">
                <Menu className="w-5 h-5 text-text-primary" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64" align="end">
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-2 border-b dark:border-gray-700">
                  <h3 className="font-semibold text-sm">Menu</h3>
                </div>
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`flex items-center gap-3 p-3 rounded-lg ${isActive(item.path) ? 'bg-gray-100 dark:bg-[#3A3B3C] text-blue-500' : 'hover:bg-gray-100 dark:hover:bg-[#3A3B3C]'}`}
                  >
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${isActive(item.path) ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-gray-200 dark:bg-[#4E4F50]'}`}>
                      {item.icon}
                    </div>
                    <span className={`text-sm font-medium ${isActive(item.path) ? 'text-blue-500' : 'text-gray-800 dark:text-gray-200'}`}>{item.title}</span>
                  </Link>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;
