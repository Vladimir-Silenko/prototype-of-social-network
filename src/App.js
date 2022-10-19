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

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar friendsData={props.state.navbar.friends} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile UpdatePostText={props.UpdatePostText} newPostText={props.state.profile.newPostText} postData={props.state.profile.postData} AddPost={props.AddPost} />} />
            <Route path='/dialogs' element={<Dialogs dialogsData={props.state.messages.dialogsData} messageData={props.state.messages.messageData} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );

}
export default App;
