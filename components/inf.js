import Link from "next/link"
import Image from "next/image"
import Style from './inf.module.css'
import 'animate.css'
export default function Inf(){
    return (<>
    <div className={Style.inf}>
        <span className="animate__animated animate__bounceInLeft">Hi, my name is</span>
        <h3>Stephen Gachoka.</h3>
        <h4 className={Style.h4}>I create solutions from coding.</h4>
        <p className="animate__animated animate__fadeInTopRight">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences for both web and mobile platforms. Currently, I’m focused on building Continous Intergration Continuos Deployment(CICD) solutions for organizations.</p>
        <button className={Style.button}>Read my Book</button>
    </div>
    </>)
}