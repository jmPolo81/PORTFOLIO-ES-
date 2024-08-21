import React, { useState } from "react";
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="section qualificaciton section" id="qualifications">
            <h2 className="section__title">Experiencia</h2>
            <span className="section__subtitle">Mi viaje personal</span>
            <div className="qualification_container container">
                <div className="qualification__tabs">

                    <div
                        className={toggleState === 1 ?
                            "qualification__button qualification__active button--flex changeColor" :
                            "qualification__button button--flex changeColor"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Educación
                    </div>

                    <div className={toggleState === 2 ?
                        "qualification__button qualification__active button--flex changeColor" :
                        "qualification__button button--flex changeColor"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experiencia
                    </div>

                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" :
                        "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Técnico Superior Desarrollo Aplicaciones Web (DAW)</h3>
                                <span className="qualification__subtitle">Centro Formación Profesional José Ramón Otero - Madrid</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Sep-2022 / Jun-2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Diploma IFCT031PO Creación, programación y diseño de páginas Web (120 horas)</h3>
                                <span className="qualification__subtitle">Nt for Learning S.L - Madrid</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jun-2023
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Técnico Superior de Turismo</h3>
                                <span className="qualification__subtitle">IPE - Madrid</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Sep 1999 / Jun-2001
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Técnico Superior en Electrónica
                                </h3>
                                <span className="qualification__subtitle">C.E Sta. Mª Apóstoles - Madrid</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Sep 1995 / Jun-1999
                                </div>
                            </div>

                        </div>

                        
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" :
                        "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Data Science</h3>
                                <span className="qualification__subtitle">Instituto Ramón y Cajal de Investigación Sanitaria (IRYCIS) - Madrid</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> abr-24 / Jun-24
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Resp. Organización y Proyectos Logísticos</h3>
                                <span className="qualification__subtitle">Suministros Eléctricos Gesel S.A - Madrid</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Sep-2020 / Ago-2022
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Maintenance Manager</h3>
                                <span className="qualification__subtitle">E.L.P S.L - Madrid</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> May-2010 / Jun-2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Resp. Operaciones Logísticas</h3>
                                <span className="qualification__subtitle">Jemi SA - Madrid</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Feb-2002 / Nov-2009
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Qualification