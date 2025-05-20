import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Style/style.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import Pendaftaran from "./Pages/Pendaftaran";
import Profile from "./Pages/Profile";
import { useState } from "react";
import LoginPage from "./Pages/LoginPage";
import Register from "./Pages/Register";

const App = () => {
  const [isAuth, setIsAuth] = useState(null);
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pendaftaran" element={<Pendaftaran />} />
          <Route path="/blog" element={<h1>blog</h1>} />
          <Route path="/profile" element={<Profile />} />
          {
            isAuth === null && 
            <>
              <Route path="/pendaftaran/*" element={<LoginPage />} />
              <Route path="/pendaftaran/register" element={<Register />} />
            </>
          }
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
export default App;
