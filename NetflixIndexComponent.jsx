import React from "react";
import NetflixHeaderComponent from "./NetflixHeaderComponent";
import NetflixMainComponent from "./NetflixMainComponent";
import NetflixRegisterComponent from "./NetflixRegisterComponent";
import NetflixFooterComponent from "./NetflixFooterComponent";
import NetflixAccordion from "./NetflixAccordion";
import NetflixCarousel from "./NetflixCarousel";
import NetflixCards from "./NetflixCards";
import "./NetflixIndexComponent.css";

export default function NetflixIndexComponent() {
    return (
        <div className="netflix-container">

            <div className="top-section">
                <header>
                    <NetflixHeaderComponent />
                </header>
                <section className="d-flex justify-content-center align-items-center">
                    <main>
                        <NetflixMainComponent />
                    </main>
                </section>
            </div>

            
            <div className="bottom-section">
                <NetflixCarousel />

                
                <div className="cards-container">
                    <NetflixCards />
                </div>

                
                <div className="accordion-container">
                    <NetflixAccordion />
                </div>

                <div className="register-container">
                    <NetflixRegisterComponent />
                </div>

                <footer className="m-2 p-2 bg-dark text-white w-100">
                    <NetflixFooterComponent />
                </footer>
            </div>
        </div>
    );
}
