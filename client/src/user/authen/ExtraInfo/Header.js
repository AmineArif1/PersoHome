
import logo from "./img/logo.jpg"
export default function Headers(){
    return <div className="Head">
        <img className="logo" src={logo}></img>
        <div className="profileLitleDiv">
        <span class="material-symbols-outlined">
account_circle
</span>
            <div className="flex-column"><p>El Arif Amine</p><p>UX/UI Designer</p></div>
            <span class="material-symbols-outlined">
expand_more
</span>

        </div>
    </div>
}