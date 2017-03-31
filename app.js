import locales from './utils/locales'
import T from './utils/wx-i18n'

T.registerLocale(locales)
T.setLocale('zh-Hans')
wx.T = T

App({
  onLaunch() {
  },
  getUserInfo(cb){
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
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
  globalData:{
    userInfo:null
  }
})
