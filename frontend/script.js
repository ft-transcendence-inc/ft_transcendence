document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#myButton");
  const message = document.querySelector("#message");

  button.addEventListener("click", () => {
    message.textContent = "Button was clicked!";
  });
});
