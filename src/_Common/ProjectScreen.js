import React from 'react'

const ProjectScreen = (props) => {
    return(
        <>
        <img src={props.imgSrc} alt={props.altImg} className="project-image" />
        <div className="project-image-overlay">
            <div>
                <p className="project-image-text">{props.text}</p>
                <a className='project-image-link'href={props.url}>Visit</a>
            </div>
        </div>
        </>
    )
}

export default ProjectScreen