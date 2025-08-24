import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import { useTheme } from "@/lib/useTheme";
import DotGrid from "@react-bits/Backgrounds/DotGrid/DotGrid";
import TargetCursor from "@react-bits/Animations/TargetCursor/TargetCursor";
import useMediaQuery from "@/hooks/useMediaQuery";

const MainLayout = () => {
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="min-h-screen bg-[#F0F2F5] dark:bg-[#18191A] relative">
      {/* Dot Grid Background - only visible in dark mode on larger screens */}
      {theme === "dark" && !isMobile && (
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
        
        {/* Content Container with responsive layout */}
        <div className="pt-14">
          <div className="flex w-full">
            {/* Left Sidebar - hidden on mobile and tablet */}
            <Sidebar />
            
            {/* Main Content Area */}
            <main className={`
              flex-1 w-full
              ${isMobile ? 'px-0 py-4' : 'px-4 py-6'}
              ${isTablet && !isMobile ? 'md:px-6' : ''}
              ${!isTablet ? 'lg:px-8' : ''}
            `}>
              <div className="w-full">
                <Outlet />
              </div>
            </main>
            
            {/* Right Sidebar - hidden on mobile and tablet */}
            <RightSidebar />
          </div>
        </div>
      </div>

      {/* Target Cursor - only on larger screens */}
      {!isMobile && <TargetCursor />}
    </div>
  );
};

export default MainLayout;
