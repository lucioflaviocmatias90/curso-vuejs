new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Estou te alertando!!!');
        },
        exibirValor(ev) {
            this.valor = ev.target.value;
        },
        exibirValor2(ev) {
            this.valor = ev.target.value;
        }
    }
})