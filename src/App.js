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
  // debugger
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar friendsData={props.state.navbar.friends} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile
              dispatch={props.dispatch}
              newPostText={props.state.profile.newPostText}
              postData={props.state.profile.postData}
            />}
            />
            <Route path='/dialogs' element={<Dialogs
              dialogsData={props.state.messages.dialogsData}
              messageData={props.state.messages.messageData}
              dispatch={props.dispatch}
              newMessageText={props.state.messages.newMessageText} />}
            />
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
