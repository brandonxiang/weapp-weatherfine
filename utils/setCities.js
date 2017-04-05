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
            { city: '深圳', name: _('Shenzhen'), check: true, id: 7 },
            { city: '大连', name: _('Dalian'), check: false, id: 8 },
            { city: '长春', name: _('Changchun'), check: false, id: 9 },
            { city: '哈尔滨', name: _('Haerbin'), check: false, id: 10 },
            { city: '郑州', name: _('Zhengzhou'), check: false, id: 11 },
            { city: '武汉', name: _('Wuhan'), check: false, id: 12 },
            { city: '长沙', name: _('Changsha'), check: false, id: 13 },
            { city: '南京', name: _('Nanjing'), check: false, id: 14 },
            { city: '杭州', name: _('Hangzhou'), check: false, id: 15 },
            { city: '福州', name: _('Fuzhou'), check: false, id: 16 },
            { city: '成都', name: _('Chengdu'), check: false, id: 17 },
            { city: '济南', name: _('Jinan'), check: false, id: 18 },
            { city: '石家庄', name: _('Shijiazhuang'), check: false, id: 19 },
            { city: '南昌', name: _('Nanchang'), check: false, id: 20 },
            { city: '昆明', name: _('Kunming'), check: false, id: 21 },
            { city: '合肥', name: _('Hefei'), check: false, id: 22 },
            { city: '西安', name: _('Xian'), check: false, id: 23 },
            { city: '南宁', name: _('Nanning'), check: false, id: 24 },
            { city: '太原', name: _('Taiyuan'), check: false, id: 25 },
            { city: '贵阳', name: _('Guiyang'), check: false, id: 26 },
            { city: '兰州', name: _('Lanzhou'), check: false, id: 27 },
        ];

        wx.getStorage({
            key: 'Cities',
            success: (res) => {
                this.setData({ Cities: res.data });
            },
            fail: (res) => {
                console.log(res)
                this.setData({ Cities })
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