import React, { Component } from 'react';
import './index.css';

class ReactCheese extends Component {
    constructor(props) {
    super(props)
}

render() {
    let additionalClass=this.props.size;
    additionalClass+=(this.props.musty) ? ' musty' : '';
    additionalClass+=(this.props.bite) ? ' bite' : '';
    additionalClass+=(this.props.angry) ? ' angryCheese' : '';
   
    return (
    <div className={"wrapper " + additionalClass}>
    <ul className="inner">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li className="switch"></li>
        <li className="switch"></li>
        <li className="switch"></li>
        <li className="switch"></li>
        <li className="switch"></li>
        <li className="switch"></li>
        <li className="switch"></li>
        <li className="switch"></li>
        <li className="switch"></li>
    </ul>
    {
        this.props.inLove ?  
        (
        <div className="love">
            <span className="eyes">
            <span className="heart-eye">
                <span className="heart"></span>
            </span>
            <span className="heart-eye">
                <span className="heart"></span>
            </span>
            </span>
            <span className="mouth tounge">
            </span>
        </div>) : ""
    }
    {
        this.props.angry ?  
        (
        <div className="angry">
            <span className="eyes">
            <span className="eye"></span>
            <span className="eye"></span>
            </span>
            <span className="mouth">
            </span>
        </div>) : ""
    }
    </div>
    )
    }
}
export default ReactCheese;