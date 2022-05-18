import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavbarComponent from './components/Navbar/NavbarComponent';
import BecasForm from './components/becas/BecasForm/BecasForm';
import BecasPopulares from './components/becas/BecasPopulares/BecasPopulares';
import BecasMasInfo from './components/becas/BecasMasInfo/BecasMasInfo';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/BecasForm" element={<BecasForm />} />
        <Route path="/updateBeca/:id" element={<BecasForm />} />
        <Route path="/BecasPopulares/" element={<BecasPopulares />} />
        <Route path="/BecasMasInfo/:id" element={<BecasMasInfo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
