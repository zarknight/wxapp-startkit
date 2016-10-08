const app = getApp()
const util = require('../../utils/util.js')

// 微信小程序的模块机制导致的问题，很别扭，只能先这样用了
const _underscore = require('../../libs/underscore.js')
const _ = exports._

new class IndexPage {

  data = {
    motto: 'Hello World',
    userInfo: {}
  }

  // 微信小程序(WAService.js)用hasOwnProperty进行bind的事件处理函数检测，
  // 通过定义方法的方式将不会被检测到，必须以定义属性的方式才能被检测到：

  onButtonTap = ()=> {
    util.wxPromisify(wx.setStorage)({
      key: "abc",
      data: "11111"
    }).then((res) => {
      console.log(">>>>>>>> result:", res)
    }).catch((res) => {
      console.error(">>>>>>> error:", res)
    })
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
