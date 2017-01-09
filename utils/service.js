const host = 'https://api.thinkpage.cn/v3/weather/'
import {KEY} from './key.js'

const wxRequest = (params, url) => {
  wx.showToast({
    title: '加载中',
    icon: 'loading'
  })
  wx.request({
    url: url,
    method: params.method || 'GET',
    data: params.data || {},
    header: {
      'Content-Type': 'application/json'
    },
    success: (res) => {
      params.success && params.success(res)
      wx.hideToast()
    },
    fail: (res) => {
      params.fail && params.fail(res)
    },
    complete: (res) => {
      params.complete && params.complete(res)
    }
  })
}

const getDailyWeather = (params) => wxRequest(params, host+'daily.json')


const getHourlyWeather = (params) => wxRequest(params, host+'hourly.json')

const getNowWeather = (params) => wxRequest(params, host+'now.json')

module.exports = {
  getDailyWeather,
  getHourlyWeather,
  getNowWeather
}