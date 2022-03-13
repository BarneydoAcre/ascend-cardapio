const myApp = {
    delimiters: ["[[","]]"],
    data() {
        return {
            pedido: [],
            cpf: 0, //ok
            cpfArray: [], //ok
        }
    },
    methods: {
        pedidos(id) {
            this.pedido.push(id)
            console.log(this.pedido)
        },
        // cpfMaskUp(event) {
        //     for (let i = 0; i < self.cpf.length; i++){
        //         if (self.cpf[i].value.length > this.cpf) {
        //             this.cpf = self.cpf[i].value.length
        //             if (self.cpf[i].value.length == 3 || self.cpf[i].value.length == 7) {
        //                 self.cpf[i].value = self.cpf[i].value + '.'
        //             }if (self.cpf[i].value.length == 11) {
        //                 self.cpf[i].value = self.cpf[i].value + '-'
        //             }
        //         }else {
        //             this.cpf = self.cpf[i].value.length
        //         }
        //     }
            
        // },
        // cpfMaskDown(event) {
        //     for (let i = 0; i < self.cpf.length; i++){
        //         if (event.key != 'Backspace'){
        //             if (self.cpf[i].value.length == 3 || self.cpf[i].value.length == 7) {
        //                 self.cpf[i].value = self.cpf[i].value + '.'
        //             }if (self.cpf[i].value.length == 11) {
        //                 self.cpf[i].value = self.cpf[i].value + '-'
        //             }
        //         }
        //     }
        // }
        cpfMaskUp() {
            if (self.cpf.value.length > this.cpf) {
                this.cpf = self.cpf.value.length
                if (self.cpf.value.length == 3 || self.cpf.value.length == 7) {
                    self.cpf.value = self.cpf.value + '.'
                }if (self.cpf.value.length == 11) {
                    self.cpf.value = self.cpf.value + '-'
                }
            }else {
                this.cpf = self.cpf.value.length
            }
            
        },
        cpfMaskDown(event) {
            if (event.key != 'Backspace'){
                if (self.cpf.value.length == 3 || self.cpf.value.length == 7) {
                    self.cpf.value = self.cpf.value + '.'
                }if (self.cpf.value.length == 11) {
                    self.cpf.value = self.cpf.value + '-'
                }
            }
        }
    }
}
    // methods: {
    //     async getPratos() {
    //        const req = await fetch("/api/pratos/")
    //        const res = await req.json()
    //        this.prato = res
    //     }
    // },
    // mounted() {
    //     this.getPratos()
    // }
const app = Vue.createApp(myApp)

app.mount('#app')