import Style from "./style_component/inf.module.css";
import "animate.css";
export default function Inf() {
  return (
    
      <div className={Style.container}>
        <h3 className="animate__animated animate__bounceInLeft">
          Hi, my name is
        </h3>
        <h1>Alberto Tovar</h1>
        <h2 className={Style.sub_title}>I create solutions from coding.</h2>
        <p className="animate__animated animate__fadeInTopRight">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences for both web and mobile
          platforms. Currently, I’m focused on building Continous Intergration
          Continuos Deployment(CICD) solutions for organizations.</p>
        <button className={Style.link_book}>Read my Book</button>
      </div>
    
  );
}
