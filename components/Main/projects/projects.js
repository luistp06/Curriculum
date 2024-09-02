import "./projects.css";
import data  from "../../../data/data";
export const projectsContent = () => {
let projectsHTML = '<h2> Mis Proyectos</h2>';
projectsHTML += '<div id="projectsContainer">';
      
      data.projects.forEach((project, index) => {
        projectsHTML += `
          <div id="project${index + 1}" class= "proyecto">
          <img src=${project.preview} alt=${project.title}/>
            <h3>${project.title}</h3>
            <h4 class="grey">${project.description}</h4>
            <a class="grey" href="${project.link}"> Saber más...</a>
          </div>
        `;
      });
      projectsHTML += '</div>';
      return projectsHTML;
    };
