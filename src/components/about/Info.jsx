import React from "react";
import { projectsData } from "../work/Data";


const Info = () => {
    return (
        <div className="about__info grid">

            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Experiencia</h3>
                <span className="about__subtitle">+10 años</span>
            </div>

            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Proyectos</h3>
                <span className="about__subtitle">{projectsData.length} Proyectos</span>
            </div>

            <div className="about__box">
                <i className="bx bx-search-alt-2 about__icon"></i>
                <h3 className="about__title">Situación</h3>
                <span className="about__subtitle">Buscando trabajo</span>
            </div>



        </div>
    )
}

export default Info