import "./ExtraStyle.css";
import whiteSelector from "./img/whileIcon.svg";
import Header from "F:\\Project_Home\\client\\src\\user\\authen\\ExtraInfo\\Header.js";
import whilePickle from './img/whileIcon.svg';
import thirtypercent from './img/30percent.svg'
import {Routes, Route, useNavigate} from 'react-router-dom';

export function ExtraInfoOne() {
  const navigate = useNavigate();

  const navigateToTwo = () => {
    // 👇️ navigate to /contacts
    navigate('/ExtraInfoTwo');
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
          <li className="draw"><div className="tarf1"></div><div className="tarf2"></div><h1>Information Personnel </h1><p>Completer les information Personnel</p></li>
       
          <li><h1>Description du logement</h1><p>Complete personal informations</p></li>
    
          <li><h1>information famille</h1><p>Complete personal informations</p></li>
    
          <li><h1>Profile final</h1><p>Complete personal informations</p></li>
        </ul>
      </div>
      <div className="rightPage">

        <div className="flexColumn"><h1>Terminer Les informations Personnel</h1><div className="line"></div><p>Let’s Fill your Personal Informations and
Professional informaions</p></div>
<div className="form">
 <label className="label">Numero Telephone</label> <div className="flex"><input type="text" placeholder="Portable"></input><input type="text" placeholder="Fixe"></input></div>
<label className="label" >Profession</label><input type="text" placeholder="Professeur , Ingenieurs .."></input >
<div><label className="label">Statue</label></div><div className="flex"><select><option>Marié</option><option>Celibataire</option></select><input type="text" placeholder="Avec?"></input></div>
<label className="label" >Code Postale</label><input type="text" placeholder="Exp. 2204"></input >


</div>
<button onClick={navigateToTwo} className="next">suivant</button>

      </div>
      </div>
    </div>
  );
}
