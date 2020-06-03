import React, {useEffect} from 'react'
import MockMobile from './_Common/MockMobile'
import ProjectScreen from './_Common/ProjectScreen'
import GreenDragonsImg from './Assets/Green-Dragons.png'
import CO2img from './Assets/CO2.png'


const Project = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const renderProjects = (projects) => {
      return projects.map((key) => {
        return (
          <MockMobile key={key.id}>
            <ProjectScreen imgSrc={key.imgSrc} text={key.text} url={key.url} />
          </MockMobile>
        );
      });
    };
  
    const projects = [
      {
        text:
          "Full stack admin panel for the Green Dragons, an extracurricular program combining physical fitness, urban gardening, and local currency.",
        url: "https://green-dragons-app.now.sh/about",
        id: 1,
        altImg: "Green Dragons App",
        imgSrc: GreenDragonsImg,
      },
      {
        text:
          "Interactive graph displaying USA CO2 emissions from 1980-2016 by energy type, state, and, optionally, as a ratio of GDP.",
        url: "https://co-2-gdp-app.now.sh/",
        id: 2,
        altImg: "CO2 Emissions Image",
        imgSrc: CO2img,
      },
    ];
  
    return (
      <>
        <section className="section-projects">{renderProjects(projects)}</section>
      </>
    );
  };

export default Project