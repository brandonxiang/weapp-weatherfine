import { getDailyWeather, getNowWeather, getCityName } from '../../utils/service'
import { WEATHERKEY } from '../../utils/key'
import event from '../../utils/event'

const app = getApp()
// console.log(app)
Page({
  data: {
    Day: '',
    Night: '',
    unit: 'c',
    lang: 'zh-Hans',
    city: 'local',
    now: {},
    future: {},
  },

  onLoad() {
    event.on("CityChanged", this, this.setCityData)
    event.on("TempChanged", this, this.setTempUnit)
    event.on("LangChanged", this, this.setLang)
    this.setCityData(this.data.city)
    this.setLang(this.data.lang)
  },

  onShow() {
    if (this.data.city !== 'local') {
      this.loadData()
    }
  },

  setCityData(city) {
    var that = this
    if (city === 'local') {
      getCityName((res) => {
        console.log(res.data)
        const city = res.data.regeocode.addressComponent.city.replace('市', '')
        that.setData({ city })
        that.loadData()
      })
    } else {
      that.setData({ city: city })
    }
  },

  setTempUnit(unit) {
    this.setData({ unit: unit })
  },

  setLang(lang) {
    const _ = wx.T._
    this.setData({
      lang: lang,
      Day: _('Day'),
      Night: _('Night'),
    })
  },

  loadData() {
    //缓存
    const env = app.globalData.env
    wx.getStorage({
      key: this.data.city + "Now",
      success: (res) => {

        const limit = env === "prod" ? 90 * 60000 : 60000;
        const updateLimit = env === "prod" ? 30 * 6000 : 0;
        const diff = new Date().getTime() - new Date(res.data.time).getTime()
        const updateDiff = new Date().getTime() - new Date(res.data.updateTime).getTime()
        if (diff > limit && updateDiff > updateLimit) {
          this.fetchNowData()
        } else {
          this.setData({ now: res.data })
        }
      },
      fail: (res) => {
        this.fetchNowData()
      },
    })

    wx.getStorage({
      key: this.data.city + "Future",
      success: (res) => {
        const limit = env === "prod" ? 360 * 60000 : 60000;
        const updateLimit = env === "prod" ? 60 * 60000 : 0;
        const diff = new Date().getTime() - new Date(res.data.time).getTime()
        const updateDiff = new Date().getTime() - new Date(res.data.updateTime).getTime()
        if (diff > limit && updateDiff > updateLimit) {
          this.fetchFutureData()
        } else {
          this.setData({ future: res.data.future })
        }
      },
      fail: (res) => {
        this.fetchFutureData()
      },
    })

  },

  fetchNowData() {
    const that = this
    getNowWeather({
      data: {
        key: WEATHERKEY,
        location: this.data.city,
        language: this.data.lang,
        unit: this.data.unit,
      },
      success: (res) => {
        const result = res.data.results[0]
        const cityName = result.location.name;
        const now = {
          cityName,
          temperature: result.now.temperature,
          text: result.now.text,
          time: result.last_update,
          updateTime: (new Date).toString()
        }
        that.setData({ now })
        wx.setStorage({
          key: that.data.city + 'Now',
          data: now,
        })
      }
    })
  },

  fetchFutureData() {
    const that = this
    getDailyWeather({
      data: {
        key: WEATHERKEY,
        location: this.data.city,
        language: this.data.lang,
        unit: this.data.unit,
        start: 0,
        days: 3
      },
      success: (res) => {
        const _ = wx.T._
        const future = []
        const results = res.data.results[0]
        const cityName = results.location.name;
        const daily = results.daily
        const weekday = [_('Today'), _('Tomorrow'), _('DayAfterTmw')]
        for (var i in daily) {
          future.push({
            day: weekday[i],
            code_day: daily[i].code_day,
            code_night: daily[i].code_night,
            high: daily[i].high,
            low: daily[i].low
          })
        }
        that.setData({ future })
        const futureData = { time: results.last_update, future }
        wx.setStorage({
          key: that.data.city + 'Future',
          data: futureData,
        })
      }
    })
  }
})
