import "./header.css";

export const header= () => `
<nav>
<h2>Luis Timón</h2>
<ul>
    <li class="prescindible">
        <a href="#about" id="aboutlink" >Sobre mí</a>
    </li>
    <li class="prescindible">
        <a href="#content" id="Educationlink" >Educación</a>
    </li>
    <li class="prescindible">
        <a href="#content" id="experincelink" >Experiencia</a>
    </li>
     <li class="prescindible">
        <a href="#projects" id="proyectlink">Proyectos</a>
    </li>
    <li>
        <button id="themeBtn">☀</button>
    </li>
</ul>
</nav>
 `

 export const changeTheme = () => {
    const themeBtn = document.querySelector("#themeBtn");
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      changeText();
    });
  };
  
  export const changeText = () => {
    const themeBtn = document.querySelector("#themeBtn");
    if (themeBtn.innerText === "☀") {
      themeBtn.innerText = "☾";
    } else {
      themeBtn.innerText = "☀";
    }
  };