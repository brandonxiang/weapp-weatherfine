Page({
  data:{
    WOA:'公众号',
    WOAItem:'brandonxiang',
    Zhihu:"知乎",
    ZhihuItem:'项伟平',
    Coder:"开发者",
    CoderItem:'项伟平',
    Jianshu:"简书",
    JianshuItem:"brandonxiang",
    Github:"Github",
    GithubItem:"brandonxiang",
    Data: "数据",
    DataItem:'心知天气',

  },

  onLoad(){
    this.setLang()
  },

  setLang(){
    const _ = wx.T._
    this.setData({
      WOA:_('WOA'),
      Zhihu: _('Zhihu'),
      Coder:_('Coder'),
      Data: _('Data'),
      DataItem:_('DataItem'),
    })
  }
})