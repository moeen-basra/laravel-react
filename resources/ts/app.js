"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./bootstrap");
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const react_redux_1 = require("react-redux");
const config_1 = require("./store/config");
// import Routes from './routes'
// import { authCheck } from './modules/auth/store/actions'
// store.dispatch(authCheck())
const root = client_1.default.createRoot(document.getElementById('app'));
root.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(react_redux_1.Provider, { store: config_1.store },
        react_1.default.createElement("div", null, "Welcome Home"))));
