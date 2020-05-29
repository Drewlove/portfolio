import React from 'react'
import GreenDragons from './Assets/Green-Dragons.png'

const Project = () => {
    return(
        <>
        <div className="section-header">
            <h1>Projects</h1>
        </div> 
        <section className="projects-section">
            <div class="project-container">
                <img src={GreenDragons} alt="image" class="project-image" />
                <div class="project-image-overlay">
                    <div>
                        <p class="project-image-text">Full stack admin panel for the Green Dragons, an extracurricular program combining physical fitness, urban gardening, and local currency.</p>
                        <a class='project-image-link'href='https://green-dragons-app.now.sh/about'>Visit</a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Project