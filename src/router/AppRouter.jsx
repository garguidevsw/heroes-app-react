import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../auth";
import { MarvelPage, DcPage, SearchPage, HeroePage } from "../heroes";
import { HeroesApp } from "../HeroesApp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HeroesApp />,
        children: [
            {
                index: true,
                element: <MarvelPage />
            },
            {
                path: "/dc",
                element: <DcPage />
            },
            {
                path: "/search",
                element: <SearchPage />
            },
            {
                path: "/heroe/:id",
                element: <HeroePage />
            },
        ],
    },
    {
        path: "/login",
        element: <LoginPage />
    },
])