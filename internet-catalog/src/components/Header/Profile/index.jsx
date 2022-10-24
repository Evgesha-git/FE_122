import React from "react";
import Logo from "../Logo";
import user from './img/user.svg';
import "./component.style.css";

const Profile = (props) => {

    const handlerLogOut = () => {
        props.setLogin(false);
        props.setUser('');
    }

    return (
        <React.Fragment>
            {props.login ? 
                <div className="login-badj">
                    <Logo
                        style={{
                            width: '50px', 
                            height: '50px', 
                            'border-radius': '50%',
                            border: '1px solid black',
                            overflow: 'hidden',
                        }}
                        src={user}
                    /> 
                    <p className="user-name">{props.user}</p>
                    <button className="log-out" onClick={handlerLogOut}>Logout</button>
                </div> :
                <button className="log-in" onClick={() => props.setLog(true)}>Log-in</button>
            }
        </React.Fragment>
    )
}

export default Profile;