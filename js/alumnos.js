var alumnos=
[
{ "matricula": "20230001", "nombre": "Ana Martínez", "calificacion": 6 },
{ "matricula": "20230002", "nombre": "Luis García", "calificacion": 7 },
{ "matricula": "20230003", "nombre": "María Rodríguez", "calificacion": 5 },
{ "matricula": "20230004", "nombre": "Carlos López", "calificacion": 8 },
{ "matricula": "20230005", "nombre": "Laura Sánchez", "calificacion": 9 },
{ "matricula": "20230006", "nombre": "Jorge Hernández", "calificacion": 6 },
{ "matricula": "20230007", "nombre": "Mónica Jiménez", "calificacion": 7 },
{ "matricula": "20230008", "nombre": "Fernando Ruiz", "calificacion": 5 },
{ "matricula": "20230009", "nombre": "Lucía Díaz", "calificacion": 10 },
{ "matricula": "20230010", "nombre": "Sofía Morales", "calificacion": 8 },
{ "matricula": "20230011", "nombre": "David Torres", "calificacion": 4 },
{ "matricula": "20230012", "nombre": "Miguel Castillo", "calificacion": 7 },
{ "matricula": "20230013", "nombre": "Isabel Ramos", "calificacion": 9 },
{ "matricula": "20230014", "nombre": "Pedro Gutiérrez", "calificacion": 6 },
{ "matricula": "20230015", "nombre": "Raquel Romero", "calificacion": 7 },
{ "matricula": "20230016", "nombre": "Emilio Vargas", "calificacion": 8 },
{ "matricula": "20230017", "nombre": "Claudia Flores", "calificacion": 5 },
{ "matricula": "20230018", "nombre": "José Peña", "calificacion": 7 },
{ "matricula": "20230019", "nombre": "Sara Méndez", "calificacion": 8 },
{ "matricula": "20230020", "nombre": "Antonio Reyes", "calificacion": 9 },
{ "matricula": "20230021", "nombre": "Paula Ortiz", "calificacion": 6 },
{ "matricula": "20230022", "nombre": "Diego Silva", "calificacion": 5 },
{ "matricula": "20230023", "nombre": "Valeria Castro", "calificacion": 10 },
{ "matricula": "20230024", "nombre": "Sergio Rivas", "calificacion": 4 },
{ "matricula": "20230025", "nombre": "Andrea Navarro", "calificacion": 8 }
]

const btnMostrar = document.getElementById("idMostrar");
const Limpiar = document.getElementById("idLimpiar");

function realizarTabla(){
    let tabla = document.getElementById("tabla").querySelector("tbody");
    tabla.innerHTML = "";
    for(let con = 0; con < alumnos.length; con++){
        tabla.innerHTML += "<td>" + alumnos[con].matricula + "<td>" + alumnos[con].nombre + "<td>" + alumnos[con].calificacion;
    }
}

function limpiarTabla(){
    document.querySelector("tbody").innerHTML = "";
    document.getElementById("promedio").textContent = "";
    document.getElementById("aprobados").textContent = "";
    document.getElementById("reprobados").textContent = "";
}

function calPromedio(){
    let suma = 0;
    for(let con = 0; con < alumnos.length; con++){
        suma += alumnos[con].calificacion;
    }
    let pro = suma / 25;
    document.getElementById("promedio").textContent = "Promedio Grupal: " + pro;
}

function calcularAprobados() {
    let aprobados = 0;
    let reprobados = 0;
    
    for (let con = 0; con < alumnos.length; con++) {
        if (alumnos[con].calificacion >= 7) {
            aprobados++;
        } else {
            reprobados++;
        }
        document.getElementById("aprobados").textContent = "Numero de Aprobados: " + aprobados;
        document.getElementById("reprobados").textContent = "Numero de Reprobados: " + reprobados;
    }
}

btnMostrar.addEventListener("click", realizarTabla);
btnMostrar.addEventListener("click", calPromedio);
btnMostrar.addEventListener("click", calcularAprobados);
Limpiar.addEventListener("click", limpiarTabla);

