import Link from "next/link";
import Image from "next/image";
import Style from "./proyects.module.css";
import { useState } from "react";
import { FaFolder, FaExternalLinkAlt } from "react-icons/fa";
const Jobs = [
  {
    link: "https://google.com/",
    type: "Algolia WordPress PHP",
    title: "WordPress Plugin for Algolia Intergration",
    desc: "Building a custom plugin from scratch using php",
  },

  {
    link: "https://google.com/",
    type: "Algolia WordPress PHP",
    title: "WordPress Plugin for Algolia Intergration",
    desc: "Building a custom plugin from scratch using php",
  },

  {
    link: "https://google.com/",
    type: "Algolia WordPress PHP",
    title: "WordPress Plugin for Algolia Intergration",
    desc: "Building a custom plugin from scratch using php",
  },

  {
    link: "https://google.com/",
    type: "Algolia WordPress PHP",
    title: "WordPress Plugin for Algolia Intergration",
    desc: "Building a custom plugin from scratch using php",
  },

  {
    link: "https://google.com/",
    type: "Algolia WordPress PHP",
    title: "WordPress Plugin for Algolia Intergration",
    desc: "Building a custom plugin from scratch using php",
  },

  {
    link: "https://google.com/",
    type: "Algolia WordPress PHP",
    title: "WordPress Plugin for Algolia Intergration",
    desc: "Building a custom plugin from scratch using php",
  },

  {
    link: "https://google.com/",
    type: "Algolia WordPress PHP",
    title: "WordPress Plugin for Algolia Intergration",
    desc: "Building a custom plugin from scratch using php",
  },
    
  {link:"https://google.com/",
  type:"Algolia WordPress PHP",
  title:"WordPress Plugin for Algolia Intergration",
  desc:"Building a custom plugin from scratch using php"},
    
  {link:"https://google.com/",
  type:"Algolia WordPress PHP",
  title:"WordPress Plugin for Algolia Intergration",
  desc:"Building a custom plugin from scratch using php"},
    
  {link:"https://google.com/",
  type:"Algolia WordPress PHP",
  title:"WordPress Plugin for Algolia Intergration",
  desc:"Building a custom plugin from scratch using php"},
    
  {link:"https://google.com/",
  type:"Algolia WordPress PHP",
  title:"WordPress Plugin for Algolia Intergration",
  desc:"Building a custom plugin from scratch using php"},
    
  {link:"https://google.com/",
  type:"Algolia WordPress PHP",
  title:"WordPress Plugin for Algolia Intergration",
  desc:"Building a custom plugin from scratch using php"}
];

console.log(Jobs);


export default function Proyects() {
    const [value ,setvalue] =useState(3)

  return (
    <>
      <h6>Other Noteworthy Projects</h6>
      <span>View the archive</span>
      <div className={Style.proyects}>
        {Jobs.map((e, index) => {
          if (index < value) {
            return (
              <div className={Style.proy} key={"text" + index}>
                <div>
                  <FaFolder />
                  <Link href={e.link} passHref={true}>
                    <a>
                      <FaExternalLinkAlt />
                    </a>
                  </Link>
                </div>
                <h5>{e.title}</h5>
                <p>{e.desc}</p>
                <span>{e.type}</span>
              </div>
            );
          } else {
            <></>;
          }
        })}
      </div>
      {value < Jobs.length ? (
        <button onClick={ ()=>setvalue(Jobs.length)}  className={Style.button}>Show More</button>
      ) : (
        <button onClick={ ()=>setvalue(3)}  className={Style.button}>Show less</button>

      )}
      :
    </>
  );
}
