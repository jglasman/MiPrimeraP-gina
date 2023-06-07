function showAlert() {
  alert("Hola, este es un mensaje de alerta de Javascript");
}
document
  .querySelector("button.button-menu-toggle")
  .addEventListener("click", function () {
    document
      .querySelector(".nav-links")
      .classList.toggle("nav-links-responsive");
  });
