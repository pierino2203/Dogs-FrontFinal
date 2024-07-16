import React from "react";
import style from '../styles/About.module.css'
import NavBar from "./NavBar";

export default function About(){
 return (
  <div className={style.caja}>
    <NavBar/>
    <div className={style.contenedor}>
      <div className={style.contTitle}>
        <h1 className={style.title}>About this proyect</h1>
      </div>
        <div className={style.contP}>
          <p>Pagina realizada para un Bootcamp-Full Stack Developer</p>
          <p>Aqui puedes encontrar informacion acerca de PERRITOS</p>
          <p>Construccion de pagina:</p>
          <ul>
            <li>Uso API <a href="https://thedogapi.com/" target="_blank" rel="noopener noreferrer" color="white">"The Dog Api"</a></li>
            <li>Guardar informacion en una base de datos.</li>
            <li>Mostrar detalles de perritos.</li>
            <li>Crear tu propio perrito</li>
            <li>Filtrar por raza</li>
            <li>Buscar Perrito por nombre</li>
            <li>Filtrar por temperamentos</li>
            <li>Orderdar perritos por peso</li>
          </ul>
        </div>
        <div>
          <div className={style.contTitle}>
           <h1 className={style.title}>Sobre mi</h1>
          </div>
          <div className={style.contInfo}> 
            <p>Mi nombre es Pierino Juncos, apasionado por la tecnologia, estoy en busca de trabajo como desarrollador</p>
            <p>Contac:</p>
            <ul>
              <li><a href="https://www.linkedin.com/in/pierino-esteban-juncos-9a4804240/" target="_blank" rel="noopener noreferrer" color="white">Linkedin</a></li>
              <li><a href="https://github.com/pierino2203" target="_blank" rel="noopener noreferrer" color="white">GitHub</a></li>
              <li>Mail: Pierinoe@gmail.com</li>
            </ul>
          </div>
          <div>
          </div>           
        <div>
      </div>
     </div>
    </div>  
  </div>
 )
}