Vue.component('catalogItem', {
  props: ['catalogItems'],
  template:
  '\
    <li v-on:click="countThisProduct">\
      {{catalogItems.text}}\
    </li>\
  ',
  methods: {
    countThisProduct: function () {
      this.$emit('count-it')
    }
  },
})

Vue.component('catalogHeader', {
  props: ['total'],
  template:
  '\
    <p>\
      В корзине \
      <span>\
        {{ total }}\
      </span>\
    </p>\
  '
})

var app = new Vue({
  el:'#app',
  data: {
    catalogItemsList: [
      { id: 0, text: 'Товар 1' },
      { id: 1, text: 'Товар 2' },
      { id: 2, text: 'Товар 3' }
    ],
    total: 0
  },
  methods: {
    countTotalProducts: function () {
      this.total += 1
    }
  }
})
