/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Works.css";

// Import ../../assets/recentprojects/
import Wanderlust from "../../assets/recentprojects/wanderlust.png";
import Pokemon from "../../assets/recentprojects/pokemon.png";
import Portfolio from "../../assets/recentprojects/portfolio.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "React Portfolio",
      description: `Personal Portfolio developed with ReactJS.  
      Designed with fancy 3D animations using Three.js for 
      the background element and MUI components.`,
      alter: "React Portfolio",
      image: `${Portfolio}`,
      url: "https://ivantrejo.vercel.app/",
    },
    {
      id: 2,
      title: "Wanderlust",
      description: `Amazing e-commerce aimed to sell travel packages. Stands out for its third-party authentication, DBB, sorts, filters, shopping cart and PayPal payment gateway.`,
      alter: "Wanderlust",
      image: `${Wanderlust}`,
      url: "https://wanderlust-phi.vercel.app/home",
    },
    {
      id: 3,
      title: "Pokemon",
      description: `ReactJS app developed to render pokemon API characters. Front-end designed with tailwindCSS and Flowbite components, back-end developed with Express and database developed with Sequelize.`,
      alter: "Pokemon",
      image: `${Pokemon}`,
      url: "https://pokemonivan.vercel.app/",
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>

            <div className="__content_wrapper">
              <a href={project.url} className="link">
                <h3 className="title">
                  <TextDecrypt text={project.id + ". " + project.title} />
                </h3>
              </a>

              <p className="description">{project.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
