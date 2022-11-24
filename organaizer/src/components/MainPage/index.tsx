import React, {FormEvent, useEffect, useState} from "react";
import {auth} from "../../utils/configDb";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import {useAction} from "../../hooks/useAction";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useNavigate} from "react-router";
import {routes} from "../../utils/routes";

const MainPage: React.FC = () => {
    const {logInWithGoogle, loginWithEmail, regiterUserEmail} = useAction();
    const {user, loading, error} = useTypeSelector((state) => state.user);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [form, setForm] = useState<boolean>(true);
    const navigate = useNavigate();


    const loginGoogle = async (e: FormEvent) => {
        e.preventDefault();
        logInWithGoogle();
    }

    const loginEmail = async (e: FormEvent) => {
        e.preventDefault();
        loginWithEmail(email, password);
    }

    const registerEmail = async (e: FormEvent) => {
        e.preventDefault();
        regiterUserEmail(email, password);
    }

    useEffect(() => {
        if(user) {
            navigate(routes.tasckList);
        }
    }, [user]);

    // const addTask = async (e: FormEvent) => {
    //     e.preventDefault();
    //     const task = {
    //         id: Date.now().toString(),
    //         title,
    //         description,
    //         date: new Date().toString(),
    //     }
    //     setOrganize(userAuth?.uid, task, userAuth.displayName)
    // }

    return form ? (
        <div className={'container'}>
            <form onSubmit={loginEmail}>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder={'Enter email'}
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder={'Enter password'}
                />
                <button onClick={loginGoogle}>Войти через google</button>
                <button type="submit">Войти</button>
            </form>
            <button onClick={() => setForm(!form)}>Регистрация</button>
        </div>
    ) : (
        <div className={'container'}>
            <form onSubmit={registerEmail}>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder={'Enter email'}
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder={'Enter password'}
                />
                <button type="submit">Зарегистрироваться</button>
            </form>
            <button onClick={() => setForm(!form)}>Авторизация</button>
        </div>
    )
}

export default MainPage;