import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AddPost, UpdatePostText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
const RenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App UpdatePostText={UpdatePostText} state={state} AddPost={AddPost} />
    </React.StrictMode>
  );
}
reportWebVitals();
export default RenderEntireTree
