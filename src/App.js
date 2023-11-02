import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Page from './pages/HomePage';
import Hotels from './pages/HotelsPage';
import Hotel from './pages/HotelPage';
import Rooms from './pages/RoomsPage';
import Footer from './components/Footer';
import Loader from './components/Loader';
import HotelRoomsPage from './pages/HotelRoomsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import { useUser } from '@clerk/clerk-react';
import FeedbackPage from './pages/FeedbackPage';
import AddRoomsPage from './pages/AddRoomsPage';
import PaymentPage from './pages/PaymentPage';
import { useEffect } from 'react';
import BookingsPage from './pages/BookingsPage';

function App() {

  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          exact
          path="/sign-in"
          element={<SignInPage />}
        />
        <Route
          exact
          path="/sign-up"
          element={<SignUpPage />}
        />
        <Route exact path="/" element={<Page />} />
        <Route exact path="/feedback" element={<FeedbackPage />} />
        <Route exact path="/payment" element={<PaymentPage />} />
        <Route exact path="/hotels" element={<Hotels />} />
        <Route exact path="/rooms" element={<Rooms />} />
        <Route exact path="/admin/addrooms" element={<AddRoomsPage />} />
        <Route exact path="/hotel/:slug" element={<Hotel />} />
        <Route exact path="/hotel/:slug/rooms-and-suites" element={<HotelRoomsPage />} />
        <Route exact path="/bookings/:id" element={<BookingsPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
