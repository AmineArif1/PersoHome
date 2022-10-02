import "./ExtraStyle.css";
import whiteSelector from "./img/whileIcon.svg";
import Header from "F:\\Project_Home\\client\\src\\user\\authen\\ExtraInfo\\Header.js";
import whilePickle from './img/whileIcon.svg';
import checkmark from './img/checkmark.svg';
import imgtest from './img/profilePreviw.jpg';
import cover from './img/cover.jpg'
import {Routes, Route, useNavigate} from 'react-router-dom';


import thirtypercent from './img/30percent.svg'
export function ExtraInfoFour() {
  const navigate = useNavigate();

  const navigateMainPage = () => {
    // 👇️ navigate to /contacts
    navigate('/Main');
  };
  const navigateToThree= () => {
    // 👇️ navigate to /contacts
    navigate('/ExtraInfoThree');
  };
  return (
    <div className="thisBody">
      <Header />
      <div className="flexthis takeall">
      <div className="leftPage">
        <div className="carre">
          <p>Complete your profile</p>
          <img src={thirtypercent}></img>
        </div>
        
        <ul>
          <li><h1><img src={checkmark}></img>Information Personnel </h1><p>Completer les information Personnel</p></li>
       
          <li><h1><img src={checkmark}></img>Description du logement</h1><p>Complete personal informations</p></li>
    
          <li ><h1><img src={checkmark}></img>information famille</h1><p>Complete personal informations</p></li>
    
          <li className="draw"><h1>Profile final</h1><p>Complete personal informations</p></li>
        </ul>
      </div>
      <div className="rightPage">

        <div className="flexColumn"><h1>Votre Profile Final</h1><div className="line"></div><p>Let’s Fill your Personal Informations and
Professional informaions</p></div>
{/* <div className="form">
 <label className="label">Numero Telephone</label> <div className="flex"><input type="text" placeholder="Portable"></input><input type="text" placeholder="Fixe"></input></div>
<label className="label" >Profession</label><input type="text" placeholder="Professeur , Ingenieurs .."></input >
<div><label className="label">Statue</label></div><div className="flex"><select><option>Marié</option><option>Celibataire</option></select><input type="text" placeholder="Avec?"></input></div>
<label className="label" >Code Postale</label><input type="text" placeholder="Exp. 2204"></input >
</div> */}
<div className="ProfilePreview">
    <img className="cover" src={cover}></img>
<div className="flex fcolumn"><img className="profileImage" width="140" src={imgtest}></img><h1>El Arif Amine</h1></div>
<div className="container-fluid selectthis">
<div className="row">
        <div className="col-6">Email : elarifamine1@gmail.com</div>
        <div className="col-6">Tel : 212678964596 </div>

    </div>
    <div className="row">
        <div className="col-6">Age : 39 ans</div>
        <div className="col-6">Statue: Marié</div>
    </div>
    <div className="row">
        <div className="col-6">Profession : Medecin</div>
        <div className="col-6">Nombre Enfant : 3 </div>

    </div>
    <div className="row">
        <div className="col-6">Pays : Paris</div>
        <div className="col-6">Code Postale : 9887 </div>

    </div>

</div>
</div>

<div>
< button onClick={navigateMainPage} className="precedent">terminer</button>
<button onClick={navigateToThree} className="next">précédent</button>
</div>
      </div>
      </div>
    </div>
  );
}
