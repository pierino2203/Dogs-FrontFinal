import React from "react";
import s from '../styles/DogCard.module.css'

export default function Card({name, img, temperaments,weight_min,weight_max}) {
  // console.log("dogCard",temperament)
   return(
       <div className={s.container}>
           <div className={s.img_container}>
           <img className={s.dogImage}  src={img} alt="img not found" width="200px" height="250px"/>
           </div>
            <div className={s.text}>
            <h2 className={s.subTitle} >{name}</h2>
           <div className={s.peso}>
           <p>Peso: </p>
           <p>Min:{weight_min}Kg</p>
           <p>Max: {weight_max}Kg</p>
           </div>
           <div className={s.temperaments}>
           <p>Temperamentos:</p>
           <p >{temperaments}</p>
           </div>

            </div>
       </div>
   )    
}