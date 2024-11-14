async function enviarPregunta() {
    const pregunta = document.getElementById("user-input").value;
    const respuestaDiv = document.getElementById("respuesta");
    
    respuestaDiv.innerHTML = "Cargando respuesta...";

    const respuesta = await fetch("/api/gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mensaje: pregunta })
    });

    const data = await respuesta.json();
    respuestaDiv.innerHTML = data.respuesta;
}