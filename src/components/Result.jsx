import "./Result.css";
export default function Result (props) {
    return (
        
    <div className="container thank-you" id="thank">
        <div> 
            <img src="./images/illustration-thank-you.svg" alt="Thanks"/>
        </div>
        <div className="selected">
            You selected {props.rate} out of 5
        </div>
        <h1>
             Thank you!
        </h1>
        <p>
            We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!
        </p>
    </div>
        
    )
}