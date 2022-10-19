<template>
  <div class="favorite">
    <h1>
      {{
        this.$store.state.favorite.length > 0
          ? `Wishlist (${this.$store.state.favorite.length})`
          : "Wishlist is empty"
      }}
    </h1>
    <div v-for="item in $store.state.favorite" :key="item.id" class="favorite-container">
      <div class="favorite-item">
        <img :src="require(`@/assets/${item.image}`)" alt="" />
        <div class="item-details">
          <router-link :to="{ name: 'product', params: { id: item.id } }"
            ><h3>{{ item.name }}</h3></router-link
          >
          <h5>{{ item.price }} NGN</h5>

          <div class="increaseQuantity">
            <p>Ratings:</p>
            <p>
              <span v-for="i in item.ratings" :key="i.index">
                <i class="fa-solid star fa-star"></i>
              </span>
              <span v-for="i in 5 - item.ratings" :key="i.index">
                <i class="fa-regular star fa-star"></i>
              </span>
            </p>
          </div>
          <button @click="addToCart(item)" class="remove">
            <i class="fa-solid fa-bag-shopping"></i> Add to Bag
          </button>
          <br />
          <button @click="removeFromFavorite(item)" class="remove">
            <i class="fa-solid fa-trash"></i> Remove from Wishlist
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavoritePage",
  mounted() {},
  methods: {
    removeFromFavorite(item) {
      console.log(item);
      this.$store.state.favorite = this.$store.state.favorite.filter(
        (product) => product.id !== item.id
      );
      this.$store.state.showModal = true;
      this.$store.state.modalDetails = {
        title: "Removed from Favorites",
        description: `${item.name} has been removed from wishlist successfully`,
        background: "#880808",
      };
    },
    addToCart(item) {
      const product = {
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        ratings: item.ratings,
        quantity: 1,
      };
      const already = this.$store.state.bag.find((item) => item.id === product.id);
      this.$store.state.showModal = true;
      if (already) {
        already.quantity++;
        this.$store.state.modalDetails = {
          title: "Cart item updated",
          description: `Quantity of ${already.name} in cart has been increased`,
          background: "#1570fa",
        };
      } else {
        this.$store.state.bag = [...this.$store.state.bag, product];
        this.$store.state.modalDetails = {
          title: "Added to Cart",
          description: `${product.name} has been added to cart successfully`,
          background: "green",
        };
      }
    },
  },
};
</script>

<style scoped>
.favorite {
  padding: 50px 100px;
}

.favorite-container {
  margin-top: 30px;
}

.favorite-item {
  display: flex;
  gap: 20px;
  height: 300px;
  margin-bottom: 20px;
  align-items: center;
}

.favorite-item img {
  height: 100%;
  width: 300px;
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

button.remove {
  border: 2px solid #1570fa;
  background: white;
  color: #1570fa;
  padding: 10px;
  border-radius: 5px;
  margin-block: 5px;
}

i.star {
  color: gold;
}

a {
  text-decoration: none;
}

@media (max-width: 480px) {
  .favorite {
    padding: 30px 20px;
  }

  .favorite-item {
    width: 100%;
    height: 200px;
    gap: 10px;
  }

  .increaseQuantity {
    gap: 1px;
    margin-block: 5px;
  }

  .favorite-item img {
    width: 50%;
  }

  button.remove {
    padding: 5px;
    font-size: 10px;
  }
}
</style>
