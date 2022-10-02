export default function SelectBox(props){

    
    if(props.contenue=="year"){
        var list=[];
        for (let i = 1940; i < 2023; i++) {
            list.push(i)
        }
        return(
            <select className="col-3 gend" id="year" name="year">
            <option >Année</option>
            {list.map((temp)=>{
                return(
                
                <option value={temp}>{temp}</option>
                )
            })}
            </select>
    )}
    if(props.contenue=="month"){
        var list=[];
        for (let i = 1; i < 13; i++) {
            list.push(i)
        }
        return(
            <select className="col-3 gend" id="month" name="month">
            <option >Mois</option>
            {list.map((temp)=>{
                return(
                
                <option value={temp}>{temp}</option>
                )
            })}
            </select>
    )}
    if(props.contenue=="day"){
        var list=[];
        for (let i = 1; i < 32; i++) {
            list.push(i)
        }
        return(
            <select  className="col-3 gend" id="day" name="day">
            <option >Jour</option>
            {list.map((temp)=>{
                return(
                
                <option value={temp}>{temp}</option>
                )
            })}
            </select>
    )}

}
    
