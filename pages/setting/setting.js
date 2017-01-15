import event from  '../../utils/event.js'

Page({
  data:{
    // text:"这是一个页面"
  },
  onLoad:function(options){

  },
  onSwitch:function(e){
    const city = e.currentTarget.dataset.city
    event.emit("CityChanged",city)
    wx.switchTab({
      url:'/pages/index/index'
     })
  },

})
