function volverInicio(){
    document.getElementById("titulo").style.display = "block";
    document.getElementById("conductor").style.display = "none";
    document.getElementById("vehiculo").style.display = "none";
    document.getElementById("datos").style.display = "none";

    document.getElementById("botonVolver").style.display = "none";

    document.querySelectorAll(".botonesPrincipales").forEach(function(boton){
        boton.style.display = "inline-block";
    });

    document.getElementById("botonVolver").style.display = "none";
}

function display(){
    document.getElementById("titulo").style.display = "block";
    document.getElementById("conductor").style.display = "none";
    document.getElementById("vehiculo").style.display = "none";
    document.getElementById("datos").style.display = "none";
}

function crearConductor(){
    document.getElementById("titulo").style.display = "none";
    document.getElementById("conductor").style.display = "block";
    document.getElementById("vehiculo").style.display = "none";
    document.getElementById("datos").style.display = "none";

    document.getElementById("botonVolver").style.display = "inline-block";

    document.querySelectorAll(".botonesPrincipales").forEach(function(boton){
        if (boton.id != "botonVolver") {
            boton.style.display = "none";
        }
    });
}

function crearVehiculo(){
    document.getElementById("titulo").style.display = "none";
    document.getElementById("conductor").style.display = "none";
    document.getElementById("vehiculo").style.display = "block";
    document.getElementById("datos").style.display = "none";

    document.getElementById("botonVolver").style.display = "inline-block";

    document.querySelectorAll(".botonesPrincipales").forEach(function(boton){
        if (boton.id != "botonVolver") {
            boton.style.display = "none";
        }
    });
}


function mostrarDatos(){
    document.getElementById("titulo").style.display = "none";
    document.getElementById("conductor").style.display = "none";
    document.getElementById("vehiculo").style.display = "none";
    document.getElementById("datos").style.display = "block";

    document.getElementById("botonVolver").style.display = "inline-block";

    document.querySelectorAll(".botonesPrincipales").forEach(function(boton){
        if (boton.id != "botonVolver") {
            boton.style.display = "none";
        }
    });

    filtrarDatos("TODO");
}










function agregarConductor() {

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let carnet = document.getElementById("carnet").value;
    let seguro = document.getElementById("seguro").value;

    let fila = `
        <tr>
            <td>${nombre}</td>
            <td>${edad}</td>
            <td>${carnet}</td>
            <td>${seguro}</td>
        </tr>
    `;

    document.getElementById("lista").innerHTML += fila;
}

function agregarVehiculo() {

    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let patente = document.getElementById("patente").value;
    let tipo = document.getElementById("tipo").value;
    let seguro = document.getElementById("seguroVehiculo").value;

    let fila = `
        <tr>
            <td>${marca}</td>
            <td>${modelo}</td>
            <td>${patente}</td>
            <td>${tipo}</td>
            <td>${seguro}</td>
        </tr>
    `;

    document.getElementById("vehiculos").innerHTML += fila;
}


function borrarTodosConductores() {
    if (confirm("¿Estás seguro de que querés borrar todos los conductores?")) {
        document.getElementById("lista").innerHTML = "";
        document.getElementById("datosConductores").innerHTML = "";
    }
}

function borrarTodosVehiculos() {
    if (confirm("¿Estás seguro de que querés borrar todos los vehículos?")) {
        document.getElementById("vehiculos").innerHTML = "";
        document.getElementById("datosVehiculos").innerHTML = "";
    }
}













function filtrarDatos(filtro){

    let conductores = document.querySelectorAll("#lista tr");
    let vehiculos = document.querySelectorAll("#vehiculos tr");

    let tablaConductores = document.getElementById("datosConductores");
    let tablaVehiculos = document.getElementById("datosVehiculos");

    tablaConductores.innerHTML = "";
    tablaVehiculos.innerHTML = "";

    // Filtrar conductores
    conductores.forEach(function(fila){

        let celdas = fila.querySelectorAll("td");

        if (celdas.length === 0) return;

        let carnet = celdas[2].textContent.trim();
        let seguro = celdas[3].textContent.trim().toLowerCase();

        let mostrar = false;

        if (filtro === "TODO") {
            mostrar = true;
        } else if (filtro === "A1" || filtro === "A2" || filtro === "A3") {
            mostrar = carnet === filtro;
        } else if (filtro === "Seguro") {
            mostrar = seguro === "si";
        }

        if (mostrar) {
            tablaConductores.appendChild(fila.cloneNode(true));
        }
    });

    // Filtrar vehículos
    vehiculos.forEach(function(fila){

        let celdas = fila.querySelectorAll("td");

        if (celdas.length === 0) return;

        let carnet = celdas[3].textContent.trim();
        let seguro = celdas[4].textContent.trim().toLowerCase();

        let mostrar = false;

        if (filtro === "TODO") {
            mostrar = true;
        } else if (filtro === "A1" || filtro === "A2" || filtro === "A3") {
            mostrar = carnet === filtro;
        } else if (filtro === "Seguro") {
            mostrar = seguro === "si";
        }

        if (mostrar) {
            tablaVehiculos.appendChild(fila.cloneNode(true));
        }
    });
}
