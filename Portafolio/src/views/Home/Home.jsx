import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/footer/footer";


import style from "../Home/Home.module.css";

const Home = ()=>{

    return(
      <div className={style.homeStyle}>   
    
       <Header/>
       <About/>
       <Projects/>
       <Contact/>
       <Footer/>    
       </div>

     
   
      
    )
};

export default Home ;