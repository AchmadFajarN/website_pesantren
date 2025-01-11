import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Blog from "../pages/Blog";
import Pendaftaran from "../pages/Pendaftaran";
import Profile from "../pages/Profile";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/blog',
        element: <Blog />
    },
    {
        path: '/pendaftaran',
        element: <Pendaftaran />
    },
    {
        path: '/profile',
        element: <Profile />
    }
])

export default Router