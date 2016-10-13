new class AppMain {

  globalData = {
    userInfo: null
  }

  constructor() {
    App(this)
  }

  onLaunch() {
    console.log("app launch")
  }

  onShow() {
    console.log("app show:", this.getCurrentPage())
  }

  onHide() {
    console.log("app hide:", this.getCurrentPage())
  }

}
