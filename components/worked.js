import Style from './style_component/worked.module.css'
import { useState } from 'react'
import api from '../pages/api/api.json'

export default function Worked () {
  const Prof = api.datos
  const [work, setWork] = useState(0)

  return (
<div className={Style.workeds}>
    <div className={Style.title}>
          <h4 className={Style.section}>Where I have worked</h4>
          <div className={Style.separator}></div>
        </div>
      

        <div className={Style.worked}>
          <div className={Style.bar}>
            {Prof.map((empresa, index) => {
              return (
                <>
                <label className={Style.business} key={'lab' + index} htmlFor={'e' + index}>
                    {empresa.name}


                </label>
                    <input

                    id={'e' + index}
                    type="radio"
                    name="prof"
                    value={index}
                    checked={work === index}
                    onChange={() => setWork(index)}/>
                    </>
              )
            })}
          </div>

          <div className={Style.employ}>
          <h3 className={Style.job}>{Prof[work].cargo}</h3>
            <span>{Prof[work].fecha}</span>
            {Prof[work].act.map((e, index) => {
              return <p key={'text' + index}>{e}</p>
            })}
          </div>
        </div>
      
  
</div>
    
  )
}
