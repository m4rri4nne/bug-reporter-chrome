let recorder;
let stream;
let chunks = [];

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const statusText = document.getElementById("status");

startBtn.addEventListener("click", async () => {
  try {
    // Solicita permissão para capturar a tela
    stream = await navigator.mediaDevices.getDisplayMedia({
      video: { mediaSource: "screen" },
      audio: true,
    });

    chunks = [];
    recorder = new MediaRecorder(stream);

    recorder.ondataavailable = (e) => chunks.push(e.data);

    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      const filename = `bug-report-${new Date()
        .toISOString()
        .replace(/[:.]/g, "-")}.webm`;

      chrome.downloads.download({
        url,
        filename,
        saveAs: false,
      });

      stream.getTracks().forEach((t) => t.stop());
      statusText.textContent = "🎬 Gravação finalizada. Vídeo salvo!";
    };

    recorder.start();
    console.log("🎥 Gravação iniciada");

    startBtn.disabled = true;
    stopBtn.disabled = false;
    statusText.textContent = "🔴 Gravando...";
  } catch (err) {
    console.error("Erro ao iniciar gravação:", err);
    alert("Erro ao iniciar gravação: " + err.message);
  }
});

stopBtn.addEventListener("click", () => {
  if (recorder && recorder.state === "recording") {
    recorder.stop();
    console.log("🛑 Gravação parada");

    startBtn.disabled = false;
    stopBtn.disabled = true;
    statusText.textContent = "⏹️ Finalizando...";
  }
});
