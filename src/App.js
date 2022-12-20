// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Dialogs from './components/dialogs/Dialogs';
import ProfileContainer from './components/profile/profileContainer';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import { LogInPage } from './login/LogInPage';
import Header from './components/header/header';
import { Users } from './components/Users/Users';
import { Provider, useDispatch, useSelector } from 'react-redux';
import spinner from './photo/spinner.svg'
import { useEffect, } from 'react';
import { initialiseAPP } from './redux/app-reducer';
import store from './redux/redux-store';
const App = (props) => {
  const init = useSelector(state => state.app.initialise)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialiseAPP())
  }, [])
  if (init === false) {
    return <img src={spinner} />
  }

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
const SamuraiJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}
export default SamuraiJSApp;
