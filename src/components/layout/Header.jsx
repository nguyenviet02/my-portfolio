import { Link } from 'react-router-dom';
import { Search, Home, MessageCircle, User, Bell, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-[#242526] shadow z-10 h-14">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Left section - Logo and Search */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-blue-500 text-2xl font-bold">
            P
          </Link>
          <div className="hidden md:flex relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <input
              className="bg-gray-100 dark:bg-[#3A3B3C] rounded-full pl-10 pr-4 py-2 focus:outline-none"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Center section - Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center">
            <Link
              to="/"
              className="px-6 py-2 mx-2 border-b-4 border-blue-500 text-blue-500"
            >
              <Home className="w-6 h-6" />
            </Link>
            <Link
              to="/messages"
              className="px-6 py-2 mx-2 border-b-4 border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#3A3B3C] rounded-lg"
            >
              <MessageCircle className="w-6 h-6" />
            </Link>
            <Link
              to="/profile"
              className="px-6 py-2 mx-2 border-b-4 border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#3A3B3C] rounded-lg"
            >
              <User className="w-6 h-6" />
            </Link>
          </div>
        </nav>

        {/* Right section - Profile */}
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="rounded-full">
            <Bell className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full">
            <MessageCircle className="w-5 h-5" />
          </Button>
          <Link to="/profile">
            <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden border-2 border-gray-300">
              <img
                src="/default.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </Link>
          <Button size="icon" variant="ghost" className="md:hidden rounded-full">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header; 