import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import {store} from "./store/store-redux";
import App from "./App";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();





