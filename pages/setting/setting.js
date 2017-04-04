import event from '../../utils/event.js'

Page({
  data: {
    LocalCity: '',
    Language: '',
    TemperatureUnit: '',
    About: '',
    Cities: [],
    More: '',
    langCode: ['zh-Hans', 'en'],
    lang: ['简体中文', 'English'],
    langIndex: 0,
    tempCode: ['c', 'f'],
    temp: ['摄氏度', '华氏度'],
    tempIndex: 0,

  },

  onLoad: function () {
    this.setLang()
  },

  cityChange(e) {
    const city = e.currentTarget.dataset.city
    event.emit("CityChanged", city)
    wx.switchTab({
      url: '/pages/index/index'
    })
  },

  langChange(e) {
    var index = e.detail.value
    this.setData({
      langIndex: index,
    })

    wx.T.setLocale(this.data.langCode[index])
    this.setLang()
    event.emit('LangChanged', this.data.langCode[index])
  },

  tempChange(e) {
    var index = e.detail.value;
    this.setData({
      tempIndex: index,
    })
    event.emit('TempChanged', this.data.tempCode[index])
  },

  setLang() {

    const _ = wx.T._
    wx.getStorage({
      key: 'Cities',
      success: (res) => {
        this.setData({ Cities: res.data });
      },
      fail: (res) => {
        console.log(res)
        this.setData({
          Cities: [
            { city: '北京', name: _('Beijing'), check: true },
            { city: '天津', name: _('Tianjing'), check: false },
            { city: '上海', name: _('Shanghai'), check: true },
            { city: '重庆', name: _('Chongqing'), check: false },
            { city: '沈阳', name: _('Shenyang'), check: false },
            { city: '广州', name: _('Guangzhou'), check: true },
            { city: '深圳', name: _('Shenzhen'), check: true }
          ],
        })
        this.setCitiesStorage()
      },
    })

    this.setData({
      LocalCity: _('Local City'),
      Language: _('Language'),
      TemperatureUnit: _('Temperature Unit'),
      About: _('About'),
      temp: [_('Celsius'), _('Fahrenheit')],
      More: _('More'),
    })
  },

  setCitiesStorage() {
    wx.setStorage({
      key: 'Cities',
      data: this.data.Cities,
      fail: function (res) {
        console.log(res)
      },
    })
  }
})
