var alumnos=
[
{ "matricula": "20230001", "nombre": "Ana Martínez", "materia": "Programacion Web", "calificacion": 6 },
{ "matricula": "20230002", "nombre": "Luis García", "materia": "Programacion Web", "calificacion": 7 },
{ "matricula": "20230003", "nombre": "María Rodríguez", "materia": "Programacion Web", "calificacion": 5 },
{ "matricula": "20230004", "nombre": "Carlos López", "materia": "Programacion Web", "calificacion": 8 },
{ "matricula": "20230005", "nombre": "Laura Sánchez", "materia": "Programacion Web", "calificacion": 9 },
{ "matricula": "20230006", "nombre": "Jorge Hernández", "materia": "Programacion Web", "calificacion": 6 },
{ "matricula": "20230007", "nombre": "Mónica Jiménez", "materia": "Programacion Web", "calificacion": 7 },
{ "matricula": "20230008", "nombre": "Fernando Ruiz", "materia": "Programacion Web", "calificacion": 5 },
{ "matricula": "20230009", "nombre": "Lucía Díaz", "materia": "Programacion Web", "calificacion": 10 },
{ "matricula": "20230010", "nombre": "Sofía Morales", "materia": "Programacion Web", "calificacion": 8 },
{ "matricula": "20230011", "nombre": "David Torres", "materia": "Programacion Web", "calificacion": 4 },
{ "matricula": "20230012", "nombre": "Miguel Castillo", "materia": "Programacion Web", "calificacion": 7 },
{ "matricula": "20230013", "nombre": "Isabel Ramos", "materia": "Programacion Web", "calificacion": 9 },
{ "matricula": "20230014", "nombre": "Pedro Gutiérrez", "materia": "Programacion Web", "calificacion": 6 },
{ "matricula": "20230015", "nombre": "Raquel Romero", "materia": "Programacion Web", "calificacion": 7 },
{ "matricula": "20230016", "nombre": "Emilio Vargas", "materia": "Programacion Web", "calificacion": 8 },
{ "matricula": "20230017", "nombre": "Claudia Flores", "materia": "Programacion Web", "calificacion": 5 },
{ "matricula": "20230018", "nombre": "José Peña", "materia": "Programacion Web", "calificacion": 7 },
{ "matricula": "20230019", "nombre": "Sara Méndez", "materia": "Programacion Web", "calificacion": 8 },
{ "matricula": "20230020", "nombre": "Antonio Reyes", "materia": "Programacion Web", "calificacion": 9 },
{ "matricula": "20230021", "nombre": "Paula Ortiz", "materia": "Programacion Web", "calificacion": 6 },
{ "matricula": "20230022", "nombre": "Diego Silva", "materia": "Programacion Web", "calificacion": 5 },
{ "matricula": "20230023", "nombre": "Valeria Castro", "materia": "Programacion Web", "calificacion": 10 },
{ "matricula": "20230024", "nombre": "Sergio Rivas", "materia": "Programacion Web", "calificacion": 4 },
{ "matricula": "20230025", "nombre": "Andrea Navarro", "materia": "Programacion Web", "calificacion": 8 }
]

const btnMostrar = document.getElementById("idMostrar");
const Limpiar = document.getElementById("idLimpiar");

function realizarTabla(){
    let tabla = document.getElementById("tabla").querySelector("tbody");
    tabla.innerHTML = "";
    for(let con = 0; con < alumnos.length; con++){
        tabla.innerHTML += "<td>" + alumnos[con].matricula + "<td>" + alumnos[con].nombre + "<td>" + alumnos[con].materia + "<td>" + alumnos[con].calificacion;
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

