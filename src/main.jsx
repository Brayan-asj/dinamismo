import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // 1. Crear contenido principal
    const container = document.createElement('div');
    container.classList.add("container");
    body.appendChild(container);

    // 2. Crear el formulario de inicio de sesion
    const form = document.createElement("form");
    form.innerHTML = `
        <h2>Inicio de Sesión</h2>
        <input type="text" id="username" placeholder="Usuario" required>
        <input type="password" id="password" placeholder="Contraseña" required>
        <button type="submit">Ingresar</button>
        <p id="error-msg" style="color: red; display: none;">Usuario o contraseña incorrectos</p>
    `;

    container.appendChild(form);

    //Validaciones en tiempo real
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username.length < 7 || password.length < 10) {
            document.getElementById("error-msg").style.display = "block";
        }else{
            alert("Inicio de sesion exitoso");
            document.getElementById("error-msg").style.display = "none";
        }
    });

    //3. boton para cambiar le tema
    const themeButton = document.createElement("button");
    themeButton.textContent = "Cambiar Tema";
    container.appendChild(themeButton);

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // 4. Seccion de tarjetas personalizadas
    const cardSection = document.createElement("div");
    cardSection.classList.add("card-section");
    container.appendChild(cardSection);

    const addCardButton = document.createElement("button");
    addCardButton.textContent = "Agregar Tarjeta";
    container.appendChild(addCardButton);

    addCardButton.addEventListener("click", () => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <p>Tarjeta Personalizada</p>
            <button class="remove-card">Eliminar</button>
        `;
        cardSection.appendChild(card);

        // Evento para eliminar la tarjeta
        card.querySelector(".remove-card").addEventListener("click", () => {
            card.remove();
        });
    });
});