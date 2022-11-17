import React, {FormEvent, useState} from "react";
import {auth} from "../../utils/configDb";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import {useAction} from "../../hooks/useAction";
import {useTypeSelector} from "../../hooks/useTypeSelector";

const MainPage: React.FC = () => {
    const {setOrganize, getOrganize} = useAction();
    const {user, loading, success, error} = useTypeSelector((state) => state.tasks);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [userAuth, setUserAuth] = useState<any>();

    const login = async () => {
        const provider = new GoogleAuthProvider();
        const {user} = await signInWithPopup(auth, provider);

        setUserAuth(user);
    }

    const addTask = async (e: FormEvent) => {
        e.preventDefault();
        const task = {
            id: Date.now().toString(),
            title,
            description,
            date: new Date().toString(),
        }
        setOrganize(userAuth?.uid, task, userAuth.displayName)
    }

    return userAuth ? (
        <div>
            <form action="" onSubmit={addTask}>
                <input type="text" name="" id="" onChange={(e) => setTitle(e.target.value)} value={title}/>
                <textarea name="" id="" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                <button type="submit">Отправить</button>
            </form>
        </div>
    ) : (
        <button onClick={() => login()}>Войти через Google</button>
    )
}

export default MainPage;