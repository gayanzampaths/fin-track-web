import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import NotFoundPage from './pages/NotFoundPage';
import AuthPage from './pages/Auth';
import { AuthProvider, useAuthContext } from '@asgardeo/auth-react';
import { default as authConfig } from "./config.json";
import LoadingPage from './pages/Loading';

const RequireAuth = ({ children }: { children: React.ReactNode }) => {

  const { state } = useAuthContext();

  console.log( "In App root." )
  console.log(state);

  if (!state.isAuthenticated) {
    console.log(state);
    return <Navigate to="/auth" replace />;
  }

  return React.isValidElement(children) ? children : <React.Fragment> {children} </React.Fragment>;
};

function App() {

  return (
    <React.Fragment>

      <AuthProvider config={authConfig}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<RequireAuth> <DashboardPage /></RequireAuth>} />
            <Route path='/dashboard' element={<RequireAuth> <DashboardPage /></RequireAuth>} />

            <Route path='/auth' element={<AuthPage />} />
            <Route path='*' element={< NotFoundPage />} />
            <Route path='/loading-app' element={<LoadingPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
