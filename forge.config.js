module.exports = {
  packagerConfig: {
    name: "chatGPT", // Nome do aplicativo
    executableName: "chatGPT", // Nome do executável
    icon: "images/icon.png", // Caminho para o ícone do aplicativo
  },
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "vincelwt", // Proprietário do repositório no GitHub
          name: "chatGPT", // Nome do repositório no GitHub
        },
        prerelease: true, // Marca as versões como pré-lançamento no GitHub
      },
    },
  ],
  rebuildConfig: {}, // Configurações para reconstrução (se necessário)
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "chatGPT", // Nome do aplicativo para o Squirrel
        setupExe: "ChatGPT Installer.exe", // Nome do instalador para Windows
        setupIcon: "images/icon.png", // Ícone do instalador para Windows
      },
    },
    {
      name: "@electron-forge/maker-deb",
      config: {}, // Configurações para pacotes Debian (Linux)
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {}, // Configurações para pacotes RPM (Linux)
    },
  ],
};
