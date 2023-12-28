import style from "../Contact/Contac.module.css";

const Contact  = () =>{

    const whatsapp = "https://shorturl.at/dilTY ";
    const linkedin = "https://shorturl.at/hCJMZ";
    const github = "https://shorturl.at/gnO27";
    const email = "https://shorturl.at/cK347";

    return(
        <div className={style.container}>
        <div className={style.card}>        
        
          <img className={style.imagen} src={whatsapp} alt="imagen de whatsapp"/>

        </div>  

        <div className={style.card}>
                
          <img className={style.imagen} src={linkedin} alt="imagen de linkedin"/>

        </div>  

        <div className={style.card}>
    
          <img  className={style.imagen} src={github} alt="imagen de github"/>
        </div>  

        <div className={style.card}>
            
          <img  className={style.imagen} src={email} alt="imagen de email"/>
        </div>  
             
           
     </div>

    )
};


export default Contact;