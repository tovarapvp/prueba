import Link from 'next/link'
import Image from 'next/image'
import Style from './style_component/built.module.css'
import { FaGithubSquare, FaExternalLinkAlt } from 'react-icons/fa'

export default function Built () {
  const Jobs = [
    {
      image: '/images/1.jpeg',
      type: 'Featured Project',
      title: 'TeamCity CICD for maven Runners',
      desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.'
    },
    {
      image: '/images/1.jpeg',
      type: 'Featured Project',
      title: 'TeamCity CICD for maven Runners',
      desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.'
    },
    {
      image: '/images/1.jpeg',
      type: 'Featured Project',
      title: 'TeamCity CICD for maven Runners',
      desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.'
    }
  ]

  return (
    
      <div className={Style.built}>
        <div className={Style.separator}>
          <h4>Some Things I’ve built</h4>
        </div>
        {Jobs.map((e, index) => {
          return (
            <div className={Style.card} key={'text' + index}>
              <div className={Style.card__image}>
                <Image src="/images/1.jpeg" layout="fill" loading="lazy" alt="img"></Image>

              </div>
              <div className={Style.card__content}>

              <h3>{e.type}</h3>
              <h4>{e.title}</h4>
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
          )
        })}
      </div>
    
  )
}
