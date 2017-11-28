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
      this.$emit('to-basket', this.catalogItems.id)
    }
  }
})

Vue.component('catalogHeader', {
  props: ['productName'],
  data: function() {
    return {
      basket: []
    }
  },
  template:
  '\
    <p> Корзина \
      {{ productName }} <span v-on:click="removeFromBasket">Удалить</span>\
    </p>\
  ',
  methods: {
    addProductToBasket: function() {
      console.log()
    },
    removeFromBasket: function() {
      console.log('-')
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
    total: -1
  },
  computed: {
    productName: function() {
      // TODO разобрать условие
      if(this.total >= 0) {
        return this.catalogItemsList[this.total].text
      } else {
        return 'Пустая';
      }
    }
  },
  methods: {
    moveToBasket: function (value) {
      this.total = value;
    }
  }
})
