import Image from "next/image";
import styles from './products.module.css'

export default function Products({image,title,desc}){
   return ( 
   <div className={styles.container}>
    <h3 className={styles.title}>{title}</h3>
    
    <p className={styles.details}>{desc}</p>
    <Image 

    className={styles.image}
    src={image ? image : '/images/profile.jpg'}
    width="100px"
    height="100px"
    layout="intrinsic"
    alt={title}
    blurDataURL
    />
    </div>
    )



;}