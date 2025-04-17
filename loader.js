
let EJS_player = "#game";
let EJS_core = "gba"; // You can change this to "nes", "snes", etc.

document.getElementById('romInput').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function() {
    const blob = new Blob([reader.result]);
    const blobUrl = URL.createObjectURL(blob);
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.emulatorjs.com/loader.html?core=${EJS_core}&rom=${blobUrl}`;
    iframe.width = 800;
    iframe.height = 600;
    const container = document.querySelector(EJS_player);
    container.innerHTML = '';
    container.appendChild(iframe);
  };
  reader.readAsArrayBuffer(file);
});
