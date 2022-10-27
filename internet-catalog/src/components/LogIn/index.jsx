import React, { useContext, useRef, useState } from "react";
import style from "./Component.module.scss"; //[name].module.css
import { LogContext, LoginContext, UserContext } from "../../App";
import { ReactComponent as Done } from './img/done.svg';
import { ReactComponent as Error } from "./img/err.svg"


// export default class LogIn extends React.Component {
//     constructor(props) {
//         super();
//         this.state = {
//             user: '',
//         };
//         this.handlerModal = this.handlerModal.bind(this);
//     }

//     handleInput(e) {
//         let value = e.target.value;
//         this.setState({ user: value });
//         console.log(this.state.user);
//     }

//     handleForm(e) {
//         e.preventDefault();
//         if (this.state.user.length > 3) {
//             this.props.setUser(this.state.user);
//             this.props.setLogin(true);
//             this.props.setLog(false);
//         }
//     }

//     handlerModal(e) {
//         if (!e.target.classList.contains('log-in-form')) return;
//         this.props.setLog(false);
//     }

//     componentDidMount() {
//         console.log('Component rendered');
//     }

//     componentWillUnmount() {
//         console.log('Component deleted');
//     }

//     componentDidUpdate() {
//         console.log('Component update');
//     }

//     render() {
//         return (
//             <div className="log-in-form" onClick={this.handlerModal}>
//                 <form className="form" onSubmit={(e) => this.handleForm(e)}>
//                     <input type="text" name="" id="" className="user" onInput={(e) => this.handleInput(e)} />
//                     <button type="submit">Log-in</button>
//                 </form>
//             </div>
//         )
//     }
// }

const LogIn = () => {
    const { setLog } = useContext(LogContext); // {log, setLog}
    const { setLogin } = useContext(LoginContext);
    const { setUser } = useContext(UserContext);
    const userName = useRef(null);
    const password = useRef(null);
    const logInContainer = useRef(null);
    const [name, setName] = useState({ validated: false, value: '' });
    const [pass, setPass] = useState({ validated: false, value: '' });

    const regUser = /[A-Za-z]{4}/g;
    const passReg = /[A-Za-z0-9]{5}/g;

    const validate = (e) => {
        if (e.target.type === 'text') {
            setName({ validated: regUser.test(e.target.value), value: e.target.value })
        } else if (e.target.type === 'password') {
            setPass(({ validated: passReg.test(e.target.value), value: e.target.value }))
        }
        console.log(e.target.type);
    }

    const handleForm = (e) => {
        e.preventDefault();
        console.log(userName);
        console.log(password);
        if (password.current.value.length > 3 &&
            userName.current.value.length > 5) {
            setUser(userName.current.value);
            setLogin(true);
            setLog(false);
        }
    }

    const handlerModal = (e) => {
        if (e.target !== logInContainer.current) return;
        setLog(false);
    }

    return (
        <div ref={logInContainer} className={style["log-in-form"]} onClick={handlerModal}>
            <form className={style.form} onSubmit={(e) => handleForm(e)}>
                <div className={style.input}>
                    <input onInput={validate} type="text" ref={userName} name="" id="" className="user" value={name.value} />
                    {name.validated ?
                        <Done className={style.done} /> :
                        <Error className={style.error}/>
                    }
                </div>
                <div className={style.input}>
                    <input onInput={validate} type="password" ref={password} name="" id="" className="password" value={pass.value} />
                    {pass.validated ?
                        <Done className={style.done} /> :
                        <Error className={style.error}/>
                    }
                </div>
                <button className={style.button} type="submit">Log-in</button>
            </form>
        </div>
    )
}

export default LogIn;