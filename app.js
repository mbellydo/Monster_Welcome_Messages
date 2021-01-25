const app = Vue.createApp({
    data() {
        return {
            name: '',
            message: ''
        }
    },
    methods:{
        typeMessage(){
            this.message = `Hello and welcome: ${this.name} !` 
            return this.message
        }
    }
})

app.mount('#app')