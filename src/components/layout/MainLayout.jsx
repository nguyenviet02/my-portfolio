import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#F0F2F5] dark:bg-[#18191A]">
      <Header />
      <div className="flex container mx-auto pt-16">
        <Sidebar />
        <main className="flex-1 px-4 py-6">
          <Outlet />
        </main>
        <RightSidebar />
      </div>
    </div>
  );
};

export default MainLayout; 