import { useState } from "react";
import "./Rate.css";

export default function Rate(props) {
        const buttons =[1, 2, 3, 4, 5];
    return (
    
    <div className="container" id="container">
        <div className="star">
            <img src="./images/icon-star.svg" alt="star"/>
        </div>
        <h1>
            How did we do?
        </h1>
        <p>
            Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!
        </p>
        <div className="butt">
            {buttons.map((item) => (
                <button 
                onClick={ () => props.setRate(item) } 
                key={item}
                className={item== props.rate ? "active": {}}>{item}</button>
            ))}
        </div>
        <button className="submit" id="button" type="submit" onClick={() => {if(props.rate){props.setSubmit(true)}}}> SUBMIT</button>

    </div>
        )
};