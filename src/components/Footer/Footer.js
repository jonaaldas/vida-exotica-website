import React from "react"
import {AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp} from "react-icons/ai";
import '../Footer/Footer.css'
function Footer(){
    const date = new Date;
    return(
        <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left w-100 d-flex justify-content-center align-content-center flex-row">
        <div className="row w-50 d-flex justify-content-center align-content-center flex-col">
            <div className="icons d-flex justify-content-center align-content-center flex-col">
                <AiFillFacebook/>
                <AiFillInstagram/>
                <AiOutlineWhatsApp/>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© {date.getFullYear()} Copyright:
        <a href="https://www.jonathanaldas.com/">Aldas Media</a>
    </div>

</footer>

    )
}



export default Footer