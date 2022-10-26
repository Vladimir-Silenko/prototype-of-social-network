import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from "./redux/redux-store";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
const root = ReactDOM.createRoot(document.getElementById('root'));
const RenderEntireTree = (State) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App
                    // state={State}
                    // store={store}
                    // dispatch={store.dispatch.bind(store)}
                    />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}
reportWebVitals();
RenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    RenderEntireTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// export { dialogsData }
// export { messageData }
// export { postData }
