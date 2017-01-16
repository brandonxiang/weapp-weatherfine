import event from  '../../utils/event.js'

Page({
  data:{
    langHidden: true
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

  langTap: function(){
    // this.setData({langHidden:false})
    wx.navigateTo({
      url: 'select'
    })
  },
  langChange:function(){
    this.setData({langHidden: true})
  },


  navigateAbout: function(){
    console.log(1)
    wx.navigateTo({
      url: './about'
    })
  }

})
