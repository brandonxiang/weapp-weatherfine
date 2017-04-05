export default {

    initCities() {
        const _ = wx.T._
        const Cities = [
            { city: '北京', name: _('Beijing'), check: true, id: 1 },
            { city: '天津', name: _('Tianjing'), check: false, id: 2 },
            { city: '上海', name: _('Shanghai'), check: true, id: 3 },
            { city: '重庆', name: _('Chongqing'), check: false, id: 4 },
            { city: '沈阳', name: _('Shenyang'), check: false, id: 5 },
            { city: '广州', name: _('Guangzhou'), check: true, id: 6 },
            { city: '深圳', name: _('Shenzhen'), check: true, id: 7 }
        ];

        wx.getStorage({
            key: 'Cities',
            success: (res) => {
                this.setData({ Cities: res.data });
            },
            fail: (res) => {
                console.log(res)
                this.setData({Cities})
                this.setCitiesStorage()
            },
        })
    },

    setCitiesStorage() {
        wx.setStorage({
            key: 'Cities',
            data: this.data.Cities,
            fail: function (res) {
                console.log(res)
            },
        })
    }
}