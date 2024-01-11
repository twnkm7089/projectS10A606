import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/scss/common.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.tsx';
import Mainpage from './pages/Mainpage.tsx';
import LoginPage from './pages/Loginpage.tsx';
import RegistPage from './pages/RegistPage.tsx';
import FindIdPage from './pages/FindIdPage.tsx';
import FindPwPage from './pages/FindPwPage.tsx';
import StudioListPage from './pages/StudioListPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Mainpage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/regist" element={<RegistPage />}></Route>
                <Route path="/findid" element={<FindIdPage />}></Route>
                <Route path="/findpw" element={<FindPwPage />}></Route>
                <Route path="/studiolist" element={<StudioListPage />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
