import React, { useContext, useEffect } from "react";
import { LogContext, LoginContext, UserContext } from "../../../App";
import Logo from "../Logo";
import userImg from './img/user.svg';
import style from "./Profile.module.css";


const Profile = () => {
    const { login, setLogin } = useContext(LoginContext);
    const { user, setUser} = useContext(UserContext);
    const { setLog } = useContext(LogContext);

    const handlerLogOut = () => {
        setLogin(false);
        setUser('');
    }

    useEffect(() => {
        console.log('Компонент отрисован');

        return () => {
            console.log('Компонент удалён');
        }
    }, [login]);

    return (
        <React.Fragment>
            {login ? 
                <div className={style.loginBadj}>
                    <Logo
                        style={{
                            width: '50px', 
                            height: '50px', 
                            borderRadius: '50%',
                            border: '1px solid black',
                            overflow: 'hidden',
                        }}
                        src={userImg}
                    /> 
                    <p className={style.userName}>{user}</p>
                    <button className={`${style.button} ${style.logOut}`} onClick={handlerLogOut}>Logout</button>
                </div> :
                <button className={style.button} onClick={() => setLog(true)}>Log-in</button>
            }
        </React.Fragment>
    )
}

export default Profile;