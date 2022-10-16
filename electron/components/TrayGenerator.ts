import { Tray, Menu, BrowserWindow, MenuItemConstructorOptions } from 'electron'
import { is } from 'electron-util'
import path from 'path'

export default class TrayGenerator {
  tray: Tray | null
  mainWindow: BrowserWindow
  isDev: boolean

  constructor(mainWindow: BrowserWindow) {
    this.tray = null
    this.mainWindow = mainWindow
    this.isDev = is.development

    this.setTitle = this.setTitle.bind(this)
  }

  getWindowPosition = () => {
    if (!this.tray) {
      return {
        x: 0,
        y: 0
      }
    }

    const windowBounds = this.mainWindow.getBounds()
    const trayBounds = this.tray.getBounds()
    const x = Math.round(trayBounds.x + trayBounds.width / 2 - windowBounds.width / 2)
    const y = Math.round(trayBounds.y + trayBounds.height)
    return { x, y }
  }

  showWindow = () => {
    const position = this.getWindowPosition()
    this.mainWindow.setPosition(position.x, position.y, false)
    this.mainWindow.show()
    this.mainWindow.setVisibleOnAllWorkspaces(true)
    this.mainWindow.focus()
    this.mainWindow.setVisibleOnAllWorkspaces(false)

    const blurHandler = () => {
      this.hideWindow()
      this.mainWindow.removeListener('blur', blurHandler)
    }

    if (!this.isDev) {
      this.mainWindow.addListener('blur', blurHandler)
    }
  }

  hideWindow = () => {
    this.mainWindow.hide()
  }

  toggleWindow = () => {
    if (this.mainWindow.isVisible()) {
      this.hideWindow()
    } else {
      this.showWindow()
    }
  }

  rightClickMenu = () => {
    const menu: MenuItemConstructorOptions[] = [
      {
        role: 'quit',
        accelerator: 'Command+Q'
      }
    ]
    this.tray?.popUpContextMenu(Menu.buildFromTemplate(menu))
  }

  createTray = () => {
    this.tray = new Tray(path.join(__dirname, '../../assets/IconTemplate.png'))
    this.tray.setIgnoreDoubleClickEvents(true)

    this.tray.on('click', this.toggleWindow)
    this.tray.on('right-click', this.rightClickMenu)

    this.setTitle('Noise Machine')
  }

  setTitle = (title: string) => {
    this.tray?.setTitle(title)
  }
}
