import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="main-text">Gavin Reid</div>
                    <div className="main-image">
                    <StaticImage src=""
                    alt="Colourful umbrellas in the sky" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
