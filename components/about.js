import Image from "next/image";
import StyleAbout from "./about.module.css";
import "animate.css";
export default function About() {
  return (
    <div className={StyleAbout.about}>
      <div className={StyleAbout.title}>
        <h6 className={StyleAbout.section}>About me</h6>
        <div className={StyleAbout.separator}></div>
      </div>
      <div className={StyleAbout.abouts}>
        <p className={StyleAbout.parraf}>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
        <p className={StyleAbout.parraf}>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
        <p className={StyleAbout.parraf}>Here are a few technologies I’ve been working with recently:</p>

        <div className={StyleAbout.skill}>
          <span
            className={
              StyleAbout.tec + " animate__animated animate__zoomInRight"
            }
          >
            TypeScript
          </span>
          <span
            className={
              StyleAbout.tec + " animate__animated animate__zoomInRight"
            }
          >
            TypeScript
          </span>
          <span
            className={
              StyleAbout.tec + " animate__animated animate__zoomInRight"
            }
          >
            React
          </span>
          <span
            className={
              StyleAbout.tec + " animate__animated animate__zoomInRight"
            }
          >
            Eleventy
          </span>
          <span
            className={
              StyleAbout.tec + " animate__animated animate__zoomInRight"
            }
          >
            Node.js
          </span>
          <span
            className={
              StyleAbout.tec + " animate__animated animate__zoomInRight"
            }
          >
            WordPress
          </span>
        </div>
      </div>

      <div className={StyleAbout.img}>
        <Image
          className="animate__animated animate__jackInTheBox"
          src="/images/2.jpg"
          width="300px"
          height="250px"
          alt="logo"
        />
      </div>
    </div>
  );
}
