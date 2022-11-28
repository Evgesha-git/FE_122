import React, {FormEvent, useState} from "react";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useAction} from "../../hooks/useAction";
import {useNavigate} from "react-router";
import {routes} from "../../utils/routes";

const AddTasck: React.FC = () => {
    const {user: userAuth} = useTypeSelector(state => state.user);
    const {user} = useTypeSelector((state) => state.tasks);
    const {setOrganize, editOrganize} = useAction();
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const navigate = useNavigate();


    const addTask = async (e: FormEvent) => {
            e.preventDefault();
            const task = {
                id: Date.now().toString(),
                title,
                description,
                date: new Date().toString(),
            }
            if (user.tasks?.length ?? false){
                editOrganize(userAuth?.uid, task);
            }else {
                setOrganize(userAuth?.uid, task, userAuth?.email);
            }
            navigate(routes.tasckList);
        }

    return (
        <div>
            <form onSubmit={addTask}>
                <input type="text" onChange={(e) => setTitle(e.target.value)}/>
                <textarea onChange={(e) => setDescription(e.target.value)}></textarea>
                <button type={'submit'}>Добавть задачу</button>
            </form>
        </div>
    )
}

export default AddTasck;