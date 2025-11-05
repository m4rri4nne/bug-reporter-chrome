const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

startBtn.addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "start-recording" });
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "stop-recording" });
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
