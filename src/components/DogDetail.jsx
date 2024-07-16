import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { getDogDetail, cleanDetail } from "../redux/actions/index";
import style from '../styles/DogDetail.module.css'
import load from '../images/load.gif';
import NavBar from "./NavBar";

export default function DogDetail(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDogDetail(props.match.params.id))
    return () => dispatch(cleanDetail())
  }, [dispatch,props.match.params.id]);
  const myDog = useSelector((state) => state.detail);

  return (
    <div>
      <NavBar/>
      {
        myDog.length > 0 ?
          <div className={style.conteninerDetail}>
            <div className={style.containet__img}>
              <img className={style.imageDetail} src={myDog[0].img ? myDog[0].img : "https://www.anipedia.net/imagenes/nombres-de-perros-800x375.jpg"} alt="" />
            </div>
            <div className={style.container__text}>
              <div className={style.texto__container}>
                <h1 className={style.title} >{myDog[0].name}</h1>
              </div>
              <div className={style.container__altura}>
                <h4>Altura</h4>
                  <p>Min: {myDog[0].height_min} Cm</p>
                  <p>Max: {myDog[0].height_max} Cm</p>
              </div>
              <div className={style.container__altura}>
                <h4>Peso:</h4>
                  <p>Min: {myDog[0].weight_min} Kg</p>
                  <p>Max: {myDog[0].weight_max} Kg</p>
              </div>
              <div className={style.container__altura}>
                <h4>Tiempo de vida:</h4>
                  <p>Min: {myDog[0].life_time_min} Años</p>
                  <p>Max: {myDog[0].life_time_max} Años</p>
              </div>
              <div className={style.container__altura}>
                <h4>Temperaments: </h4>
                <p>{!myDog[0].createInBd ? myDog[0].temperament : myDog[0].Temperaments.map(e => e.name + " ")}</p>
              </div>
              <div className={style.contButton}>
                <Link to='/home'><button className={style.button}>Back</button></Link>
              </div>
            </div>

          </div>
          : <div className={style.loading}>
            <img src={load} alt="Imagen de espera" />
            <br />
            <p>Loading...</p>
          </div>
      }

    </div>
  )


}