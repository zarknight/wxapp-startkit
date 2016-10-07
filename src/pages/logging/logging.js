const app = getApp()
const util = require('../../utils/util.js')

new class LoggingPage {

  data = {
    logs: []
  }

  constructor() {
    Page(this)
  }

  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }

}
