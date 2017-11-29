Vue.component('catalogItem', {
  props: ['catalogItems'],
  template:
  '\
    <li v-on:click="countThisProduct">\
      {{catalogItems.text}} \
      {{amount}} шт. \
      <span class="js-add">Добавить</span>\
      <span v-if="amount > 0" class="js-remove">Удалить</span>\
    </li>\
  ',
  data: function() {
    return {
      amount: 0
    }
  }, 
  methods: {
    countThisProduct: function (e) {
      if(e.target.className === 'js-remove' && this.amount > 0) {
        this.amount -= 1
      } else if(e.target.className === 'js-add') {
        this.amount += 1
      }
      this.$emit('to-basket', this.catalogItems.id, e.target.className)
    }
  }
})

Vue.component('catalogHeader', {
  props: ['productName'],
  template:
  '\
    <p> В корзине \
      {{ productName }}\
    </p>\
  '
})


var app = new Vue({
  el:'#app',
  data: {
    catalogItemsList: [
      { id: 0, text: 'Товар А: ' },
      { id: 1, text: 'Товар Б: ' },
      { id: 2, text: 'Товар В: ' }
    ],
    totalAmount: 0
  },
  computed: {
    productName: function() {
      // TODO разобрать условие
      if(this.totalAmount > 0) {
        return this.totalAmount + ' шт.'
      } else {
        return 'пусто';
      }
    }
  },
  methods: {
    moveToBasket: function (value, eventName) {
      if(eventName === 'js-remove' && this.totalAmount > 0) {
        this.totalAmount -= 1
      } else if(eventName === 'js-add') {
        this.totalAmount += 1
      }
    }
  }
})
