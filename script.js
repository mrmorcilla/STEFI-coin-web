let balance = 1000;

function updateDisplay() {
  document.getElementById("balance-amount").innerText = `$${balance.toFixed(2)}`;
}

function showMessage(msg) {
  document.getElementById("message").innerText = msg;
}

// Loader functions
function showLoader() {
  const loader = document.getElementById('loader');
  const spinner = loader.querySelector('.loader-spinner');
  const checkmark = loader.querySelector('.loader-checkmark');
  const text = document.getElementById('loader-text');

  loader.classList.add('active');
  loader.style.backgroundColor = 'rgba(0, 123, 255, 0.9)';
  spinner.style.display = 'block';
  checkmark.style.display = 'none';
  text.textContent = 'Procesando...';
}

function completeLoader(callback) {
  const loader = document.getElementById('loader');
  const spinner = loader.querySelector('.loader-spinner');
  const checkmark = loader.querySelector('.loader-checkmark');
  const text = document.getElementById('loader-text');

  // Cambiar a verde con tilde
  setTimeout(() => {
    loader.style.backgroundColor = 'rgba(40, 167, 69, 0.95)';
    spinner.style.display = 'none';
    checkmark.style.display = 'block';
    text.textContent = '¡Completado!';

    // Ocultar después de un segundo
    setTimeout(() => {
      loader.classList.remove('active');
      if (typeof callback === "function") callback();
    }, 1000);
  }, 2000); // espera "procesando"
}

// Funciones de operación
function transfer() {
  const amount = prompt("¿Cuánto quieres transferir?");
  const value = parseFloat(amount);
  if (isNaN(value) || value <= 0) {
    return showMessage("Monto inválido.");
  }
  if (value > balance) {
    return showMessage("Saldo insuficiente.");
  }
  showLoader();
  completeLoader(() => {
    balance -= value;
    updateDisplay();
    showMessage(`Has transferido $${value.toFixed(2)}`);
  });
}

function addFunds() {
  const amount = prompt("¿Cuánto quieres recargar?");
  const value = parseFloat(amount);
  if (isNaN(value) || value <= 0) {
    return showMessage("Monto inválido.");
  }
  showLoader();
  completeLoader(() => {
    balance += value;
    updateDisplay();
    showMessage(`Has recargado $${value.toFixed(2)}`);
  });
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
  showLoader();
  completeLoader(() => {
    balance -= value;
    updateDisplay();
    showMessage(`Has retirado $${value.toFixed(2)}`);
  });
}
