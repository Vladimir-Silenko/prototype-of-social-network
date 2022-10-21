// import State, { Subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { AddPost, UpdatePostText, AddMessage, UpdateMessageText, } from './redux/state';
import Store from "./redux/state";
const root = ReactDOM.createRoot(document.getElementById('root'));
const RenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App
                // AddMessage={AddMessage}
                // UpdatePostText={UpdatePostText}
                state={Store.State}
                store={Store}
            // AddPost={AddPost}
            // UpdateMessageText={UpdateMessageText} 
            />
        </React.StrictMode>
    );
}
reportWebVitals();
Store.Subscribe(RenderEntireTree)
RenderEntireTree(Store.State)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// export { dialogsData }
// export { messageData }
// export { postData }
