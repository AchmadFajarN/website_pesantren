import { Route, Routes } from "react-router-dom";
import "./Style/style.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import Pendaftaran from "./Pages/Pendaftaran";
import Profile from "./Pages/Profile";
import LoginPage from "./Pages/LoginPage";
import Register from "./Pages/Register";
import FormDaftar from "./Pages/FormDaftar";
import PrivateRoute from "./Components/PrivateRoute";

const App = () => {
  
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pendaftaran" element={<Pendaftaran />} />
          {/* <Route path="/blog" element={<h1>blog</h1>} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/pendaftaran/login" element={<LoginPage />}/>
          <Route path="/pendaftaran/register" element={<Register />} />
          <Route path="/pendaftaran/me" element={<PrivateRoute><FormDaftar /></PrivateRoute>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
export default App;
