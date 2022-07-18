import Link from "next/link";
import Image from "next/image";
import Style from "./built.module.css";
import { useState } from "react";
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";

export default function Built() {
  const Jobs = [
    {
      image: "/images/1.jpeg",
      type: "Featured Project",
      title: "TeamCity CICD for maven Runners",
      desc: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    },
    {
      image: "/images/1.jpeg",
      type: "Featured Project",
      title: "TeamCity CICD for maven Runners",
      desc: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    },
    {
      image: "/images/1.jpeg",
      type: "Featured Project",
      title: "TeamCity CICD for maven Runners",
      desc: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    },
  ];
  const [work, setWork] = useState(0);

  return (
    <>
      <div className={Style.built}>
        <div className={Style.separator}>
          <h6>Some Things I’ve built</h6>
        </div>
        {Jobs.map((e, index) => {
          return (
            <div className={Style.card} key={"text" + index}>
              <div className={Style.card__image}>
                <Image src="/images/1.jpeg" layout="fill" alt="img"></Image>

              </div>
              <div className={Style.card__content}>

              <span>{e.type}</span>
              <h5>{e.title}</h5>
              <p>{e.desc}</p>
              <div className={Style.links_card}>
                <Link href="https://stackoverflow.com/" passHref={true}>
                  <a>
                    <FaGithubSquare />
                  </a>
                </Link>
                <Link href="https://google.com/" passHref={true}>
                  <a>
                    <FaExternalLinkAlt />
                  </a>
                </Link>
              </div>

              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
