import "./Main.css";
import  {aboutContent}  from "./about/about";
import  {educationContent}  from "./education/education";
import  {experienceContent}  from "./experience/experience";
import  {projectsContent}  from "./projects/projects";
import data from "../../data/data"

    export const Main = () => {
        about.innerHTML=aboutContent();
        projects.innerHTML=projectsContent();
        content.innerHTML=educationContent()

        const list= document.getElementById("list")
        data.skills.forEach(skill => {
           const li = document.createElement("li")
            li.innerText= skill
        list.appendChild(li)
        })
        

    }
    export const changePage= () => {
        const pageBtn = document.querySelector("#pageBtn");
        pageBtn.addEventListener("click", () => {
          changeText();
        });
      };
      export const changeText = () => {
        const pageBtn = document.querySelector("#pageBtn");
        const content= document.querySelector("#content")
        if (pageBtn.innerText === "Ver Experiencia") {
          pageBtn.innerText = "Ver Educación";
          content.innerHTML= experienceContent()
        } else {
          pageBtn.innerText = "Ver Experiencia";
          content.innerHTML= educationContent()
        }
      };


 




  

  