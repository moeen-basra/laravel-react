import '../css/app.css'; 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from './store'
import Router from './routes'

// import { authCheck } from './modules/auth/store/actions'

// store.dispatch(authCheck())

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router />
        </Provider>
    </React.StrictMode>
);