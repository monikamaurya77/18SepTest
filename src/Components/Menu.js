import dp from "../assets/profile.jpg";
const Menu = () => {
    return (
        <div className = "flex">
           
           <img src={dp} alt="profile"/>
            <div className="center">Monika Maurya</div>
            <div className="none">
            <h3>HOME</h3>
            <h3>Deposite</h3>
            <h3>Offer</h3>
            <h3>Payments</h3>
            <h3>Setting</h3>
            
            </div>
           
            
        </div>
    )
}
export default Menu;
