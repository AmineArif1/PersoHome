import "./InsertEmailStyle.css";
import Home_Phone from "./img/Home_Phone.png";


export function InsertEmail() {
  return (
    <>
      <div className="big-container">
        <div className="first-selection">
         <img className="temp-img" alt="homephonimage" src={Home_Phone}></img>
        </div>
        <form className="second-selection secondSelection2">
            <div className="flexbig">
                <h1 className="emailTitle">EMAIL VERIFICATION</h1>
                <p>Hey Ilias, you’re almost ready to start your journey with Miratti.
Simply enter the veification code we sent to +212 706422915</p>
<div className="flexNoGap align-center gap1">
    <input className="WhiteBg" type="text"></input>
    <div className="flexNoGap gap2">
    <p className="resendBasis colorBlue">Resend Code</p>
    <p>0:33</p>
    </div>
</div>
<div>
<button className="buttonEmail">Verify</button>
</div>

<div className="flex3">
<p>Chose another method?</p>
<div className="flex4">
        <div className="">
            <span></span>
            <p className="colorBlue">Recieve a call</p>
        </div>
        <div className="">
            <span></span>
            <p className="colorBlue">Recieve an E-mail</p>
        </div>
        </div>
    </div>
    
</div>
          </form>
      </div>
    </>
  );
}
