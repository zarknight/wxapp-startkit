exports = {}

new class AppMain {

  globalData = {
    userInfo: null
  }

  getUserInfo = () => {
    return new Promise((resolve, reject) => {
      let userInfo = this.globalData.userInfo

      if (userInfo) {
        resolve(userInfo)
      } else {
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                userInfo = this.globalData.userInfo = res.userInfo
                resolve(userInfo)
              }
            })
          }
        })
      }
    })
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
