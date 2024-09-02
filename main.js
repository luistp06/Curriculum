import './style.css'
import  {hero}  from "./components/hero/hero";
import  {header} from "./components/header/header";
import  {Main} from "./components/Main/Main";
import  {changePage} from "./components/Main/Main";
import  {changeTheme} from "./components/header/header";
import  {changeHero} from "./components/hero/hero";
import  {footer}  from "./components/footer/footer";



const Hero = document.createElement("section");
Hero.innerHTML=hero();
document.body.appendChild(Hero)
Hero.setAttribute("id","Hero")


const Header=document.createElement("header")
Header.innerHTML=header()
document.body.appendChild(Header)

const main =document.createElement("main")
document.body.appendChild(main)

            
           const about= document.createElement("section");
            main.appendChild(about)
            about.setAttribute("id","about")

            const pageBtn = document.createElement("button");
            main.appendChild(pageBtn)
            pageBtn.setAttribute("id","pageBtn")
            pageBtn.innerText= "Ver Experiencia"




            const content= document.createElement("div")
            content.setAttribute("id","content")
            main.appendChild(content)
            

            const projects= document.createElement("section");
            main.appendChild(projects)
            projects.setAttribute("id","projects")


const Footer=document.createElement("footer")
Footer.innerHTML=footer()
document.body.appendChild(Footer)

Main();
changePage();
changeTheme();
changeHero() ;
