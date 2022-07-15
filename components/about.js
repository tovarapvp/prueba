import Link from "next/link"
import Image from "next/image"
import Style from './about.module.css'
export default function About(){





    return (<>
    <div className={Style.about}>
        <div className={Style.separator}> <h6>About me</h6></div>
        <p className={Style.parraf}>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
        <div className={Style.cImg}><Image className={Style.img} src='/images/1.jpeg' width='400px' height='300px' alt='logo'/></div>
        <p className={Style.parraf}>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React. Here are a few technologies I’ve been working with recently:</p>
        <div className={Style.contTec}><span className={Style.tec}>TypeScript</span>
        <span className={Style.tec}>TypeScript</span>
        <span className={Style.tec}>React</span>
        <span className={Style.tec}>Eleventy</span>
        <span className={Style.tec}>Node.js</span>
        <span className={Style.tec}>WordPress</span>
        </div>
        
        
    </div>
    </>)
}