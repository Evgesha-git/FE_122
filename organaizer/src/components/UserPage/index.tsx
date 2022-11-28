import React, {useEffect, useState} from "react";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useAction} from "../../hooks/useAction";
import {Link} from "react-router-dom";
import {routes} from "../../utils/routes";
import {useNavigate} from "react-router";
import EditTask from "../EditTasck";
import {ref, update} from "firebase/database";
import {databese} from "../../utils/configDb";

const UserPage: React.FC = () => {
    const {user: userAuth} = useTypeSelector(state => state.user);
    const {user, success} = useTypeSelector(state => state.tasks);
    const {getOrganize, logOutUser, clearOrganize} =useAction();
    const navigate = useNavigate();
    const [edit, setEdit] = useState({
        call: false,
        id: ''
    });

    const logOut = () => {
        logOutUser();
        clearOrganize();
    }

    const removeTask = (id: string) => {
        const data = {
            ...user,
            tasks: user.tasks ? user?.tasks.filter(task => task.id !== id) : null,
        };
        const updates = {};
        // @ts-ignore
        updates[`organize/${user.id}`] = data;
        update(ref(databese), updates);
        getOrganize(user?.id);
    }

    useEffect(() => {
        getOrganize(userAuth?.uid);
        if (!userAuth){
            navigate(routes.main);
        }
    }, [userAuth, success]);


    return (
        <div>
            <button onClick={logOut}>Log Out</button>
            {userAuth?.email}
            {user.tasks?.map(task =>
                <div key={task.id}>
                    <div>{task.title}</div>
                    <div>{task.description}</div>
                    <button className="edit" onClick={() => setEdit({...edit, call: !edit.call, id: task.id})}>Редактировать</button>
                    <button className={'remove'} onClick={() => removeTask(task.id)}>Удальть задачу</button>
                </div>
            )}
            <Link to={routes.addTasck}>Добавить новую задачу</Link>
            <div className="edivComponent">
                {edit.call ? <EditTask id={edit.id} closeEdit={setEdit} edit={edit}/> : null}
            </div>
        </div>
    )
}

export default UserPage