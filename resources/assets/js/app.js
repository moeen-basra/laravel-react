import React from "react"
import { render } from "react-dom"

import Routes from './routes/routes'

window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};

render(
    Routes,
    document.getElementById('app')
)
