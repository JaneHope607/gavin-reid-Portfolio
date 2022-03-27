import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const AboutBlurb = () => {
    return (
        <div className="about-blurb">
            <div className="container">
                <div className="inner-blurb">
                    <div className="content">
                        <h3>Lorum Ipsum Blurb Blurb Blurb</h3>
                        <p>Blurb Blurb Blurb Blurb Blurb Blurb Blurb
                        Blurb Blurb Blurb Blurb Blurb Blurb Blurb 
                        Blurb Blurb Blurb Blurb Blurb Blurb Blurb
                        Blurb Blurb Blurb Blurb Blurb Blurb Blurb
                        Blurb Blurb Blurb Blurb Blurb Blurb Blurb
                        Blurb Blurb Blurb Blurb Blurb Blurb Blurb
                        Blurb Blurb Blurb Blurb Blurb Blurb Blurb
                        Blurb Blurb Blurb Blurb Blurb Blurb Blurb
                        Blurb Blurb Blurb Blurb</p>
                        <div className="btn-row">
                            <Link to="/work">View Work</Link>
                        </div>
                    </div>
                    <div className="images">
                        <div className="top-right">
                            <StaticImage src="../images/glasgow.jpg"
                            alt="Barrowlands Glasgow" placeholder="blurred" />
                        </div>
                        <div className="bottom-left">
                            <StaticImage src="../images/glasgow.jpg"
                            alt="Barrowlands Glasgow" placeholder="blurred" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="black-box"></div>
            <div className="black-box overlay"></div>
        </div>
    )
}

export default AboutBlurb
