function validar(){

    let contrasena = 123456;
    let usuario = "Silvio Rodriguez";

    if(document.form.password.value == contrasena && document.form.login.value == usuario){
    alert("Bienvenido Al colegio dEvf")
    window.location="index2.html";}
    else 
    alert("Datos Invalidados, registrate")
}

let estudiantes = [
    {
        "documento": 1072643911,
        "nombre": "Silvio",
        "apellido": "Rodriguez",
        "edad": 35,
        "materias": "Programacion, HTML, Css",
        "calificacion": 4.5,
        "foto": "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "profesor": "Enrique Maya"
        
    },
    {
        "documento": 107090062,
        "nombre": "Lorena",
        "apellido": "Suarez",
        "edad": 29,
        "materias": " HTML, Css",
        "calificacion": 3.5,
        "foto": "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "profesor": "Roberto Romero"
        
    },
    {
        "documento": 123456789,
        "nombre": "Isabella",
        "apellido": "Rodriguez",
        "edad": 7,
        "materias": "Programacion",
        "calificacion": 4.8,
        "foto": "https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "profesor": "Roberto Romero"
       

    },

    {
      "documento": 1072643911,
      "nombre": "Wilson",
      "apellido": "Rodriguez",
      "edad": 38,
      "materias": "Programacion, HTML, Css",
      "calificacion": 2.5,
      "foto": "https://images.pexels.com/photos/2284233/pexels-photo-2284233.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "profesor": "Enrique Maya"
      
  },
  {
      "documento": 107090062,
      "nombre": "Lorena",
      "apellido": "Suarez",
      "edad": 29,
      "materias": " HTML, Css",
      "calificacion": 3.5,
      "foto": "https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "profesor": "Roberto Romero"
    
  },
  {
      "documento": 123456789,
      "nombre": "Isabella",
      "apellido": "Rodriguez",
      "edad": 7,
      "materias": "Programacion",
      "calificacion": 4.8,
      "foto": "https://images.pexels.com/photos/5119214/pexels-photo-5119214.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "profesor": "Enrique Maya"
     

  },
  {
    "documento": 321564681,
    "nombre": "Carlos",
    "apellido": "Suarez",
    "edad": 28,
    "materias": "Programacion, Javascript, Css",
    "calificacion": 2.8,
    "foto": "https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "profesor": "Enrique Maya"


},
{
  "documento": 6584351654,
  "nombre": "Esther",
  "apellido": "Chacon",
  "edad": 67,
  "materias": "Fundamentos de programacion",
  "calificacion": 1.8,
  "foto": "https://images.pexels.com/photos/2530775/pexels-photo-2530775.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "profesor": "Enrique Maya"


},
{
  "documento": 123456789,
  "nombre": "Jhojan ",
  "apellido": "Torres",
  "edad": 18,
  "materias": "Html, Css",
  "calificacion": 3.0,
  "foto": "https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "profesor": "Roberto Romero"
 

},
{
  "documento": 3541431554,
  "nombre": "Maria",
  "apellido": "Lopez",
  "edad": 25,
  "materias": "Fundamentos de la Programacion",
  "calificacion": 5.0,
  "foto": "https://images.pexels.com/photos/2083751/pexels-photo-2083751.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "profesor": "Enrique Maya"


},
{
  "documento": 123456789,
  "nombre": "Carolina",
  "apellido": "Romo",
  "edad": 35,
  "materias": "Javascript",
  "calificacion": 4.8,
  "foto": "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "profesor": "Roberto Romero"
  

},
{
  "documento": 123456789,
  "nombre": "Esteban",
  "apellido": "Ramirez",
  "edad": 36,
  "materias": "Css, fundamentos de la Programacion",
  "calificacion": 2.3,
  "foto": "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "profesor": "Enrique Maya"
 

},
]


document.getElementById("formulario").addEventListener("submit", buscar,);
document.getElementById("boton").addEventListener("click",gradoA);
document.getElementById("boton2").addEventListener("click",gradoB);
document.getElementById("busqueda").addEventListener("keyup",buscar);

function gradoA(evt){
  evt.preventDefault();
  const auxa= estudiantes.filter((estudiante)=>{
        return estudiante.profesor == "Enrique Maya"
  });
  dibujarSecuencial(auxa);
}

function gradoB(evt){
  evt.preventDefault();
  const auxa= estudiantes.filter((estudiante)=>{
        return estudiante.profesor == "Roberto Romero"
  });
  dibujarSecuencial(auxa);
}

function buscar(evt){
  evt.preventDefault();
  let cadenaBuscar = document.getElementById("busqueda").value;


 const aux = estudiantes.filter((estudiante)=>{
    return estudiante.nombre.toLowerCase().includes(cadenaBuscar.toLowerCase())
  });
  
  dibujarSecuencial(aux);




}
  
function dibujarSecuencial(estudiantesFilter){
  document.querySelector("#contenedor").innerHTML ="";
  estudiantesFilter.forEach((estudiante, i)=>{
    document.querySelector("#contenedor").innerHTML +=`<div class="card" style="width: 18rem;">
    <img src="${estudiante.foto}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${estudiante.nombre} ${estudiante.apellido}</h5>
      <p class="card-text">${estudiante.materias}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Calificacion: ${estudiante.calificacion} </li>
      <li class="list-group-item">Edad: ${estudiante.edad}</li>
      <li class="list-group-item">Curso: ${estudiante.profesor}</li>
      <li class="list-group-item">Curso: ${estudiante.curso}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
    </div>`
  })
}

dibujarSecuencial(estudiantes);



function guardarDatos(){
  let datos1 = document.getElementById("inputDocumento").value
  let datos2 =document.getElementById("inputNombre").value
  let datos3 =document.getElementById("inputApellido").value
  let datos4 =document.getElementById("inputEdad").value
  let datos5 =document.getElementById("inputMaterias").value
  let datos6 =document.getElementById("inputcalificacion").value
  let datos7 =document.getElementById("inputFoto").value
  let datos8 =document.getElementById("inputProfesor").value
  let datos9 =document.getElementById("inputCurso").value
  
  estudiantes.push({"documentos":datos1,"nombre":datos2,"apellidos":datos3, "edad":datos4, "materias":datos5, "calificacion":datos6, "foto":datos7, "profesor":datos8, "curso":datos9})
  console.log(estudiantes)
  }















  