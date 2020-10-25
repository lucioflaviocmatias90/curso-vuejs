import Vue from 'vue';

export default new Vue({
  methods: {
    getUsuario(usuario) {
      this.$emit('alterarUsuario', usuario)
    },
    setUsuario(callback) {
      this.$on('alterarUsuario', callback)
    }
  },
});