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
      this.$emit('to-basket', this.$vnode.data.key)
    }
  }
})

Vue.component('catalogHeader', {
  props: ['total'],
  data: function() {
    return {
      basket: []
    }
  },
  template:
  '\
    <p>\
      {{ total }}\
    </p>\
  ',
  methods: {
    addProductToBasket: function() {
      console.log(total)
    }
  }
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
    moveToBasket: function (value) {
      this.total = value;
    }
  }
})
