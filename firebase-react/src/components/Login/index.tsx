import React, { useContext } from "react";
import { Context } from "../..";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login: React.FC = () => {
    const { auth } = useContext(Context);

    const login = async () => {
        const provider = new GoogleAuthProvider();
        const { user } = await signInWithPopup(auth, provider);
        console.log(user);

    }

    return (
        <div className="main">
            <button onClick={() => login()}>Войти с помощью Google</button>
        </div>
    )
}

export default Login;