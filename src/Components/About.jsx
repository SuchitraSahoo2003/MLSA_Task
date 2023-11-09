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
import image from "../images/square-2724388_1280.jpg";

const imageAltText = "square design background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hello I am Suchitra Sahoo. An IT enthusiast with a diverse range of interests. Alongside my studies in B.Tech IT, I have a strong inclination towards exploring different aspects of technology. From coding and web development to various emerging technologies, I enjoy delving into various fields and expanding my knowledge. I am passionate about embracing the latest trends and learning new skills to stay ahead in this rapidly evolving industry. I am eager to connect with professionals who share similar interests and collaborate on exciting projects that push the boundaries of technology.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web developer",
  "Graphic designer",
  "Content creator",
  "open source contributor",
  
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "This is my portfolio website to showcase my skill an abilities";

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
        <h2>About Myself</h2>
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
