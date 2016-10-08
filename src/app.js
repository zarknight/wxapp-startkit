exports = {}

const util = require('./utils/util.js')

new class AppMain {

  globalData = {
    userInfo: null
  }

  getUserInfo = () => {
    let userInfo = this.globalData.userInfo

    if (userInfo) {
      return new Promise((resolve, reject) => resolve(userInfo))

    } else {
      return util.wxPromisify(wx.login)().then(() => {
        return util.wxPromisify(wx.getUserInfo)()
      }).then((res) => {
        let info = this.globalData.userInfo = res.userInfo
        return info
      })
    }
  }

  constructor() {
    App(this)
  }

  onLaunch() {
    let logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  }

  onShow() {
    console.log("show:", this.getCurrentPage())
  }

  onHide() {
    console.log("hide:", this.getCurrentPage())
  }

}
