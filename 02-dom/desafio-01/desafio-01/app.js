new Vue({
  el: '#desafio',
  data: {
    user: {
      name: 'Lucio Flavio',
      age: 29
    },
    imgSrc: 'http://vignette4.wikia.nocookie.net/spongebob/images/c/c6/SpongeBob_SquarePants.svg/revision/latest?cb=20101025015316',
    myName: 'Lucio Flavio'
  },
  methods: {
    getRandomNumber: function () {
      return Math.random();
    }
  }
})