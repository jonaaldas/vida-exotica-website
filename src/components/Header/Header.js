import { Navbar, Container, Nav } from 'react-bootstrap'
import '../Header/Header.css'
import { useEffect } from "react";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Header() {

  const { i18n, t } = useTranslation(["Header"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    console.log(e.target.value)
  };

  return (
    <>
    <div>
      <Navbar bg="light" expand="lg" className='px-3 bg-white'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="first">
              <Nav.Link href="#home">{t("Home")}</Nav.Link>
              <Nav.Link href="#home">{t("Menu")}</Nav.Link>
              <Nav.Link href="#link">{t("Contacto")}</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        <div className="second">

          <input name='lang' onClick={handleLanguageChange} type="radio" id='en' value='en' />
          <label htmlFor="en">English</label>

          <input name='lang' onClick={handleLanguageChange} type="radio" id='es' value='es' />
          <label htmlFor="es">Español</label>

        </div>


      </Navbar>
      </div>
    </>
  );
}

export default Header;