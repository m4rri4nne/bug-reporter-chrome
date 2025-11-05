let recorder;
let stream;
let chunks = [];

chrome.runtime.onMessage.addListener(async (message) => {
  if (message.action === "start-recording") {
    await startRecording();
  } else if (message.action === "stop-recording") {
    stopRecording();
  }
});

async function startRecording() {
  try {
    stream = await navigator.mediaDevices.getDisplayMedia({
      video: { mediaSource: "screen" },
      audio: true
    });

    chunks = [];
    recorder = new MediaRecorder(stream, { mimeType: "video/webm" });

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
        saveAs: false
      });

      stream.getTracks().forEach((t) => t.stop());
    };

    recorder.start();
    console.log("🎬 Gravação iniciada");
  } catch (err) {
    console.error("Erro ao iniciar gravação:", err);
  }
}

function stopRecording() {
  if (recorder && recorder.state === "recording") {
    recorder.stop();
    console.log("🛑 Gravação parada");
  }
}
