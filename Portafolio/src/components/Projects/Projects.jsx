
import style from "../Projects/Projects.module.css";

const Projects = () =>{

  const pokemon = "https://shorturl.at/bck13";
  const flipante = "https://shorturl.at/cCOT3";
  const rick = "https://shorturl.at/tBQUZ";
  const crud = "https://shorturl.at/bgHV1";

  return (
     <div className={style.container}>
        <div className={style.card}>
          <h1>Pokemon</h1>
        
          <img className={style.imagen} src={pokemon} alt="imagen de pokemon"/>

        </div>  

        <div className={style.card}>
          <h1>Rick and Morty </h1>       
          <img className={style.imagen} src={rick} alt="imagen de rick"/>

        </div>  

        <div className={style.card}>
          <h1>Espacio Flipante</h1>          
          <img  className={style.imagen} src={flipante} alt="imagen de flipante"/>
        </div>  

        <div className={style.card}>
          <h1>CRUD Users</h1>        
          <img  className={style.imagen} src={crud} alt="imagen de crud"/>
        </div>  
             
           
     </div>

  )

};

export default Projects;