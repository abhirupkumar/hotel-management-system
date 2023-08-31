import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Page from './pages/HomePage';
import Hotels from './pages/HotelsPage';
import Rooms from './pages/RoomsPage';
import Footer from './components/Footer';
import Hotel from './pages/HotelPage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Page />} />
          <Route exact path="/hotels" element={<Hotels />} />
          <Route exact path="/rooms" element={<Rooms />} />
          <Route exact path="/hotel/:slug" element={<Hotel />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
