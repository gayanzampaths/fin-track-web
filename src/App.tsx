import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';

function App() {
  return (
    <React.Fragment>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={< DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
