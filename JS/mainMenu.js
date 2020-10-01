const { app, Menu } = require('electron')

const getMainMenu = mainWindow => {
  const mainMenuTemplate = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Quit',
          accelerator: process.platform === 'darwin' ? 'Command + Q' : 'Ctrl + Q',
          click() {
            app.quit()
          }
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Toggle Dev Tools',
          accelerator: process.platform === 'darwin' ? 'Command + Shift + I' : 'Ctrl + Shift + I',
          click() {
            mainWindow.webContents.toggleDevTools()
          }
        }
      ]
    },
    {
      label: 'Contribute',
      submenu: [
        {
          label: 'GitHub',
          click: async () => {
            await shell.openExternal('https://github.com/clubgamma/2x-productivity')
          }
        },
        {
          label: 'Hacktoberfest',
          click: async () => {
            await shell.openExternal('https://clubgamma.github.io/hacktoberfest')
          }
        },
        {
          label: 'Club Gamma',
          click: async () => {
            await shell.openExternal('https://clubgamma.github.io')
          }
        }
      ]
    }
  ]

  return Menu.buildFromTemplate(mainMenuTemplate)
}

module.exports = getMainMenu
