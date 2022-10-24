import React from "react";
import "./component.style.css";

export default class LogIn extends React.Component {
    constructor(props) {
        super();
        this.state = {
            user: '',
        };
        this.handlerModal = this.handlerModal.bind(this);
    }

    handleInput(e){
        let value = e.target.value;
        this.setState({user: value});
        console.log(this.state.user);
    }

    handleForm(e){
        e.preventDefault();
        if (this.state.user.length > 3){
            this.props.setUser(this.state.user);
            this.props.setLogin(true);
            this.props.setLog(false);
        }
    }

    handlerModal(e){
        if (!e.target.classList.contains('log-in-form')) return;
        this.props.setLog(false);
    }

    render() {
        return (
            <div className="log-in-form" onClick={this.handlerModal}>
                <form className="form" onSubmit={(e) => this.handleForm(e)}>
                    <input type="text" name="" id="" className="user" onInput={(e) => this.handleInput(e)}/>
                    <button type="submit">Log-in</button>
                </form>
            </div>
        )
    }
}