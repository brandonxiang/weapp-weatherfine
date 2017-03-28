import event from  '../../utils/event.js'

Page({
  data:{
    langCode:['zh-Hans','en'],
    lang:['简体中文','English'],
    langIndex:0,
    tempCode:['c','f'],
    temp:['摄氏度','华氏度'],
    tempIndex:0,
  },
  onSwitch:function(e){
    const city = e.currentTarget.dataset.city
    event.emit("CityChanged",city)
    wx.switchTab({
      url:'/pages/index/index'
     })
  },
  langChange:function(e){
    var index = e.detail.value
    this.setData({
      langIndex: index,
    })
    event.emit('LangChanged',this.data.langCode[index])
  },
  tempChange:function(e){
    var index = e.detail.value;
    this.setData({
      tempIndex:index,
    })
    event.emit('TempChanged',this.data.tempCode[index])
  },
  navigateAbout: function(){
    wx.navigateTo({
      url: './about'
    })
  }

})
