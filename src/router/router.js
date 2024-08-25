import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Layout from "../layout/Layout";
import { obtenerPersonajes } from "../api/obtenerPersonajes";
import CardPersonaje from "../pages/CardPersonaje";
import { personajeIndividual } from "../api/personajeIndividual";

 export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />

            },
            {
                path: '/contact',
                element: <Contact />,
                loader: obtenerPersonajes,
            },
            {
                path: '/contact/:id',
                element: <CardPersonaje />,
                loader: personajeIndividual
            }
        ]
    }])