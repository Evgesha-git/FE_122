import React, {useEffect} from "react";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useAction} from "../../hooks/useAction";
import {Link} from "react-router-dom";
import {routes} from "../../utils/routes";
import {useNavigate} from "react-router";

const UserPage: React.FC = () => {
    const {user: userAuth} = useTypeSelector(state => state.user);
    const {user, loading, success, error} = useTypeSelector(state => state.tasks);
    const {getOrganize, logOutUser, clearOrganize} =useAction();
    const navigate = useNavigate();

    const logOut = () => {
        logOutUser();
        clearOrganize();
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
                <div>
                    <div>{task.title}</div>
                    <div>{task.description}</div>
                </div>
            )}
            <Link to={routes.addTasck}>Добавить новую задачу</Link>
        </div>
    )
}

export default UserPage