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
        "profesor": "Enrique Maya",
        "curso": "Javascript"
    },
    {
        "documento": 107090062,
        "nombre": "Lorena",
        "apellido": "Suarez",
        "edad": 29,
        "materias": " HTML, Css",
        "calificacion": 3.5,
        "foto": "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "profesor": "Roberto Romero",
        "curso": "Javascript"
    },
    {
        "documento": 123456789,
        "nombre": "Isabella",
        "apellido": "Rodriguez",
        "edad": 7,
        "materias": "Programacion",
        "calificacion": 4.8,
        "foto": "https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "profesor": "Roberto Romero",
        "curso": "Javascript"

    },

    {
      "documento": 1072643911,
      "nombre": "Wilson",
      "apellido": "Rodriguez",
      "edad": 38,
      "materias": "Programacion, HTML, Css",
      "calificacion": 2.5,
      "foto": "https://images.pexels.com/photos/2284233/pexels-photo-2284233.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "profesor": "Enrique Maya",
      "curso": "Javascript"
  },
  {
      "documento": 107090062,
      "nombre": "Lorena",
      "apellido": "Suarez",
      "edad": 29,
      "materias": " HTML, Css",
      "calificacion": 3.5,
      "foto": "https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "profesor": "Roberto Romero",
      "curso": "Javascript"
  },
  {
      "documento": 123456789,
      "nombre": "Isabella",
      "apellido": "Rodriguez",
      "edad": 7,
      "materias": "Programacion",
      "calificacion": 4.8,
      "foto": "https://images.pexels.com/photos/2530775/pexels-photo-2530775.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "profesor": "Enrique Maya",
      "curso": "Javascript"

  },
]


document.getElementById("formulario").addEventListener("submit", buscar);

function buscar(evt){
  evt.preventDefault();
  let datoBarra = document.getElementById("busqueda").value;

  estudiantes.filter((estudiante) =>{
    return estudiantes.nombre === datoBarra
  });

  dibujar(datoBarra);
}

function dibujar(nombre){
  document.querySelector("#contenedor").innerHTML = "";
  estudiantes.forEach((estudiante, i)=>{   
  document.querySelector("#contenedor").innerHTML += `<div class="card" style="width: 18rem;">
  
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

