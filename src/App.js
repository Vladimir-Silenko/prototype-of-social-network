// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Dialogs from './components/dialogs/Dialogs';
import Profile from './components/profile/profile';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import myContext from './createContext';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from './redux/redux-store';
const App = (props) => {
  // debugger
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/dialogs' element={<Dialogs />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>

    </div>
  );

}
export default App;
