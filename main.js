const path = require('path')
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      // Access Node.js from the renderer with a preload script​
      webPreferences: {
        preload: path.join(__dirname,"preload.js")
      }
    })
  
    // Load HTML
    win.loadFile('index.html')
  }

  // Create a Window
  app.whenReady().then(() => {
    createWindow()
  })

  // Quit the app when all windows are closed
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })