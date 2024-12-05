import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RestaurantDetail from './pages/RestaurantDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/MobılIntro/Welcome';
import Intro from './components/MobılIntro/Intro';
import IntroVideo from './components/MobılIntro/IntroVideo';
import Login from './components/MobılIntro/Login';
import UserForm from './components/MobılIntro/UserForm';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/welcome' element={<Welcome />} />
                <Route path='/introduction' element={<Intro />} />
                <Route path='/introVideo' element={<IntroVideo />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<UserForm />} />
                <Route path='/' element={<><Navbar /> <Home /><Footer /></>} />
                <Route path="/restaurant/:id" element={<><Navbar /><RestaurantDetail /><Footer /></>} />

            </Routes>

        </div>
    );
}

export default App;
