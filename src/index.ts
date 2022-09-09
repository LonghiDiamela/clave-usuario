import "./styles.css";

let rotulo1=document.getElementById("rotulo1");
let rotulo2=document.getElementById("rotulo2");
let btnEnv=document.getElementById("btnEnv");
let dato1=document.getElementById("dato1");
let dato2=document.getElementById("dato2");
btnEnv.addEventListener("click",()=>{
  let usuario:string="Mariposa";
  let clave:string="MariposaBlanca";
  let usuarioIngresado:string=dato1.value;
  let claveIngresada:string=dato2.value;
  if (usuario===usuarioIngresado && clave===claveIngresada){
    console.log("clave correcta. Bienvenido",  `${usuario}`);
  } else {
    console.log("usuario o clave invalidos");
  }
});
