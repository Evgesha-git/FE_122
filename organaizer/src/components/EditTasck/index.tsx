import React, {useEffect, useState} from "react";
import {PEditComponent} from "./type";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {ITask} from "../../type/organizeType";
import {databese} from "../../utils/configDb";
import {update, ref} from "firebase/database";
import {useAction} from "../../hooks/useAction";

const EditTask: PEditComponent = (props) => {
    const {getOrganize} = useAction()
    const {id, closeEdit, edit} = props;
    const {user} = useTypeSelector(state => state.tasks);
    const [task, setTask] = useState<ITask | undefined>({
        id: '',
        description: '',
        title: '',
        date: ''
    });
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const updateTask = () => {
        const data = {
            ...user,
            tasks: user.tasks ? user?.tasks.map(task => {
                if(task.id === id){
                    return {
                        ...task,
                        title,
                        description : desc
                    }
                }else{
                    return task
                }
            }) : null,
        };
        const updates = {};
        // @ts-ignore
        updates[`organize/${user.id}`] = data;
        update(ref(databese), updates);
        getOrganize(user?.id);
        closeEdit({...edit, call: !edit.call});
    }



    useEffect(() => {
        if (user.tasks){
            setTask(user.tasks.find(task => task.id === id))
        }
        if (task){
            setTitle(task.title);
            setDesc(task.description);
        }

    }, [task, user]);

    return (
        <div>
            <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                name="description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
            <button onClick={updateTask}>add</button>
            <button onClick={() => closeEdit({...edit, call: !edit.call})}>Close</button>
        </div>
    )
}

export default EditTask;