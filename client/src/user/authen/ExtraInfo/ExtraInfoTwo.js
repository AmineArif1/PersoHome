import "./ExtraStyle.css";
import whiteSelector from "./img/whileIcon.svg";
import Header from "F:\\Project_Home\\client\\src\\user\\authen\\ExtraInfo\\Header.js";
import whilePickle from './img/whileIcon.svg';
import thirtypercent from './img/30percent.svg'
import checkmark from './img/checkmark.svg';
import {Routes, Route, useNavigate} from 'react-router-dom';


export function ExtraInfoTwo() {
  const navigate = useNavigate();

  const navigateToThree = () => {
    // 👇️ navigate to /contacts
    navigate('/ExtraInfoThree');
  };
  const navigateToOne= () => {
    // 👇️ navigate to /contacts
    navigate('/ExtraInfoOne');
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
       
          <li className="draw"><h1>Description du logement</h1><p>Complete personal informations</p></li>
    
          <li><h1>information famille</h1><p>Complete personal informations</p></li>
    
          <li><h1>Profile final</h1><p>Complete personal informations</p></li>
        </ul>
      </div>
      <div className="rightPage">

        <div className="flexColumn"><h1>Description de votre logement</h1><div className="line"></div><p>Let’s Fill your Personal Informations and
Professional informaions</p></div>
{/* <div className="form">
 <label className="label">Numero Telephone</label> <div className="flex"><input type="text" placeholder="Portable"></input><input type="text" placeholder="Fixe"></input></div>
<label className="label" >Profession</label><input type="text" placeholder="Professeur , Ingenieurs .."></input >
<div><label className="label">Statue</label></div><div className="flex"><select><option>Marié</option><option>Celibataire</option></select><input type="text" placeholder="Avec?"></input></div>
<label className="label" >Code Postale</label><input type="text" placeholder="Exp. 2204"></input >


</div> */}
<div className="form">
  <div className="flex align-center"> <label className="half">Votre Batimen Contient :</label><input type="number" className="width-small" placeholder="nombre d'étage"></input></div> 
  <div className="flex align-center"> <label className="more-half">Votre Appartement est dans le:</label><input type="number" className="width-small" placeholder="numero d'étage"></input></div> 
  <div className="flex align-center"> <label className="more-half">Sa surface est</label><input type="number" className="width-small" placeholder="Exp. 120m2"></input></div> 
  <div className="flex align-center"> <label className="more-half">Nombre de chambres</label><input type="number" className="width-small" placeholder="Ex. 3"></input></div> 

  <div className="flex align-center"> <label className="more-half">Nombre d'assenceur :</label><input type="number" className="width-small" placeholder="nombre d'ascenseur"></input></div> 
  <div className="flex align-center"> <label className="more-half">Nombre de garage :</label><input type="number" className="width-small" placeholder="nombre de garage"></input></div> 
  <div className="flex align-center"> <label className="more-half">Votre Syndique :</label><input type="text" className="width-small" placeholder="nombre de garage"></input></div> 



</div>
<div>
    < button onClick={navigateToThree} className="precedent">suivant</button>
<button onClick={navigateToOne} className="next">précédent</button>
</div>
      </div>
      </div>
    </div>
  );
}
