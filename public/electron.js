const { app, BrowserWindow, globalShortcut } = require('electron')

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        autoHideMenuBar: true,
        width: 1200,
        height: 700,
        webPreferences: {
            enableRemoteModule: true
        }
    })

    // and load the index.html of the app.
    mainWindow.loadURL('http://localhost:3000');

    globalShortcut.register('f5', function () {
        console.log('f5 is pressed')
        mainWindow.reload()
    })

    globalShortcut.register('CommandOrControl+R', function () {
        console.log('CommandOrControl+R is pressed')
        mainWindow.reload()
    })

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})