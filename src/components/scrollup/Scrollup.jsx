
import React from "react";
import './scrollup.css'

const Scrollup = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup")
        if (this.scrollY > 560) scrollUp.classList.add("show-scroll")
        else scrollUp.classList.remove("show-scroll")
    })
    return (
        <button className="scrollup" onClick={() => window.scrollTo(0, 0)}>
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </button>
    );
}

export default Scrollup;

