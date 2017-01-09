import { getDailyWeather, getNowWeather } from '../../utils/service'
import { KEY } from '../../utils/key.js'

var city = 'shenzhen'
var unit = 'c'
var lang = 'zh-Hans'

var app = getApp()
Page({
  data: {
    now: {},
    future:{}
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this

    getNowWeather({
      data: {
        key: KEY,
        location: city,
        language: lang,
        unit: unit,
      },
      success: (res) => {
        const result = res.data.results[0]
        const cityName = result.location.name
        const temperature = result.now.temperature
        const text = result.now.text
        that.setData({ now: { cityName: cityName, temperature: temperature, text: text } })
      }
    })

    getDailyWeather({
      data: {
        key: KEY,
        location: city,
        language: lang,
        unit: unit,
        start: 0,
        days: 3
      },
      success: (res) => {
        console.log(res)
        const future = []
        const results = res.data.results[0]
        const daily = results.daily
        const weekday = ['今日','明天','后天']
        for(var i in daily){
          future.push({day:weekday[i],high:daily[i].high,low:daily[i].low})
        }
        that.setData({future:future})
      }
    })
  }
})
