exports = {}

const util = require('./utils/util.js')

new class AppMain {

  globalData = {
    userInfo: null
  }

  constructor() {
    App(this)
  }

  onLaunch() {
    console.log("app launch")

    let logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  }

  onShow() {
    console.log("app show:", this.getCurrentPage())
  }

  onHide() {
    console.log("app hide:", this.getCurrentPage())
  }

}
