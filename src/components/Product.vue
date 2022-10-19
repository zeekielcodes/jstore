<template>
  <div class="product">
    <img :src="require(`@/assets/${details.image}`)" alt="" />
    <div class="details">
      <div class="nameNprice">
        <router-link :to="{ name: 'product', params: { id: details.id } }"
          ><h2>{{ details.name }}</h2></router-link
        >

        <h3>{{ details.price }} NGN</h3>
      </div>
      <div class="others">
        <button class="bag" @click="addToCart()">
          <i class="fa-solid fa-bag-shopping"></i>
        </button>
        <button @click="addToFavorite()"><i class="fa-solid fa-heart"></i></button>

        <p class="ratings">
          <span v-for="i in details.ratings" :key="i.index">
            <i class="fa-solid star fa-star"></i>
          </span>
          <span v-for="i in 5 - details.ratings" :key="i.index">
            <i class="fa-regular star fa-star"></i>
          </span>
          <!-- {{ details.ratings }} star -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EachProduct",
  props: {
    details: Object,
  },
  methods: {
    addToCart() {
      //   console.log(this.$store.state.bag);
      const product = {
        id: this.details.id,
        name: this.details.name,
        image: this.details.image,
        price: this.details.price,
        ratings: this.details.ratings,
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
      console.log(this.$store.state.bag);
    },
    addToFavorite() {
      const product = {
        id: this.details.id,
        name: this.details.name,
        image: this.details.image,
        price: this.details.price,
        ratings: this.details.ratings,
        quantity: 1,
      };

      const already = this.$store.state.favorite.find((item) => item.id === product.id);
      this.$store.state.showModal = true;
      if (already) {
        this.$store.state.modalDetails = {
          title: "Already on wishlist",
          description: `${already.name} is already on your wishlist`,
          background: "#1570fa",
        };
      } else {
        this.$store.state.favorite = [...this.$store.state.favorite, product];
        this.$store.state.modalDetails = {
          title: "Added to Favorites",
          description: `${product.name} has been added to your wishlist successfully`,
          background: "green",
        };
      }
    },
    // showDetails() {
    //   console.log(this.details);
    //   this.$router.push({ name: "product", params: { data: this.details } });
    // },
  },
};
</script>

<style scoped>
.product {
  /* padding:10px; */
  width: 330px;
}

.product img {
  width: 100%;
  height: 330px;
}

.product h2 {
  margin-top: 10px;
}

.others {
  text-align: right;
}

.details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding-inline: 20px;
}

.others button {
  background: #1570fa;
  border-radius: 50%;
  color: white;
  height: 30px;
  width: 30px;
  border: none;
  outline: none;
}

h3 {
  color: #1570fa;
}

button.bag {
  margin-right: 10px;
}

p.ratings {
  color: #808080;
}

i.star {
  color: gold;
  font-size: 12px;
}

a {
  color: black;
  text-decoration: none;
}

@media (max-width: 480px) {
  .product {
    width: 42vw;
  }
  h2,
  h3 {
    font-size: 10px;
  }

  h2 {
    margin-bottom: 5px;
    font-size: 12px;
  }

  .product img {
    height: unset;
  }

  .details {
    font-size: 10px;
    padding-inline: 2px;
  }

  .others button {
    height: 20px;
    width: 20px;
  }

  button.bag {
    margin-right: 5px;
  }

  i.star {
    font-size: 10px;
    margin-top: 5px;
  }
}
</style>
