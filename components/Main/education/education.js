import "./education.css";
import data  from "../../../data/data";
export const educationContent = () => `
<h2>Educación</h2>
 <div id="formation1" class = "educacion">
      <h3 >${data.education.degree1}</h3>
      <h4 class="grey">${data.education.center1}</h4>
      <p class="grey">${data.education.graduationYear1}</p>
    </div>
    <div id="formation2" class = "educacion">
      <h3>${data.education.degree2}</h3>
      <h4 class="grey">${data.education.center2}</h4>
      <p class="grey">${data.education.graduationYear2}</p>
    </div>
    <div id="extra">
    <h3>Formación extra:</h3>
    <h4 class="grey">${data.education.relevantCourses}</h4>
    </div>
`;
