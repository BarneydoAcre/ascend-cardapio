const myApp = {
    delimiters: ["[[","]]"],
    data() {
        return {
            pedido: [],
            qtd: null,
            maionese: false,
            cpf: null, //ok
            nome: null,
            end: null,
            cpfArray: [], //ok
            link: "https://api.whatsapp.com/send?",
            linkFone: "phone=5567984540339&",
            linkText: null
        }
    },
    methods: {
        async pedidos(id) {
            const req = await fetch("/api/pratos/?id="+id, {method: 'GET'})
            const res = await req.json()
            res[0].qtd = this.qtd
            res[0].maionese = this.maionese
            
            this.pedido.push(res[0])

            console.log(this.pedido)

            this.qtd = null
            this.maionese = false
        },

        async sendPedido() {
            let s = null
            for (let i = 0; i < this.pedido.length; i++) {
                if (s != null) {
                    s = s + `,%0A${this.pedido[i].title} - ${this.pedido[i].qtd} - `
                }else{
                    s = `${this.pedido[i].title} - ${this.pedido[i].qtd} - `
                }
                if (this.pedido[i].maionese == true){let m = `com maionese`
                    s = s + m
                }else{
                    let m = `sem maionese`
                    s = s + m
                }
            }
            console.log(this.nome)
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