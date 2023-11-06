// Configura la URL de la API de feriados
const apiUrl = "https://nolaborables.com.ar/api/v2/feriados/2023";

// Elementos HTML
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const feriadoInfo = document.getElementById("feriadoInfo");
const motivo = document.getElementById("motivo");
const fecha = document.getElementById("fecha");

// Función para obtener y mostrar el próximo feriado
async function obtenerProximoFeriado() {
    // Obtiene la contraseña ingresada por el usuario
    const password = passwordInput.value;

    // Realiza la autenticación (puedes comparar la contraseña con una variable de entorno en Vercel)
    if (password === "ucasal123") {
        // Realiza la solicitud a la API de feriados
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Encuentra el próximo feriado
        const proximoFeriado = calcularProximoFeriado(data);

        // Muestra la información del próximo feriado
        motivo.textContent = proximoFeriado.motivo;
        fecha.textContent = proximoFeriado.fecha;
        feriadoInfo.style.display = "block";
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
}

// Agrega un manejador de eventos al botón de inicio de sesión
loginBtn.addEventListener("click", obtenerProximoFeriado);