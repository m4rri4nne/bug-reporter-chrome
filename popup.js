const loginBtn = document.getElementById("loginBtn");
const statusEl = document.getElementById("status");

loginBtn.addEventListener("click", () => {
  statusEl.textContent = "Conectando ao GitHub...";
  chrome.runtime.sendMessage({ action: "loginWithGitHub" }, (response) => {
    if (response?.success) {
      statusEl.textContent = "✅ Login bem-sucedido!";
    } else {
      statusEl.textContent = "❌ Falha na autenticação.";
    }
  });
});
