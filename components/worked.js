import Link from "next/link";
import Image from "next/image";
import Style from "./worked.module.css";
import { useState } from "react";
import api from "../pages/api/api.json";

export default function Worked() {
  const Prof = api.datos;
  const [work, setWork] = useState(0);

  return (
    <>
      <div className={Style.worked_container}>
        <div className={Style.title}>
          <h6 className={Style.section}>Where I have worked</h6>
          <div className={Style.separator}></div>
        </div>

        <div className={Style.worked}>
          <div className={Style.bar}>
            {Prof.map((empresa, index) => {
              return (
                <>
                  <input
                    key={"input" + index}
                    id={"e" + index}
                    type="radio"
                    name="prof"
                    value={index}
                    checked={work == index}
                    onChange={() => setWork(index)}
                  />
                <label className={Style.business} key={"lab" + index} htmlFor={"e" + index}>
                    {empresa.name}
                  </label>
                </>
              );
            })}
          </div>


          <div className={Style.employ}>
          <h6 className={Style.job}>{Prof[work].cargo}</h6>
            <span>{Prof[work].fecha}</span>
            {Prof[work].act.map((e, index) => {
              return <p key={"text" + index}>{e}</p>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
