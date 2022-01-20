// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/shared/Layout';
import youtubeData from './data/youtubeData.json';
import Home from './pages/Home';
import Subscription from './pages/Subscription';
import Explore from './pages/Explore';
import Homework from './pages/Homework';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/explore" element={<Explore/>}></Route>
      <Route path="/subscription" element={<Subscription/>}></Route>
      <Route path="/homework" element={<Homework/>}></Route>
    </Routes>
  );
}

export default App;
