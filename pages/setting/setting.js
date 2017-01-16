import event from  '../../utils/event.js'

Page({
  data:{
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
  selectTap: function(e){
    var datatype =  e.currentTarget.dataset.type
    wx.navigateTo({
      url: 'select?datatype='+datatype
    })
  },
  navigateAbout: function(){

    wx.navigateTo({
      url: './about'
    })
  }

})
