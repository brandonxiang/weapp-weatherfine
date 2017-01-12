import { getDailyWeather, getNowWeather, getCityName } from '../../utils/service'
import { KEY } from '../../utils/key.js'


var unit = 'c'
var lang = 'zh-Hans'

var app = getApp()
Page({
  data: {
    city:'深圳市',
    now: {},
    future:{}
  },

  onLoad: function () {
    var that = this

    getCityName((res)=>{
      that.setData({city:res.data.regeocode.addressComponent.city})
      that.loadData()
    })
  },

  loadData: function(){
    var that =this
    getNowWeather({
      data: {
        key: KEY,
        location: this.data.city,
        language: lang,
        unit: unit,
      },
      success: (res) => {
        console.log(res)
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
        location: this.data.city,
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
          future.push({
            day:weekday[i],
            code_day:daily[i].code_day,
            code_night:daily[i].code_night,
            high:daily[i].high,
            low:daily[i].low})
        }
        that.setData({future:future})
      }
    })
  }
})
