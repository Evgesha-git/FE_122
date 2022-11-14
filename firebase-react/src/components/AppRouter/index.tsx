import React, { useContext } from "react";
import { Routes, Route } from "react-router";
import { privateRoutes, publickRoutes } from "../../routs";
import Chat from "../Chat";
import Login from "../Login";
import { Context } from "../..";
import { useAuthState } from "react-firebase-hooks/auth"

const AppRouter: React.FC = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    return user ? (
        <Routes>
            {privateRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} />
            )}
            <Route path="*" element={<Chat />} />
        </Routes>
    ) : (
        <Routes>
            {publickRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} />
            )}
            <Route path="*" element={<Login />} />
        </Routes>
    )
}

export default AppRouter;