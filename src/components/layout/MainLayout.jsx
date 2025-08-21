import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import { useTheme } from '@/lib/useTheme';
import DotGrid from '@react-bits/Backgrounds/DotGrid/DotGrid';

const MainLayout = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-[#F0F2F5] dark:bg-[#18191A] relative">
      {/* Dot Grid Background - only visible in dark mode */}
      {theme === 'dark' && (
        <div className="fixed inset-0 z-0">
          <DotGrid
            dotSize={2}
            gap={24}
            baseColor="#374151"
            activeColor="#60A5FA"
            proximity={100}
            shockRadius={150}
            shockStrength={3}
            resistance={800}
            returnDuration={1.2}
            className="w-full h-full"
          />
        </div>
      )}
      
      {/* Main Content - positioned above the background */}
      <div className="relative z-10">
        <Header />
        <div className="flex container mx-auto pt-16">
          <Sidebar />
          <main className="flex-1 px-4 py-6">
            <Outlet />
          </main>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default MainLayout; 