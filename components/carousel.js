
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import Styles from './style_component/carousel.module.css'
import { FaAmbulance, FaStethoscope, FaCrutch, FaTemperatureHigh } from 'react-icons/fa'
export default function Carousel () {
  return (
      <div className={Styles.container}>
<CCarousel interval={4000} transition="crossfade" pause="false" >
  <CCarouselItem >
    <CImage className="d-block w-100" src="/images/img1.jpg" alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem >
    <CImage className="d-block w-100" src="/images/img2.jpg" alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem >
    <CImage className="d-block w-100" src="/images/img3.jpg" alt="slide 3" />
  </CCarouselItem>
</CCarousel>
      <div className={Styles.gLabel}>
        <div className={Styles.label}>

        <h5><FaAmbulance/> Ambulance</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut </p>
        </div>
        <div className={Styles.label}>

        <h5> <FaStethoscope/> Ambulance</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut </p>
        </div>
        <div className={Styles.label}>

        <h5> <FaCrutch/> Ambulance</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut </p>
        </div>
        <div className={Styles.label}>

        <h5>  <FaTemperatureHigh/> Ambulance</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut </p>
        </div>
      </div>
     </div>

  )
}
