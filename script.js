document.getElementById("signup").addEventListener("submit", function(event) {
    event.preventDefault();
    // Aquí podrías agregar la lógica para registrar al usuario
    // Por ahora, simplemente mostraremos el formulario de inicio de sesión
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
});

document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();
    // Aquí podrías agregar la lógica para iniciar sesión del usuario
    // Por ahora, simplemente mostraremos el horario de clases
    document.getElementById("login-form").style.display = "none";
    document.getElementById("schedule").style.display = "block";
});

document.getElementById("classroom").addEventListener("change", function() {
    // Aquí podrías agregar la lógica para obtener el horario de clases correspondiente al aula seleccionada
    // Por ahora, simplemente mostraremos un horario de clases fijo
    var classroom = document.getElementById("classroom").value;
    var schedule = {
        "101": ["Matemáticas - 9:00 AM", "Historia - 11:00 AM"],
        "102": ["Ciencias - 10:00 AM", "Literatura - 1:00 PM"]
    };
    var classSchedule = schedule[classroom].join("<br>");
    document.getElementById("class-schedule").innerHTML = classSchedule;
});

document.getElementById("logout").addEventListener("click", function() {
    // Aquí podrías agregar la lógica para cerrar sesión del usuario
    // Por ahora, simplemente mostraremos el formulario de inicio de sesión
    document.getElementById("schedule").style.display = "none";
    document.getElementById("login-form").style.display = "block";
});
