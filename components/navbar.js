import Link from "next/link"
import Image from "next/image"
import Style from './navbar.module.css'
export default function navbar(){





    return (<>
    <nav className={Style.navbar}>
        <Image className={Style.svg} src='/images/vercel.svg' width='200px' height="100px" alt='logo'/>
        <ul className={Style.links}>
        <li><Link  href='#clinicas'><a className={Style.link}>About</a></Link></li>
        <li><Link  href='#servicios'><a className={Style.link}>Experience</a></Link></li>
        <li> <Link  href='#informacion'><a className={Style.link}>Work</a></Link></li>
        <li><Link  href='#contactos'><a className={Style.link}>Contact</a></Link></li>
        <li> <button className={Style.button}>Resume</button></li>
                </ul>
    </nav>
    </>)
}