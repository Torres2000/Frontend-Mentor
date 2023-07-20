let mensajeError = document.getElementById("error");
let email = document.getElementById("email");
let btn = document.getElementById("btn-suscribir");
let main = document.getElementById("main");
let confirmacion = document.getElementById("confirmacion");
email.addEventListener("input", () => {
  const textoCorreo = email.value;
  const valueCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (valueCorreo.test(textoCorreo)) {
    mensajeError.style.display = "none";
    email.style.background = "var(--White)";
    email.style.borderColor = "var(--Grey)";
    email.style.color = "var(--Dark-Slate-Grey)";
    btn.classList.add("active");
    btn.classList.remove("disable");
    document.getElementById("btn-suscribir").addEventListener("click", () => {
      main.style.display = "none";
      confirmacion.style.display = "flex";
    });
  } else {
    mensajeError.style.display = "block";
    email.style.background = "var(--Tomato2)";
    email.style.borderColor = "var(--Tomato)";
    email.style.color = "var(--Tomato)";
    btn.classList.add("disable");
    btn.classList.remove("active");
  }
});
