import { StoreProvider, useStore } from './context/StoreContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MusicPage } from './pages/MusicPage';
import { SchedulePage } from './pages/SchedulePage';
import { ShopPage } from './pages/ShopPage';

function AppShell() {
  const { currentPage } = useStore();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'music' && <MusicPage />}
        {currentPage === 'schedule' && <SchedulePage />}
        {currentPage === 'shop' && <ShopPage />}
      </div>
      <Footer />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <AppShell />
    </StoreProvider>
  );
}
