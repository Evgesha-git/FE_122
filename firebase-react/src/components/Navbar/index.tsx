import React, { useContext } from "react";
import { Context } from "../../index";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";

// @ts-ignore
import style from "./navbar.module.css";
import { LOGIN_ROUTE } from "../../utils/constant";

const Navbar: React.FC = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    console.log(user);



    return (
        <div className={style.navbar}>
            <div className={style.nav}>
                {user ?
                    <button
                        onClick={() => signOut(auth)}
                        className={style.button}
                    >Выйти</button> :
                    <button
                        onClick={() => navigate(LOGIN_ROUTE)}
                        className={style.button}
                    >Войти</button>
                }
            </div>
        </div>
    )
}

export default Navbar;