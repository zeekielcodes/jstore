<template>
  <div class="cart">
    <h1>
      {{
        this.$store.state.bag.length > 0
          ? `My Bag (${this.$store.state.bag.length})`
          : "Bag is empty"
      }}
    </h1>
    <div class="cart-list">
      <div v-for="item in $store.state.bag" :key="item.id">
        <EachProduct :details="item" />

        <div class="control">
          <h5>{{ item.quantity }} in bag</h5>
          <button @click="removeFromCart(item)" class="remove">
            <i class="fa-solid fa-trash"></i> Remove from Bag
          </button>
        </div>
      </div>
    </div>
    <div v-if="$store.state.bag.length > 0">
      <div class="total">
        <h6>TOTAL :</h6>
        <h6>{{ $store.getters.totalAmount }} NGN</h6>
      </div>
      <div class="proceed">
        <router-link to="/checkout">PROCEED</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import EachProduct from "../components/Product.vue";
export default {
  name: "CartPage",
  mounted() {},
  components: {
    EachProduct,
  },
  methods: {
    removeFromCart(item) {
      console.log(item);
      this.$store.state.bag = this.$store.state.bag.filter(
        (product) => product.id !== item.id
      );
      this.$store.state.showModal = true;
      this.$store.state.modalDetails = {
        title: "Removed from Cart",
        description: `${item.name} has been removed from cart successfully`,
        background: "#880808",
      };
    },
  },
};
</script>

<style scoped>
.cart {
  padding: 50px 100px;
}

.cart-list {
  display: flex;
  gap: 40px 15px;
  flex-wrap: wrap;
  margin-block: 30px;
}

button.remove {
  border: 2px solid #1570fa;
  background: white;
  color: #1570fa;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
}

.control {
  text-align: center;
}

.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1570fa;
  font-size: 25px;
  border-top: 3px solid #1570fa;
  padding-block: 20px;
}

.proceed {
  text-align: center;
  padding-block: 20px;
}

.proceed a {
  padding: 10px 30px;
  border: 2px solid #1570fa;
  background: white;
  color: #1570fa;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 700;
}

a {
  text-decoration: none;
}

@media (max-width: 480px) {
  .cart {
    padding: 30px 20px;
  }

  .cart-list {
    /* justify-content: center; */
  }
}
</style>
