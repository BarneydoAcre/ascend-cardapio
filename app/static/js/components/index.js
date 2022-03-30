const myApp = {
    delimiters: ["[[","]]"],
    data() {
        return {
            pedido: [], //ok
            pedidoLength: 0,
            qtd: null, //ok
            //////////////////////// maionese: false, //ok
            total: null, //ok
            //dados
            cpfArray: [], //ok
            cpf: null, //ok
            cpfLength: 0, //ok
            nome: null, //ok
            //entrega
            formaEntrega: null,
            entrega: false, //ok
            retirada: false, //ok
            local: false, //ok
            end: null, //ok
            //pagamento 
            formaPagamento: null,
            dinheiro: false,
            debito: false,
            credito: false, 
            //link
            link: null, //ok
            linkText: null, //ok
            linkOk: false, //ok
        }
    },
    async mounted() {
        const req = await fetch('/api/whatsnum/', {method: 'GET'})
        const res = await req.json()
        this.link = `https://api.whatsapp.com/send?phone${res[0].whats}&`
    },
    methods: {
                async pedidos(id) {
            const req = await fetch("/api/produtos/?id="+id, {method: 'GET'})
            const res = await req.json()
            
            if (this.qtd != null && this.qtd != 0 && this.qtd != '0') {
                res[0].qtd = this.qtd
                res[0].maionese = this.maionese
                res[0].total = res[0].valor * this.qtd
    
                this.total = this.total + res[0].valor * this.qtd
                
                this.pedido.push(res[0])
    
                this.qtd = null
                this.maionese = false
    
            }else {
                for(let i = 0; i < self.qtd.length; i++) {
                    self.qtd.style = "border-bottom: 2px solid red;"
                    self.cpfLabel.style = "color: red;"
                    self.cpfLabel.innerHTML = "CPF vázio!"
                }
            }
            this.sendPedido()
        },

        async retiradaForma () {
            if (this.entrega == true || this.retirada == true || this.local == true) {
                this.entrega = false
                this.retirada = false
                this.local = false
            }
        },
        async pagamentoForma () {
            if (this.dinheiro == true || this.debito == true || this.credito == true) {
                this.dinheiro = false
                this.debito = false
                this.credito = false
            }
        },

        async cpfValidate() {
            if (this.cpf != null && this.cpf != "") {
                if (this.cpfLength == 14) {
                    ////////////////////
                    //Validação do CPF//
                    ////////////////////

                    self.cpf.style = "border-bottom: 1px solid #9e9e9e;"
                    self.cpfLabel.style = "color: #9e9e9e;"
                    self.cpfLabel.innerHTML = "CPF"
                }else{
                    self.cpf.style = "border-bottom: 1px solid red;"
                    self.cpfLabel.style = "color: red;"
                    self.cpfLabel.innerHTML = "CPF deve conter 11 dígitos!"
                }
            }else {
                self.cpf.style = "border-bottom: 2px solid red;"
                self.cpfLabel.style = "color: red;"
                self.cpfLabel.innerHTML = "CPF vázio!"
            }
        },
        async sendPedido() {
            if (this.entrega == true){
                this.formaEntrega = `Para entrega`
            }if (this.retirada == true) {
                this.formaEntrega = `Retirada`
            }if (this.local == true) {
                this.formaEntrega = `Comer no local`
            }

            if (this.dinheiro == true){
                this.formaPagamento = `Dinheiro`
            }if (this.debito == true) {
                this.formaPagamento = `Débito`
            }if (this.credito == true) {
                this.formaPagamento = `Crédito`
            }

            if (this.pedido.length <= 0) {return false;}
            if (this.nome != null && this.nome != "") {
                if (this.entrega != false || this.retirada != false || this.local != false) {  
                    if (this.pedido.length > 0) {
                        let s = null
                        for (let i = 0; i < this.pedido.length; i++) {
                            if (s == null) {
                                s = `${this.pedido[i].qtd} - ${this.pedido[i].title}`
                            }else{
                                s = s + `,%0A${this.pedido[i].qtd} - ${this.pedido[i].title}`
                            }
                            this.linkOk = true
                        }
                        if (this.entrega == true) {
                            this.linkText = `text=Boa noite, aqui alguns dados para o meu pedido:%0A%0ACPF: ${this.cpf}%0ANome: ${this.nome}%0AForma entrega: ${this.formaEntrega}%0AEndereço: ${this.end}%0AForma de pagamento: ${this.formaPagamento}%0A%0AItens:%0A${s}`
                        }else{
                            this.linkText = `text=Boa noite, aqui alguns dados para o meu pedido:%0A%0ACPF: ${this.cpf}%0ANome: ${this.nome}%0AForma entrega: ${this.formaEntrega}%0AForma de pagamento: ${this.formaPagamento}%0A%0AItens:%0A${s}`
                        }
                    }
                }
                self.idname.style = "border-bottom: 1px solid #9e9e9e;"
                self.nameLabel.style = "color: #9e9e9e;"
                self.nameLabel.innerHTML = "Nome"
            }else{
                self.idname.style = "border-bottom: 1px solid red"
                self.nameLabel.style = "color: red;"
                self.nameLabel.innerHTML = "Nome vázio"
            }
        },
        async resetVariables() {
            ///////////////////////
            /////////////////////// RESENTANDO VARIÁVEIS
            ///////////////////////
            this.pedido = []
            this.pedidoLength = 0
            this.qtd = null
            this.total = null
            this.cpfArray = []
            this.cpf = null
            this.cpfLength = 0
            this.nome = null
            this.formaEntrega = null
            this.entrega = false
            this.retirada = false
            this.local = false
            this.end = null
            this.formaPagamento = null
            this.dinheiro = false
            this.debito = false
            this.credito = false
            this.link = "https://api.whatsapp.com/send?phone=5567984540339&"
            this.linkText = null
            this.linkOk = false
            self.cpf.value = null
            ///////////////////////
            ///////////////////////
            ///////////////////////
        },
        cpfMaskUp() {
            if (self.cpf.value.length > this.cpfLength) {
                this.cpfLength = self.cpf.value.length
                if (self.cpf.value.length == 3 || self.cpf.value.length == 7) {
                    self.cpf.value = self.cpf.value + '.'
                }if (self.cpf.value.length == 11) {
                    self.cpf.value = self.cpf.value + '-'
                }
            }else {
                this.cpfLength = self.cpf.value.length
            }
            this.cpf = self.cpf.value
            
        },
        cpfMaskDown(event) {
            if (event.key != 'Backspace'){
                if (self.cpf.value.length == 3 || self.cpf.value.length == 7) {
                    self.cpf.value = self.cpf.value + '.'
                }if (self.cpf.value.length == 11) {
                    self.cpf.value = self.cpf.value + '-'
                }
            }
            this.cpfLength = self.cpf.value.length
        }
    }
}
const app = Vue.createApp(myApp)

app.mount('#app')