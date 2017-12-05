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
  methods: {
    addItem: function() {
      this.$emit('add-item', this.catalogItems)
    },
    deleteItem: function() {
      this.$emit('delete-item', this.catalogItems)
    }
  }
})
Vue.component('catalogHeader', {
  props: ['products'],
  template:
  '\
    <div> {{ basketItems.text }} {{ basketItems.amount }}\
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

  methods: {
    addItemToBasket: function(item) {
      if(!this.basket[item.id]) {
        this.$set(this.basket, item.id, { "amount": 1, "text": item.text});
      } else {
        this.basket[item.id].amount += 1
      }
    },
    deleteItemFromBasket: function(item) {
      if(this.basket[item.id].amount === 1) {
        this.basket[item.id].amount -= 1;
        this.$delete(this.basket, item.id)
        return;
      }
      this.basket[item.id].amount -= 1;
    }
  }
})