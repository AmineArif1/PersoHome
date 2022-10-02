import "./SignUp.css";
import Home_Phone from "./img/Home_Phone.png";
import SelectBox from "./SelectBox";
import CodePaye from "./CodePaye";
export function SignUp() {
  return (
    <>
      <div className="big-container">
        <div className="first-selection">
         <img className="temp-img" src={Home_Phone}></img>
        </div>
        <form className="second-selection">
            
          <div className="">
            <h1 className="titleSignup">SIGN UP</h1>
          </div>
          <div className="form-style">
            <input type="text" className="" placeholder="Prénom*"></input>
            <input  type= "text"className="" placeholder="Nom*"></input>
          </div>
          <div>
            <input
                type="text"
              className="large-input"
              placeholder="Adresse Email* "
            ></input>
          </div>
          <div className="flex ">
          
            <input type="text" className="firstson" placeholder="Mot de Passe*"></input>
            <CodePaye className="secondson"/>
        
          </div>
          <div className="container-fluid pl-0 pr-0 ">
            <label className="label" for="gender">Sexe*</label>
            <div id="gender" className="row">
              <div className="col-3 gend">
                {" "}
                <p className="gendername">Homme</p>
                <input className="circle_input" type="radio"
               name="agree" 
               value="yes"></input>
              </div>
              <div className="col-3 gend">
                <p className="gendername">Femme</p>
                <input className="circle_input" type="radio"
               name="agree" 
               value="yes"></input>
              </div>
              <div className="col-3 gend">
                <p className="gendername">Autre</p>
                <input className="circle_input" type="radio"
               name="agree" 
               value="yes"></input>
              </div>

            </div>
          </div>
          <div className="container-fluid pl-0 pr-0">
            <label className="label" for="gender">Date Naissance*</label>
            <div id="gender" className="row">
                <SelectBox contenue="year"/>
          
                <SelectBox contenue="month"/>

                <SelectBox contenue='day'/>

              
            </div>

          </div>

          <div>
            <p className="conditions">En cliquant sur S'inscrire, vous acceptez nos conditions, notre politique de confidentialité et notre politique en matière de cookies. Vous pouvez recevoir des notifications par SMS de notre part et pouvez vous désinscrire à tout moment.</p>
          </div>
          <div><p className="champObl">champs obligatoires</p></div>
            <div className='center_button'>
          <button className="signupButton">SIGN UP</button>

          <p className="connectezvous">Vous avez deja un compte? <a>Connectez vous!</a>

</p>
</div>
        </form>
      </div>
    </>
  );
}
