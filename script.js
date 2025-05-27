document.getElementById("formContato").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Obrigado! Sua mensagem foi enviada.");
  this.reset();
});
