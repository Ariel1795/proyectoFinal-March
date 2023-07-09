import '../styles/footer.css'
import { Navbar } from "react-bootstrap";
import { BsInstagram, } from "react-icons/bs";


const Footer = () => {

    return (
        <>
            <Navbar bg="dark" expand={"md"} className="nav-bar" fixed="bottom">
                <Navbar.Brand className="m-auto" href="#home">
                    <div className="footer-container">
                        <div >
                            <h4>pesca@gmail.com</h4>
                        </div>
                        <div>
                            <BsInstagram className="bsinstagram" color="lightblue" />
                        </div>
                        <div>
                            <h4>instagram.com/pesca</h4>
                        </div>
                    </div>


                </Navbar.Brand>

            </Navbar>

        </>
    )
}

export default Footer;