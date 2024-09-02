import "./hero.css";

 export const hero = () => `
 <button id =changeHero>
  <div id = "text">
  <h1>LUIS TIMÓN</h1>
  <h2 id ="heroh2">Web/App Developer</h2>
   </div>
  <div id = "image">
    <img id="luis"src=assets/luis2.png> 
    </div>
    </button>
    
`



export const changeHero = () => {
  const Hero =document.querySelector("#Hero")
  const changehero = document.querySelector("#changeHero");
  changehero.addEventListener("click", () => {
    Hero.classList.toggle("invert");
  });
};


