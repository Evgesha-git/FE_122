import React from "react";

export default class Logo extends React.Component{
    constructor(props){
        super()
    }

    render() {
        return (
            <div style={this.props.style}>
                <img src={this.props.src} alt="" />
            </div>
        )
    }
}