import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
// import ProfileContainer from './components/profile/profileContainer';
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
import styled from 'styled-components';
const Dialogs = React.lazy(() => import('./components/dialogs/Dialogs'))
const ProfileContainer = React.lazy(() => import('./components/profile/profileContainer'))

const App = (props) => {
  const init = useSelector(state => state.app.initialise)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialiseAPP())
  }, [])
  if (init === false) {
    return <img src={spinner} />
  }
  const Error = styled.div`
  color:lightgray;
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight:bold;
  font-size:50px;
  `
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Suspense fallback={<img src={spinner} />}>
          <Routes>

            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={<Users />}></Route>
            <Route path='/login' element={<LogInPage />}></Route>
            <Route path='*' element={<Error>404 NOT FOUND</Error>}></Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );

}
const SamuraiJSApp = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}
export default SamuraiJSApp;
