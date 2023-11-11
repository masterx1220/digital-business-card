import React from "react"


export default function Info(){
    return(
        <div className="info-container">
            <img src="./images/joe.jpg" className="avatar" />
            <h1>Joseph Strozier Jr.</h1>
            <p className="position"><span>Frontend Developer</span></p>
            <p className="wannabe"><small>Wannabe lifter</small></p>
            <div className="btn-container">
                <a href="https://github.com/masterx1220" target="_blank">
                    <button className="github-button"  >
                    <img className="github-icon" src="./images/github.jpg" />
                    Github
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/joseph-strozier-jr-b3574916b/" target="_blank">
                    <button className="linkedin-button" >
                    <img className="linkedin-icon" src="./images/linkedin.jpg" />
                    Linkedin
                    </button>
                </a>
            </div>
        </div>
    )
}