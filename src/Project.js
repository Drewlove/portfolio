import React from 'react'
import MockMobile from './_Common/MockMobile'
import ProjectScreen from './_Common/ProjectScreen'
import GreenDragons from './Assets/Green-Dragons.png'


const Project = () => {

    const projects = [
        {
            text: 'Full stack admin panel for the Green Dragons, an extracurricular program combining physical fitness, urban gardening, and local currency.',
            url: 'https://green-dragons-app.now.sh/about',
            id: 1,
            altImg: 'Green Dragons App',
        }        
    ]

    const renderProjects = () => {
        return projects.map(key => {
            return(
            <MockMobile key={key.id}>
                <ProjectScreen 
                imgSrc= {GreenDragons}
                text={key.text} 
                url={key.url}/>
            </MockMobile>
            )
        })
    }



    return(
        <>
        <div className="section-header">
            <h1>Projects</h1>
        </div> 
        <section className="projects-section">
            {renderProjects()}
  
        </section>
        </>
    )
}

export default Project