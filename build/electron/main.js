"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var win;
var winURL = process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "file://" + __dirname + "/index.html";
function createWindow() {
    // Create the browser window.
    win = new electron_1.BrowserWindow({
        width: 1424,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
            preload: __dirname + '/preload.js'
        }
    });
    // and load the index.html of the app.
    win.loadURL(winURL);
    // Open the DevTools.
    win.webContents.openDevTools();
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.whenReady().then(createWindow);
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
electron_1.ipcMain.on('select-dir', function (event, arg) {
    console.log("SELECT DIR", arg);
    // const result = await dialog.showOpenDialog(win, {
    //   properties: ['openDirectory']
    // })
    // console.log('directories selected', result.filePaths)
    event.returnValue = "henlo";
});
