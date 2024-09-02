import "./experience.css";
import data  from "../../../data/data";
export const experienceContent = () => {
let experienceHTML = '<h2>Experiencia</h2>';

  
  data.workExperience.forEach((experience, index) => {
    experienceHTML += `
      <div id="work${index + 1}" class="experiencia">
        <h3>${experience.company}</h3>
        <h4 >${experience.position}</h4>
        <p class="grey">${experience.description}</p>
        <p class="grey">${experience.date}</p>
      </div>
    `;
  });

  return experienceHTML;
};