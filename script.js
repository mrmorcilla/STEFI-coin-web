let balance = 1000;

function updateDisplay() {
  document.getElementById("balance-amount").innerText = `$${balance.toFixed(2)}`;
}

function showMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function transfer() {
  const amount = prompt("¿Cuánto quieres transferir?");
  const value = parseFloat(amount);
  if (isNaN(value) || value <= 0) {
    return showMessage("Monto inválido.");
  }
  if (value > balance) {
    return showMessage("Saldo insuficiente.");
  }
  balance -= value;
  updateDisplay();
  showMessage(`Has transferido $${value.toFixed(2)}`);
}

function addFunds() {
  const amount = prompt("¿Cuánto quieres recargar?");
  const value = parseFloat(amount);
  if (isNaN(value) || value <= 0) {
    return showMessage("Monto inválido.");
  }
  balance += value;
  updateDisplay();
  showMessage(`Has recargado $${value.toFixed(2)}`);
}

function withdraw() {
  const amount = prompt("¿Cuánto quieres retirar?");
  const value = parseFloat(amount);
  if (isNaN(value) || value <= 0) {
    return showMessage("Monto inválido.");
  }
  if (value > balance) {
    return showMessage("Saldo insuficiente.");
  }
  balance -= value;
  updateDisplay();
  showMessage(`Has retirado $${value.toFixed(2)}`);
}
