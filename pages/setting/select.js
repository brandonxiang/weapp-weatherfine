Page({
    data:{
        items:[
           
        ]
    },
    onLoad:function(options){
        console.log(options)
        if(options.datatype==="lang"){
            this.setData({items: [
               {name:"中文",checked:true},
               {name:"English",checked:false}
            ]})
        }else if(options.datatype==="temp"){
            this.setData({items: [
               {name:"摄氏度",checked:true},
               {name:"华氏度",checked:false}
            ]})
        }
    }

})