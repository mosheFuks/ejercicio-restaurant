import logo from "../../assets/img/logoFav.png"
import facebookNavbar from "../../assets/img/facebookNavbar.png"
import instagramNavbar from "../../assets/img/instagramNavbar.png"




const Navbar = () => {
    return ( 
       <>
            <nav className="navbar navbar-light bg-black">
            <div className="container-fluid">
                <div className="navbar-brand " style={{color: "white", marginLeft: "2%"}}>
                    <img src={logo} alt="logo pagina" style={{width: "40px", height: "40px"}} className="d-inline-block align-text-center m-2" />
                    Burguer
                    <div className="d-inline-block" style={{marginLeft: "500%"}} >
                        <img src={facebookNavbar} alt="Facebook" style={{width: "35px", height: "35px"}} className="d-inline-block align-text-center m-2" />
                        <img src={instagramNavbar} alt="Instagram" style={{width: "35px", height: "35px"}} className="d-inline-block align-text-center m-2" />
                    </div>
                </div>
            </div>
            </nav>
       
       
       </>

     );
}
 
export default Navbar;