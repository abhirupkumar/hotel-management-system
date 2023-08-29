import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Page from './pages/page';
import Hotels from './pages/hotels';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Page />} />
          <Route exact path="/hotels" element={<Hotels />} />
        </Routes>

      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
