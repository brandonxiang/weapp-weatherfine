import event from '../../utils/event.js'

Page({
  data: {
    LocalCity: '',
    Beijing: '',
    Shanghai: '',
    Language: '',
    TemperatureUnit: '',
    About: '',
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
  onSwitch(e) {
    const city = e.currentTarget.dataset.city
    event.emit("CityChanged", city)
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  langChange(e) {
    console.log(e)
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
  navigateAbout() {
    wx.navigateTo({
      url: './about'
    })
  },
  setLang() {
    const _ = wx.T._
    this.setData({
      LocalCity: _('Local City'),
      Beijing: _('Beijing'),
      Shanghai: _('Shanghai'),
      Language: _('Language'),
      TemperatureUnit: _('Temperature Unit'),
      About: _('About'),
      temp: [_('Celsius'),_('Fahrenheit')]
    })
  }

})
