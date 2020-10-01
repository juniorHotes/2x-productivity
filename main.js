const electron = require('electron')
const { app, BrowserWindow, Menu, shell } = electron
const path = require('path')
const url = require('url')

const getMainMenu = require('./JS/mainMenu')

let mainWindow
// Create a new index window
const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1280,
    minWidth: 1280,
    minHeight: 720,
    center: true
  })

  mainWindow.webContents.openDevTools()

  // mainWindow.loadURL(...) loads any file using relative path.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, './HTML/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Overwrites default menu bar.
  Menu.setApplicationMenu(getMainMenu(mainWindow))

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// Listens for app to be ready.
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// For Mac, when user again opens our app, new window is created
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
