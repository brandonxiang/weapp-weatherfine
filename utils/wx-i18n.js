class T {
    constructor(){
        this.locale = null
        this.locales = {}
    }

    registerLocale(locales){
        this.locales = locales; 
    }

    setLocale(code){
        this.locale = code
    }

    _(line, data){
        const locale = this.locale
        const locales = this.locales
        if(locale && locales[locale] && locales[locale][line]){
            line = locales[locale][line]
        }

        return line
    }
}
