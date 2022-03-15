const myApp = {
    delimiters: ["[[","]]"],
    data() {
        return {
            pedido: [], //ok
            qtd: null, //ok
            maionese: false, //ok
            total: null, //ok
            cpf: null, //ok
            nome: null, //ok
            entrega: false, //ok
            retirada: false, //ok
            local: false, //ok
            end: null, //ok
            cpfArray: [], //ok
            link: "https://api.whatsapp.com/send?", //ok
            linkFone: "phone=5567984540339&", //ok
            linkText: null //ok
        }
    },
    methods: {
        async pedidos(id) {
            const req = await fetch("/api/pratos/?id="+id, {method: 'GET'})
            const res = await req.json()
            res[0].qtd = this.qtd
            res[0].maionese = this.maionese
            res[0].total = res[0].valor * this.qtd

            this.total = this.total + res[0].valor * this.qtd
            
            this.pedido.push(res[0])

            this.qtd = null
            this.maionese = false
        },

        async retiradaForma () {
            if (this.entrega == true || this.retirada == true || this.local == true) {
                this.entrega = false
                this.retirada = false
                this.local = false
            }
        },

        async sendPedido() {
            let s = null
            for (let i = 0; i < this.pedido.length; i++) {
                if (s == null) {
                    s = `${this.pedido[i].qtd} - ${this.pedido[i].title} - `
                }else{
                    s = s + `,%0A${this.pedido[i].qtd} - ${this.pedido[i].title} - `
                }
                if (this.pedido[i].maionese == true){
                    let m = `Com maionese - `
                    s = s + m
                }else{
                    let m = `Sem maionese - `
                    s = s + m
                }
                if (this.entrega == true){
                    let m = `Para entrega`
                    s = s + m
                }if (this.retirada == true) {
                    let m = `Retirada`
                    s = s + m
                }if (this.local == true) {
                    let m = `Comer no local`
                    s = s + m
                }
            }
            this.linkText = `text=Boa noite, aqui alguns dados para o meu pedido:%0A%0AEndereço: ${this.end}%0ANome: ${this.nome}%0A%0AItens:%0A${s}`
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