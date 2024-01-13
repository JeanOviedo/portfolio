/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react"

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/jean.jpg"

const imageAltText = "desktop with books and laptop"

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Azul Urbano",
    description:
      "Sitio web corporativo diseñado con HTML,CSS y Javascript.",
    url: "https://azulurbano.com",
  },
  {
    title: "Cinex",
    description:
      "App de películas y series utilizando JavaScript, CSS, React, Redux.",
    url: "hhttps://github.com/JeanOviedo/Cinex",
  },
  {
    title: "Pokex",
    description:
      "App de pokemon, utilicé en Front-end: React, Redux, HTML, CSS y Back-end: NodeJS, Express Database: PostgreSQL, Sequelize con la POKEAPI.",
    url: "https://github.com/JeanOviedo/Pokex",
  },
  {
    title: "Fifa 21",
    description:
      "App con api de fifa 2021, Front: React, CSS y Redux con la API de FIFA, Back: Express, Sequelize y PostgreSQL.",
    url: "https://github.com/JeanOviedo/Fifa",
  },
]

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "55%",
              width: "65%",
              objectFit: "cover",
              position: "relative",
              top: "1rem",
              left: "8rem",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
