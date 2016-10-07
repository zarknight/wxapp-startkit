const app = getApp()

new class IndexPage {

  data = {
    motto: 'Hello World',
    userInfo: {}
  }

  // 微信小程序(WAService.js)用hasOwnProperty进行bind的事件处理函数检测，
  // 通过定义方法的方式将不会被检测到，必须以定义属性的方式才能被检测到：

  onButtonTap = ()=> {
    console.log('... button tap ...')
  }

  onViewTap = () => {
    wx.navigateTo({url: '../logging/logging'})
  }

  constructor() {
    Page(this)
  }

  onLoad() {
    console.log(">>> page:onLoad", app)
    app.getUserInfo().then((userInfo) => {
      this.setData({userInfo: userInfo})
    })
  }

  onReady() {
    console.log(">>> page:onReady")
  }

  onShow() {
    console.log(">>> page:onShow")
  }

  onHide() {
    console.log(">>> page:onHide")
  }

  onUnload() {
    console.log(">>> page:onUnload")
  }

  onPullDownRefresh() {
    console.log(">>> page:onPullDownRefresh")
  }

}
