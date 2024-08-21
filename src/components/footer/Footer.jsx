import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">José Manuel Polo</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">Sobre mí</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Proyectos</a>
                    </li>

                </ul>

                <div className="footer__social">
                    

                    <a href="https://www.linkedin.com/in/josé-manuel-polo-rivera/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="uil uil-linkedin"></i>
                    </a>

                    <a href="https://github.com/jmPolo81" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; José_Manuel_Polo. Todos los derechos reservados</span>
            </div>
        </footer>
    )
}

export default Footer