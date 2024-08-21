import React, { useState, useEffect } from "react";

const WorksItems = ({ item }) => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (event.target.classList.contains("active-modal")) {
                toggleTab(0);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt={item.title} className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            <a href={item.projectLink} className="work__button" target="_blank" rel="noreferrer">
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
            <span className="work__button" onClick={() => toggleTab(1)}>
                Details
                <i className="uil uil-arrow-right work__button-icon"></i>
            </span>
            <div className={toggleState === 1 ? "work__modal active-modal" : "work__modal"}>
                <div className="work__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>

                    <h3 className="work__modal-title">{item.title}</h3>
                    <p className="work__modal-description">
                        {item.description}
                    </p>

                    <ul className="work__modal-work grid">
                        {!item ? <p>Cargando...</p> :
                            item.tools.map((tool) => {
                                return (
                                    <li className="work__modal-work" key={tool}>
                                        <i className="uil uil-check-circle work__modal-icon"></i>
                                        <p className="work__modal-info"> {tool}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WorksItems;

