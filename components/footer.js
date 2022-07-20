import Link from 'next/link'
import footer from './footer.module.css'
export default function Footer () {
  return (
    <>
      <h2 className={footer.title__getInTouch}>Get In Touch</h2>
      <p className={footer.paragraph}>
      Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
        <Link href={'#'}>
            <a className={`${footer.button_footer}  ${footer.text__button}`}>Say Hello</a>

        </Link>

    </>
  )
}
