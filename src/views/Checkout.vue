<template>
  <div class="checkout">
    <h1>Checkout</h1>
    <div class="checkout-log">
      <div class="cart-container">
        <div v-for="item in $store.state.bag" :key="item.id">
          <div class="cart-item">
            <img :src="require(`@/assets/${item.image}`)" alt="" />
            <div class="item-details">
              <router-link :to="{ name: 'product', params: { id: item.id } }"
                ><h3>{{ item.name }}</h3></router-link
              >
              <h5>{{ item.price }} NGN</h5>
              <div class="increaseQuantity">
                <p>Quantity :</p>
                <div class="buttons">
                  <button @click="item.quantity > 1 ? decreaseQuantity(item) : null">
                    -
                  </button>
                  <button>{{ parseInt(item.quantity) }}</button>
                  <button @click="increaseQuantity(item)">+</button>
                </div>
              </div>
              <div class="increaseQuantity">
                <p>Ratings :</p>
                <p v-for="i in item.ratings" :key="i.index">
                  <i class="fa-solid star fa-star"></i>
                </p>
                <p v-for="i in 5 - item.ratings" :key="i.index">
                  <i class="fa-regular star fa-star"></i>
                </p>
              </div>
              <button @click="removeFromCart(item)" class="remove">
                <i class="fa-solid fa-trash"></i> Remove from Bag
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="checkout-details">
        <div class="check">
          <h2>Product Quantity</h2>
          <h2>{{ $store.state.bag.length }}</h2>
        </div>
        <div v-for="item in $store.state.bag" :key="item.id" class="check">
          <h3>{{ item.name }} x {{ item.quantity }}</h3>
          <h3 class="amount">{{ item.price * item.quantity }} NGN</h3>
        </div>
        <hr />
        <div class="check">
          <h3 class="amount">Total</h3>
          <h3 class="amount">{{ $store.getters.totalAmount }} NGN</h3>
        </div>
        <div class="out">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutPage",
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
    increaseQuantity(item) {
      this.$store.state.showModal = true;
      item.quantity++;
      this.$store.state.modalDetails = {
        title: "Cart item updated",
        description: `Quantity of ${item.name} in cart has been increased`,
        background: "#1570fa",
      };
    },
    decreaseQuantity(item) {
      this.$store.state.showModal = true;
      item.quantity--;
      this.$store.state.modalDetails = {
        title: "Cart item reduced",
        description: `Quantity of ${item.name} in cart has been reduced`,
        background: "#1570fa",
      };
    },
  },
};
</script>

<style scoped>
.checkout {
  padding: 50px 100px;
}

.checkout-log {
  margin-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: flex-start;
}
.cart-container {
  /* margin-top: 30px; */
  display: block;
}

.cart-item {
  display: flex;
  gap: 20px;
  height: 300px;
  margin-bottom: 20px;
  align-items: center;
}

.increaseQuantity {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-block: 15px;
}

h3,
h5 {
  color: #1570fa;
}

h5 {
  margin-block: 10px;
}

.buttons {
  display: flex;
  gap: 5px;
}

.buttons button {
  width: 30px;
  height: 30px;
  border: none;

  outline: none;
}

a {
  text-decoration: none;
}

button.remove {
  border: 2px solid #1570fa;
  background: white;
  color: #1570fa;
  padding: 10px;
  border-radius: 5px;
}

i.star {
  color: gold;
}

.cart-item img {
  height: 100%;
  width: 300px;
}

.checkout-details {
  padding: 20px;
  background: #f5f5f5;
  margin-top: 30px;
  /* width: 500px; */
}

.check {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  gap: 30px;
  /* font-size: 12px; */
}

.amount {
  color: #1570fa;
}

hr {
  color: #1570fa;
  margin-block: 10px;
}

.out {
  text-align: center;
  margin-top: 20px;
}

.out button {
  padding: 10px 30px;
  font-family: DM Sans;
  color: #1570fa;
  border: 2px solid #1570fa;
  background: white;
  border-radius: 5px;
  font-weight: 700;
}

@media (max-width: 480px) {
  .checkout {
    padding: 30px 20px;
  }

  .checkout-log {
    flex-direction: column;
  }

  .cart-item {
    width: 100%;
    height: auto;
    gap: 10px;
  }

  .increaseQuantity {
    gap: 2px;
    margin-block: 7px;
  }

  .cart-item img {
    width: 50%;
  }

  i.star {
    font-size: 10px;
  }

  .checkout-details {
    width: 100%;
  }
  .buttons button {
    width: 20px;
    height: 20px;
  }

  .item-details {
    font-size: 15px;
  }

  button.remove {
    padding: 5px;
  }

  .check {
    font-size: 12px;
  }
}
</style>
