import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import appRouter from './router/AppRouter';
import { AppContextProvider } from './context/CategoryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={appRouter} />
    </AppContextProvider>
  </React.StrictMode>
);

