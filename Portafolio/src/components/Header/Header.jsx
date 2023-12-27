
import style from "../Header/Header.module.css"
const Header = () =>{
const imagen1 = 'https://shorturl.at/tuzG0';
const react_image = 'https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge';
const javascript_image = 'https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge';
const node_image= 'https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge';
const express_image = 'https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=for-the-badge';
const posgresql_image = 'https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white&style=for-the-badge';
const sequelize_image = 'https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=white&style=for-the-badge';
const html_image = 'https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white&style=for-the-badge';
const redux_image = 'https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white&style=for-the-badge'
return(
   
<div className={style.container}>
  <img src={imagen1} alt="imagen de perfil"/>
  <div className={style.content}>
  <h1>Juan Guillermo Eraso -- Fullstack Developer - Ingeniero electrónico</h1>
  <img className={style.imagen} src={javascript_image} alt="imagen javascript"/>
  <img className={style.imagen} src={react_image} alt="imagen react"/>
  <img className={style.imagen} src={html_image} alt="imagen html"/>
  <img className={style.imagen} src={redux_image} alt="imagen redux"/>
  <img className={style.imagen} src={node_image} alt="imagen node"/>
  <img className={style.imagen} src={express_image} alt="imagen express"/>
  <img className={style.imagen} src={posgresql_image} alt="imagen postgresql"/>
  <img className={style.imagen} src={sequelize_image} alt="imagen sequelize"/> 
  
  </div>
 
</div>

 
  
 



 )



};


export default Header;