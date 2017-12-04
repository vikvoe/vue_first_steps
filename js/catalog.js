Vue.component('catalogItem', {
  props: ['catalogItems'],
  template:
  '\
    <li>\
      {{catalogItems.text}} \
      <button v-on:click="addItem">Добавить</button>\
      <button v-on:click="deleteItem">Удалить</button>\
    </li>\
  ',
  data: function() {
    return {
      amount: 0
    }
  }, 
  methods: {
    addItem: function() {
      this.$emit('add-item', this.catalogItems.id)
    },
    deleteItem: function() {
      this.$emit('delete-item', this.catalogItems.id)
    }
  }
})
Vue.component('catalogHeader', {
  props: ['productName'],
  template:
  '\
    <div> {{ productName }}\
    </div>\
  '
})
var app = new Vue({
  el:'#app',
  data: {
    catalogItemsList: {
      1: { id: 0, text: 'Товар А: ' },
      2: { id: 1, text: 'Товар Б: ' },
      3: { id: 2, text: 'Товар В: ' }
    },
    basket: {

    },
  },
  // выводить в корзину наименование товара и его количество
  // vue cli
  computed: {
    productName: function() {
      // let sum = 0;
      // for (var key in this.basket) {
      //   sum += this.basket[key];
      // }
      // return sum;
      return this.basket[id];
    }
  },
  methods: {
    addItemToBasket: function(id) {
      if(!this.basket[id]) {
        this.$set(this.basket, id, 1)
      } else {
        // является ли дорогостоящей операцией?
        this.$set(this.basket, id, this.basket[id] + 1);
      }
    },
    deleteItemFromBasket: function(id) {
      if(this.basket[id] === 1) {
        // является ли дорогостоящей операцией?
        this.basket[id] -= 1;
        this.$delete(this.basket, id)
        return;
      }
      this.basket[id] -= 1;
    }
  }
})