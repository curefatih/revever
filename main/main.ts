import { app, BrowserWindow, ipcMain, dialog } from 'electron'
import * as path from 'path';
// import getRepo from './functions/getRepo';
import getLogs from './functions/getLogs';
import getFiles from './functions/getFiles';
// import getRepo from './functions/getRepo';

let win: BrowserWindow;
const winURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `file://${__dirname}/index.html`;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1424,
    height: 720,
    // minHeight: 230,
    // minWidth: 540,
    webPreferences: {
      nodeIntegration: true,
      preload: __dirname + '/preload.js'
    },
    frame: process.env.NODE_ENV === "development" ? true : false
  })

  // and load the index.html of the app.
  win.loadURL(winURL)

  // Open the DevTools.
  win.webContents.openDevTools()

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on('add-source-dir', async (event, arg) => {
  console.log("SELECT DIR", arg);
  const result = await dialog.showOpenDialog(win, {
    properties: ['openDirectory']
  })
  console.log('directories selected', result.filePaths)

  if (!result.filePaths.length) {
    event.returnValue = { status: 0, message: "No folder selected" }
    return;
  }

  // TODO: check data first and return if its valid.
  event.returnValue = { status: 1, message: "Opened folder", data: result.filePaths[0] };
})

ipcMain.on('get-logs', async (event, repoPath) => {
  console.log("getLogs", repoPath);
  // const result = await dialog.showOpenDialog(win, {
  //   properties: ['openDirectory']
  // })
  // console.log('directories selected', result.filePaths)

  // if (!result.filePaths.length) {
  //   event.returnValue = { status: 0, message: "No folder selected" }
  //   return;
  // }

  getLogs(repoPath)
    .then(res => {
      event.returnValue = { status: 1, message: "Success", data: res };
    })
    .catch(err => {
      event.returnValue = {
        status: -1,
        message: "Error while opening reposity:" + err.message
      }
    })

})

ipcMain.on('get-files', async (event, repo: { path: string, sha: string }) => {
  console.log("getFiles", repo);
  // const result = await dialog.showOpenDialog(win, {
  //   properties: ['openDirectory']
  // })
  // console.log('directories selected', result.filePaths)

  // if (!result.filePaths.length) {
  //   event.returnValue = { status: 0, message: "No folder selected" }
  //   return;
  // }
  getFiles(repo.path, repo.sha)
    .then(res => {
      event.returnValue = { status: 1, message: "Success", data: res }
    })
    .catch(err => {
      event.returnValue = { status: 0, message: "Error while getting files:" + err.message }
    })




})