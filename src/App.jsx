import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import Home from '@/pages/Home';
import MyProfile from '@/pages/MyProfile';
import Messages from '@/pages/Messages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<MyProfile />} />
        <Route path="messages" element={<Messages />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

