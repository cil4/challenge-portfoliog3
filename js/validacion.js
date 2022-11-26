//Haz tú validación en javascript acá
import { valida } from "./valida.js";

const inputs = document.querySelectorAll("input");


inputs.forEach((input)=>{
    input.addEventListener("blur", (input)=>{
      valida(input.target);  
    })
})