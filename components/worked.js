import Link from "next/link"
import Image from "next/image"
import Style from './worked.module.css'
import { useState } from "react"
export default function Worked(){


const Prof=[
{name:"Weza Prosoft Ltd",
cargo:"Software Engineer @WezaProsoft",
fecha:"Jan 2020 - Present",
act:[
   "Write modern, performant, maintainable code for a diverse array of client and internal projects" 
,"Write modern, performant, maintainable code for a diverse array of client and internal projects" 
,"Write modern, performant, maintainable code for a diverse array of client and internal projects" 
]

},
{name:"Weza Prosoft Ltd",
cargo:"Software Engineer @WezaProsoft",
fecha:"Jan 2021 - Present",
act:[
   "Write performant, performant, maintainable code for a diverse array of client and internal projects" 
,"Write performant, performant, maintainable code for a diverse array of client and internal projects" 
,"Write performant, performant, maintainable code for a diverse array of client and internal projects" 
]

},{name:"Weza Prosoft Ltd",
cargo:"Software Engineer @WezaProsoft",
fecha:"Jan 2022 - Present",
act:[
   "Write Write, performant, maintainable code for a diverse array of client and internal projects" 
,"Write Write, performant, maintainable code for a diverse array of client and internal projects" 
,"Write Write, performant, maintainable code for a diverse array of client and internal projects" 
]

}
]
const [work, setWork] = useState(0);


    return (<>
    <div className={Style.worked}>
        <div className={Style.separator}><h6>Where I have worked</h6></div>
        <div className={Style.bar}>
            {Prof.map((empresa,index)=>{
                
            return (
               <>
                <input key={"input"+index}  id={"e"+index}
              type="radio"
              name="prof"
              value={index}
              checked={ work==index}
              onChange={ () => setWork(index) }
         />
              <label  key={"lab"+index}  htmlFor={"e"+index}>{empresa.name}</label>
              </>
            )})

            }
            
        </div> 
        <div className={Style.employ}>
        <h6>{Prof[work].cargo}</h6>
        <span>{Prof[work].fecha}</span>
            {Prof[work].act.map((e,index)=>{
                return(
                    <p key={"text"+index}>
                       { e}
                    </p>
                )
            })}
        
             </div>
        
        
    </div>
    </>)
}