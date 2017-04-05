import event from '../../utils/event.js'
import setCities from '../../utils/setCities.js'

Page(Object.assign({}, setCities, {
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



    this.setData({
      LocalCity: _('Local City'),
      Language: _('Language'),
      TemperatureUnit: _('Temperature Unit'),
      About: _('About'),
      temp: [_('Celsius'), _('Fahrenheit')],
      More: _('More'),
    })

       
  },

  onShow(){
    this.initCities();
  }

}))



