const myApp = {
    delimiters: ["[[","]]"],
    data() {
        return {
            prato: null,
        }
    },
    methods: {
        async getPratos() {
           const req = await fetch("/api/pratos/")
           const res = await req.json()
           this.prato = res
        }
    },
    mounted() {
        this.getPratos()
    }
}
const app = Vue.createApp(myApp)

app.mount('#app')