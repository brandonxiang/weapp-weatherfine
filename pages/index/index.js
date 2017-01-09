import {getDailyWeather,getNowWeather} from '../../utils/service'
import {KEY} from '../../utils/key.js'

var city ='shenzhen'
var unit ='c'
var lang = 'zh-Hans'

var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },

  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this

    app.getUserInfo(function(userInfo){

      that.setData({
        userInfo:userInfo
      })
      that.update()
    })

    console.log(KEY)

    getDailyWeather({
      data:{
        key:KEY,
        location:city,
        language: lang,
        unit:unit,
        start:0,
        days:3
      },
      success:(res)=>{
        console.log(res)
      }
    })

    getNowWeather({
      data:{
        key:KEY,
        location:city,
        language:lang,
        unit:unit,
      },
      success: (res)=>{
        console.log(res)
      }
    })
  }
})
