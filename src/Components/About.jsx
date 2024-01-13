/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/personasTrabajando.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Soy un estudiante de Ingeniería en Sistemas con experiencia en Desarrollo Web. Mi pasión se centra en el desarrollo de software y la tecnología en general. Disfruto aprendiendo nuevas habilidades y compartiendo mis conocimientos con los demás. En este momento, estoy enfocado en aprender sobre el desarrollo de aplicaciones  utilizando React.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = ["React", "Node Js", "JavaScript", "Html Y Css", "Git y GitHub", "Aws"];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Soy apasionado del desarrollo de software y la tecnología en general. Aunque estoy en las etapas iniciales de mi carrera en el mundo tecnológico, estoy convencido de que podré llegar lejos. Aunque mi experiencia actual es limitada, estoy totalmente comprometido a aprender y mejorar cada día. Estoy emocionado por la oportunidad de crecer y contribuir al mundo de la tecnología con dedicación y esfuerzo constante.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Sobre Mí</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
