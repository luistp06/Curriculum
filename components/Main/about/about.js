import "./about.css";
import data  from "../../../data/data";
export const aboutContent = () => `
<h2 id="sobremi">Sobre mi</h2>
<div >
<p id="parrafo"> ${data.aboutMe}</p>
<p id = "address"class="grey"> ${data.address}</p>
<a  id = "contact" href="mailto:luistp06@gmail.com">Contáctame</a>
 <img id="luisnoche"src=assets/luisnoche.jpeg> </img>
<ul id = "list"> </ul>  
</div>

`;
