import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return (
            <section className="resume-start-section is-fullheight hero" id="resume">
                <div className="resume-container">
                    <div className="resume-left">
                        <div className="top-box-styling"></div>
                        <div className="top-resume-section">
                            <h1 className="resume-name">Michael Chen</h1>
                            <h2 className="resume-bio">Software Engineer | Full-Stack Developer | Marine Reservist</h2>
                        </div>
                        <div className="left-resume-section">
                            <h1 className="resume-personal-profile">Personal Profile</h1>
                            <p className="personal-profile-paragraph">I am a Software Engineer from General Assembly with a Bachelor’s Degree in Biology and a Marine Corps reservist, with experience as an Emergency Medical Technician. A combination of all my experience provided a strong foundation to be reliable, passionate, and motivated.</p>
                        </div>
                    </div>
                    <div className="resume-right">
                        <div className="right-resume-section">right</div>
                    </div>
                </div>
                <a className="resume-download" href="Michael Chen Resume.pdf" target="_blank">Hello</a>
            </section>
        )
    }
}

export default Resume;