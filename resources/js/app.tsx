import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from './store/config'
import Routes from './routes'

import { authCheck } from './modules/auth/store/actions'

store.dispatch(authCheck())

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Routes />
        </Provider>
    </React.StrictMode>
);