// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Dialogs from './components/dialogs/Dialogs';
import ProfileContainer from './components/profile/profileContainer';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import { LogInPage } from './login/LogInPage';
import Header from './components/header/headerContainer';
import { Users } from './components/Users/Users';
const App = (props) => {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path='/dialogs' element={<Dialogs />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/users' element={<Users />}></Route>
          <Route path='/login' element={<LogInPage />}></Route>
        </Routes>
      </div>

    </div>
  );

}
export default App;
