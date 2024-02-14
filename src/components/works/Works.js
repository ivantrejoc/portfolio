/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { formatMs, makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Works.css";

// Import ../../assets/recentprojects/
import Wanderlust from "../../assets/recentprojects/wanderlust.png";
import Pokemon from "../../assets/recentprojects/pokemon.png";
import Portfolio from "../../assets/recentprojects/portfolio.png";
import Worksplace from "../../assets/recentprojects/worksplace.png";
import Now from "../../assets/recentprojects/now.png";
import Vsp from "../../assets/recentprojects/vsp.png";
import Buime from"../../assets/recentprojects/buime-shop.png";
import AgencySpotter from "../../assets/recentprojects/agency-spotter.png";

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
      title: "Buime",
      description: `Nice ecommerce which renders fakestore api, includes shopping cart and checkout view, will soon have a payment gateway with Stripe. Developed using Next Js, Typescript and TailwindCSS.`,
      alter: "Worksplace",
      image: `${Buime}`,
      url: "https://buime-ecommerce.vercel.app/",
    },
    {
      id: 2,
      title: "Worksplace",
      description: `Landing page to employment agency based in New York, developed in Wordpress.`,
      alter: "Worksplace",
      image: `${Worksplace}`,
      url: "https://worksplaceus.com/",
    },
    {
      id: 3,
      title: "Now Agency",
      description: `Landing page to marketing agency based in Medellín, Colombia. Developed in Wordpress with CSS and JS.`,
      alter: "Now Agency",
      image: `${Now}`,
      url: "https://nowagency.com.co/"
    },
    {
      id: 4,
      title: "Vive Sano Prime",
      description: `Landing page to health education platform based in Brazil. Developed in Wordpress with CSS and JS.`,
      alter: "Vive Sano",
      image: `${Vsp}`,
      url: "https://vivesanoprime.org/"
    },
    {
      id: 5,
      title: "React Portfolio",
      description: `Personal Portfolio developed with ReactJS.  
      Designed with fancy 3D animations using Three.js for 
      the background element and MUI components.`,
      alter: "React Portfolio",
      image: `${Portfolio}`,
      url: "https://ivantrejo.vercel.app/",
    },

    {
      id: 6,
      title: "Agency Spotter",
      description: `Elegant Marketing Agency landing page developed using UX/UI principles.`,
      alter: "Agency-Spotter",
      image: `${AgencySpotter}`,
      url: "https://salvatech-test.webflow.io/",
    },
    {
      id: 7,
      title: "Wanderlust",
      description: `Amazing e-commerce aimed to sell travel packages. Stands out for its third-party authentication, DBB, sorts, filters, shopping cart and PayPal payment gateway.`,
      alter: "Wanderlust",
      image: `${Wanderlust}`,
      url: "https://wanderlust-phi.vercel.app/home",
    },
    {
      id: 8,
      title: "Pokemon",
      description: `ReactJS app developed to render pokemon API characters. Front-end designed with tailwindCSS and Flowbite components, back-end developed with Express and database developed with Sequelize.`,
      alter: "Pokemon",
      image: `${Pokemon}`,
      url: "https://pokemonivan.vercel.app/",
    }    

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
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              </a>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
