
import "./InsertEmailStyle.css";
import Home_Phone from "./img/Home_Phone.png";
import ImageCheck from './img/emailCheck.svg'

export function InsertEmailTwo(){
    return(
        <>
           <div className="big-container">
        <div className="first-selection">
         <img className="temp-img" alt="homephonimage" src={Home_Phone}></img>
        </div>
        <form className="second-selection secondSelection2">
            <div className="flexbig alignCenter">
                <h1 className="emailTitle">EMAIL VERIFICATION</h1>
               <h3>Congratulations !</h3>
               <img className="imageCheck" src={ImageCheck}></img>
               <p>Your Miratti VIP profile has been activated!
Please Sign In to see more features.</p>
<button className="signInButton">SIGN IN</button>
               
</div>
          </form>
      </div></>
    )
}