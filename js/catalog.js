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
    basket: {

    }
  },
  computed: {
    productName: function() {
      // написать forEach 
      let amount = 0;
      let isEmptyObject = function (obj) { return Object.keys(obj).length === 0; };      
      console.log('gr')
      return this.basket;
      console.log()
      for (var key in this.basket) {
        console.log( " значение: " + this.basket[key] );
        amount += this.basket[key]
      }
      console.log('amount '+ amount)

      if(amount > 0) {
        return amount;
      } else {
        return "пусто";
      }
    }
  },
  methods: {
    addItemToBasket: function(id) {
      if(!this.basket[id]) {
        this.basket[id] = 1;
      } else {
        this.basket[id] += 1;
      }
    },
    deleteItemFromBasket: function(id) {
      if(this.basket[id] === 0) return;
      this.basket[id] -= 1
    }
  }
})
