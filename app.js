const {app, BrowserWindow} = require("electron");
const url = require("url");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width:1200,
    height:1000,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    autoHideMenuBar: true
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, '/dist/MAS/index.html'),
      protocol: "file:",
      slashes: true
    })
  );

  mainWindow.webContents.openDevTools({
    mode: "detach"
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
