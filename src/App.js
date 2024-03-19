import './App.css';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import Athletes from './components/athletes/Athletes';
import Ticket from './components/Tickets/Ticket';
import Notfound from './components/Notfound';
import Login from './components/login/Login'
import Navbar from './components/navbar/Navbar';
import UfcDatatwo from './components/home/UfcDatatwo';
import Footer from './components/footer/Footer';
import Ranking from './components/Ranking/ranking';
import CardHolder from './components/Event/CardHolder';
import Howtowatch from './components/watch/Howtowatch';
import SignUp from './components/Signup/SignUp';
import PaymentPage from './components/watch/paiment';
import ProfileAthletes from './components/athletes/ProfileAthletes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ranking" element={<Ranking />} />
        <Route path="/PaymentPage" element={<PaymentPage />} />
        <Route path="/Athletes" element={<Athletes />} />
        <Route path='/CardHolder' element={<CardHolder />} />
        <Route path="/Ticket/:id" element={<Ticket />} />
        <Route path="/Howtowatch" element={<Howtowatch />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="*" element={<Notfound />} />
        <Route path='/ProfileAthletes' element={<ProfileAthletes />} />
        <Route path='/UfcDatatwo' element={<UfcDatatwo />}></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
