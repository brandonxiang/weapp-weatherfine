Page({
    data: {
        Cities: [],
        AllCities: [],
    },

    onLoad() {
        const that = this
        wx.getStorage({
            key: 'Cities',
            success: function (res) {
                that.setData({ Cities: res.data });
            },
            fail: function (res) {
                console.log(res)
                that.setData({
                    Cities: [
                        { city: '北京', name: _('Beijing') },
                        { city: '上海', name: _('Shanghai') },
                        { city: '广州', name: _('Guangzhou') },
                        { city: '深圳', name: _('Shenzhen') }
                    ],
                })
            },
        })
        this.initLang()
    },

    initLang(){
        const _ = wx.T._
        this.setData({AllCities:[
            { city: '北京', name: _('Beijing') },
            { city: '天津', name: _('Tianjing') },
            { city: '上海', name: _('Shanghai') },
            { city: '重庆', name: _('Chongqing') },
            { city: '沈阳', name: _('Shenyang') },
            { city: '广州', name: _('Guangzhou') },
            { city: '深圳', name: _('Shenzhen') }
        ]})
    }
})