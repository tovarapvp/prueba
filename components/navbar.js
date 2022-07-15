import Link from "next/link"
import Image from "next/image"
import Style from './navbar.module.css'
export default function navbar(){





    return (<>
    <div className={Style.navbar}>
        <Image className={Style.img}src='/images/vercel.png' width='90px' height='90px' alt='logo'/>
        <Link  href='/clinicas'><a className={Style.link}>About</a></Link>
        <Link  href='/servicios'><a className={Style.link}>Experience</a></Link>
        <Link  href='/informacion'><a className={Style.link}>Work</a></Link>
        <Link  href='/contactos'><a className={Style.link}>Contact</a></Link>
        <button className={Style.button}>Resume</button>
    </div>
    </>)
}