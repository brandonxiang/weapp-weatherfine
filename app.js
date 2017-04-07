import locales from './utils/locales'
import T from './utils/wxapp-i18n'

T.registerLocale(locales)
T.setLocale('zh-Hans')
wx.T = T

App({
  onLaunch() {
    this.clearStorageAfterUpdated()
  },
  clearStorageAfterUpdated(){
    wx.getStorage({
      key: 'version',
      success: (res) =>  {
        if (res.data !== this.globalData.version) {
          wx.clearStorage()
          this.setVersion()
        }
      },
      fail: (res) => {
        this.setVersion()
      },
    })
  },
  setVersion() {
    wx.setStorage({
      key: 'version',
      data: this.globalData.version,
    })
  },
  getUserInfo(cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  globalData: {
    userInfo: null,
    version: "1.2.0",
    env:"dev",
  }
})
