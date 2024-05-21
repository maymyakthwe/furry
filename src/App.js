import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import FrontPage from './Pages/FrontPage/FrontPage';
import Service from './Pages/ServicePage/Service';
import Footer from './Components/Footer/Footer';
import Adoption from './Components/Adoption/Adoption';
import AdoptionPet from './Components/AdoptionPet/AdoptionPet';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import User from './Components/User/User';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/services' element={<Service />} />
          <Route path='/services/adopt' element={<Adoption />} />
          <Route path='/services/adopt/:petId' element={<AdoptionPet />} />
          <Route path='/user' element={<User />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
