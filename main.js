// main.js
const { app, BrowserWindow } = require("electron");
const path = require("path");
const { exec } = require("child_process");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadURL("http://localhost:3000");
}

app.whenReady().then(() => {
  // Запустить Express-сервер в отдельном процессе
  exec("node server.js", (err, stdout, stderr) => {
    if (err) {
      console.error("Failed to start server:", err);
      return;
    }
    console.log("Server output:", stdout);
  });

  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
