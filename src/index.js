import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/home';
import Error from './pages/error/error';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';


const root = ReactDOM.createRoot(document.getElementById('wpem'));
root.render(
<Router>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="home" element={<Home />} />
    <Route path='*' element={<Error />} />
    <Route path='login' element={<Login />} />
    <Route path='dashboard' element={<Dashboard />} />
  </Routes>
</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
