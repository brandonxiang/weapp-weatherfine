Page({
    data: {
    },

    onLoad() {
        const _ = wx.T._
        wx.getStorage({
            key: 'Cities',
            success: (res) => {
                this.setData({ Cities: res.data });
            },
            fail:  (res) => {
                console.log(res)
                this.setData({
                    Cities: [
                    { city: '北京', name: _('Beijing'), check: true },
                    { city: '天津', name: _('Tianjing'), check:false },
                    { city: '上海', name: _('Shanghai'), check:true },
                    { city: '重庆', name: _('Chongqing'), check:false },
                    { city: '沈阳', name: _('Shenyang'), check:false },
                    { city: '广州', name: _('Guangzhou'), check:true },
                    { city: '深圳', name: _('Shenzhen'), check:true }
                    ],
                })
            },
        })
    },

})