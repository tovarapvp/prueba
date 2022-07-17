import Link from "next/link";
import Image from "next/image";
import Style from "./navbar.module.css";
export default function navbar() {
  return (
    <>
    <div className={Style.nav}>
      <nav className={Style.nav_container}>
        <Image
          className={Style.svg}
          src="/images/vercel.svg"
          width="100px"
          height="40px"
          alt="logo"
        />
      <label for="menu" className={Style.nav_label}>
          <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54">
            <path  d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </label>
        <input type="checkbox" id="menu" className={Style.nav_input}></input>
        <ul className={Style.nav_menu}>
          <li>
            <Link href="#clinicas">
              <a className={Style.nav__item}>About</a>
            </Link>
          </li>
          <li>
            <Link href="#servicios">
              <a className={Style.nav__item}>Experience</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="#informacion">
              <a className={Style.nav__item}>Work</a>
            </Link>
          </li>
          <li>
            <Link href="#contactos">
              <a className={Style.nav__item}>Contact</a>
            </Link>
          </li>
          <li>
            {" "}
            <button className={Style.button}>Resume</button>
          </li>
        </ul>
      </nav>
      </div>
    </>
  );
}
