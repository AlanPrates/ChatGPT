const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Desabilita o menu padrão do Electron
  Menu.setApplicationMenu(null);

  // Cria um novo menu personalizado
  const menuTemplate = [
    {
      label: 'Ações',
      submenu: [
        {
          label: 'Atualizar Página',
          click: () => {
            mainWindow.reload();
          }
        },
        {
          label: 'Meu GitHub',
          click: () => {
            shell.openExternal('https://github.com/AlanPrates');
          }
        }
      ]
    }
  ];

  // Cria o menu a partir do template
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  mainWindow.webContents.on('dom-ready', () => {
    mainWindow.webContents.insertCSS(`

    `);

    mainWindow.webContents.executeJavaScript(`

    `);
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
