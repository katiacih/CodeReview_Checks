import { createBrowserRouter } from "react-router-dom";
import Home from "../presentation/pages/home/home";
import LetsParty from '../presentation/pages/landings-page/lets-party/LetsParty';
import ErrorNotFound from "../presentation/pages/errors/error-not-found";
import React from "react";

export const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorNotFound />
    },
    {
        path: '/lets-party',
        element: <LetsParty />,
        errorElement: <ErrorNotFound />

    }
])

