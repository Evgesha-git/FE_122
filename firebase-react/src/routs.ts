import { LOGIN_ROUTE, CHAT_ROUTE } from "./utils/constant";
import Login from "./components/Login";
import Chat from "./components/Chat";
import { TRoutes } from "./types/tRoutes";

export const publickRoutes: TRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
];

export const privateRoutes: TRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat,
    },
]