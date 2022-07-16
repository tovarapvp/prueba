import Link from "next/link"
import Image from "next/image"
import Style from './built.module.css'
import { useState } from "react"
export default function Built(){


const Jobs=[
{image:"/images/1.jpeg",
type:"Featured Project",
title:"TeamCity CICD for maven Runners",
desc:"A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
},
{image:"/images/1.jpeg",
type:"Featured Project",
title:"TeamCity CICD for maven Runners",
desc:"A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
},
{image:"/images/1.jpeg",
type:"Featured Project",
title:"TeamCity CICD for maven Runners",
desc:"A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
}

]
const [work, setWork] = useState(0);


    return (
    <div className={Style.built}>
        
            {Jobs.map((e,index)=>{
                return(
                    <div className={Style.jobs} key={"text"+index}>
                       <div className={Style.image}><Image src={e.image} layout='fill' alt="img"></Image></div>
                       <span>{e.type}</span>
                       <h5>{e.title}</h5>
                       <p>{e.desc}</p>

                    </div>
                )
            })}
        
             </div>
        
     

        
    )
}