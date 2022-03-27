import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="side-image left">
                        <StaticImage src="../images/glasgow.jpg"
                        alt="Barrowlands Glasgow" />
                    </div>
                    <div className="main-text">Gavin Reid</div>
                    <div className="main-image">
                        <StaticImage src="../images/glasgow.jpg"
                        alt="Barrowlands Glasgow" placeholder="blurred" />
                    </div>
                    <div className="side-image right">
                        <StaticImage src="../images/glasgow.jpg"
                        alt="Barrowlands Glasgow" />
                    </div>
                </div>
            </div>
            <div className="fixed-misc">Scottish Environmental Aritst</div>
        </div>
    )
}

export default Banner
