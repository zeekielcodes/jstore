import { createStore } from 'vuex'

export default createStore({
  state: {
    bag: [],
    favorite: [],
    showModal: false,
    modalDetails: {
      title: "Added to Cart",
      description: "Your item has been added to Cart",
      background: "orange"
    }
  },
  getters: {
    totalAmount(state) {
      const prices = state.bag.map((item) => item.price * item.quantity);
    console.log(prices);
    const total = prices.reduce((acc, price) => acc + price, 0);
    console.log(new Intl.NumberFormat(total));
    // this.$store.state.total = total;
    return total
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
