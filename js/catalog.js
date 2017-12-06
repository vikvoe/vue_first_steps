// добавить в catalogList url, pic, desc
// сменить id на невразумительные )
// читать router
// перенести
// при клике на товар переходим на страничку товара, но корзина на месте
Vue.component('catalogItem', {
  props: ['productId', 'productValue'],
  template:
  '\
    <li>\
      {{productValue.text}} \
      <button v-on:click="addItem">Добавить</button>\
      <button v-on:click="deleteItem">Удалить</button>\
    </li>\
  ', 
  methods: {
    addItem: function() {
      this.$emit('add-item', this.productId)
    },
    deleteItem: function() {
      this.$emit('delete-item', this.productId)
    }
  }
})
Vue.component('catalogHeader', {
  props: ['getProductFromBasket'],
  template:
  '\
    <div>\
      <div \
        v-for="item in getProductFromBasket" \
        v-bind:key="item.key" \
      > \
        {{ item.product }} {{ item.amount }} \
      </div>\
    </div>\
  '
})
var app = new Vue({
  el:'#app',
  data: {
    catalogItemsList: {
      1: { text: 'Товар А: ' },
      2: { text: 'Товар Б: ' },
      3: { text: 'Товар В: ' }
    },
    basket: {

    },
  },
  computed: {
    getProductFromBasket: function() {
      var result = [];
      for (key in this.basket) {
        result.push(
          {
            key: key,
            product: this.catalogItemsList[key].text,
            amount: this.basket[key].amount
          }          
        )
      }
      return result;
    }
  },
  methods: {
    addItemToBasket: function(key) {
      if(!this.basket[key]) {
        this.$set(this.basket, key, { "amount": 1 });
      } else {
        this.basket[key].amount += 1
      }
    },
    deleteItemFromBasket: function(key) {
      if(this.basket[key].amount === 1) {
        this.basket[key].amount -= 1;
        this.$delete(this.basket, key)
        return;
      }
      this.basket[key].amount -= 1;
    }
  }
})