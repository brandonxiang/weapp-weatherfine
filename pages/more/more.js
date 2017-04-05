import setCities from '../../utils/setCities.js'

Page(Object.assign(setCities,{
    data: {
    },

    checkChange(e){

        const dataset = e.currentTarget.dataset
        console.log(dataset)
        this.updateCity(!dataset.check, dataset.id)
    },

    updateCity(check,id){
        const Cities = this.data.Cities.map((value)=>{
            if(value.id === id){
                value.check = check
            }
            return value
        })
        this.setData({Cities})
        this.setCitiesStorage()
    },

    onLoad() {
       this.initCities()
    },

}))