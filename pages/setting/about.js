Page({
  data:{
    WechatAccount:'公众号：brandonxiang',
    Zhihu:"知乎: 项伟平",
    Programmer:"开发者：项伟平",
    Data: "数据来自心知天气"
  },

  onLoad(){
    this.setLang()
  },

  setLang(){
    const _ = wx.T._
    this.setData({
      WechatAccount:_('WechatAccount'),
      Zhihu: _('Zhihu'),
      Programmer:_('Programmer'),
      Data: _('Data')
    })
  }
})