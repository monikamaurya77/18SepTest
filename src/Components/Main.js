import Menu from "./Menu";
import Details from "./Details";
const Main = () =>{
    const yellow = "yellow";
    const orange = "orange";
    const green = "green";
    return(
        <div className = "box-shadow">
            
            
            <Menu/>
            <br/>
          
            <h3  className="margin-left lft">Active Deposite <span className= "circles">2</span> <button className="float-right">+</button></h3>
            <Details yl = {yellow} gr = {green}/>
            <br/>
            <br/>
            <br/>
            <h3 className="margin-left lft">Closed Deposite  <span className= "circles">3</span></h3>
            <Details yl = {yellow}  gr ={orange} />
        </div>
    )
}
export default Main;