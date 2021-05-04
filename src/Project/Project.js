import React, { useEffect } from "react";
import MockMobile from "../_Common/MockMobile";
import ProjectScreen from "../_Common/ProjectScreen";
import GreenDragonsImg from "../Assets/Green-Dragons.png";
import CO2img from "../Assets/CO2.png";
import QuarterImg from "../Assets/quarter.png";

const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderProjects = (projects) => {
    return projects.map((key) => {
      return (
        <MockMobile key={key.id}>
          <ProjectScreen
            imgSrc={key.imgSrc}
            textDescription={key.textDescription}
            stackDescription={key.stackDescription}
            url={key.url}
          />
        </MockMobile>
      );
    });
  };

  const projects = [
    {
      textDescription:
        "Full stack app that creates quarterly profit and loss projects for food businesses.",
      stackDescription: {
        front: ["React (with hooks)"],
        back: ["NodeJS", "PostgreSQL", "Heroku"],
        apiCalls: [],
      },
      url: "https://quarter-client.vercel.app/",
      id: 1,
      altImg: "The Quarter",
      imgSrc: QuarterImg,
    },
    {
      textDescription:
        "Full stack admin panel for the Green Dragons, an extracurricular program combining physical fitness, urban gardening, and local currency.",
      stackDescription: {
        front: ["React", "Chart.js"],
        back: ["NodeJS", "PostgreSQL", "Heroku"],
        apiCalls: [],
      },
      url: "https://green-dragons-app.now.sh/about",
      id: 2,
      altImg: "Green Dragons App",
      imgSrc: GreenDragonsImg,
    },
    {
      textDescription:
        "Interactive graph displaying USA CO2 emissions from 1980-2016 by energy type, state, and, optionally, as a ratio of GDP.",
      stackDescription: {
        front: ["jQuery", "Chart.js"],
        back: [],
        apiCalls: [
          "Bureau of Economic Analysis",
          "National Renewable Energy Laboratory",
        ],
      },
      url: "https://co-2-gdp-app.now.sh/",
      id: 3,
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

export default Project;
