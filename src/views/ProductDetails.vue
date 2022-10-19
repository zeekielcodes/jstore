<template>
  <div class="product-details">
    <h2>Product Details</h2>
    <div class="description">
      <div class="images">
        <img :src="require(`@/assets/${product.image}`)" alt="" />
        <div class="more-images">
          <img :src="require(`@/assets/${product.image}`)" alt="" />
          <img :src="require(`@/assets/${product.image}`)" alt="" />
          <img :src="require(`@/assets/${product.image}`)" alt="" />
        </div>
      </div>

      <div class="details">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <h4>{{ product.price }} NGN</h4>
        <div class="increaseQuantity">
          <p>Ratings :</p>
          <p v-for="i in product.ratings" :key="i.index">
            <i class="fa-solid star fa-star"></i>
          </p>
          <p v-for="i in 5 - product.ratings" :key="i.index">
            <i class="fa-regular star fa-star"></i>
          </p>
        </div>
        <button @click="addToCart(product)" class="fill">
          <i class="fa-solid fa-bag-shopping"></i> Add to Bag
        </button>

        <button @click="addToFavorite(product)">
          <i class="fa-solid fa-heart"></i> Add to Wishlist
        </button>
      </div>
    </div>
    <div class="similar">
      <h5>Related Products</h5>
      <p>Sed ut perspiciatis unde omnis iste natus error sit</p>
      <div class="products">
        <div v-for="item in similar" :key="item.id">
          <EachProduct :details="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from "../products.json";
import EachProduct from "../components/Product.vue";
export default {
  name: "ProductDetails",
  data() {
    return {
      product: {},
      simmilar: {},
    };
  },
  components: {
    EachProduct,
  },
  props: {
    id: Number,
  },
  mounted() {
    console.log(this.$route);
    console.log(this.product);
    console.log(this.id);
  },

  created() {
    const all = [...products.men, ...products.new, ...products.hot];
    this.product = all.find((item) => item.id === this.id);
    console.log(this.product);

    this.similar = all.filter((item) => item.id !== this.id);
    this.similar.length = 3;
  },
  methods: {
    addToCart() {
      const product = {
        id: this.product.id,
        name: this.product.name,
        image: this.product.image,
        price: this.product.price,
        ratings: this.product.ratings,
        quantity: 1,
      };
      this.$store.state.showModal = true;
      const already = this.$store.state.bag.find((item) => item.id === product.id);

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
        id: this.product.id,
        name: this.product.name,
        image: this.product.image,
        price: this.product.price,
        ratings: this.product.ratings,
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
  },
};
</script>

<style scoped>
.product-details {
  padding: 50px 100px;
}

.description {
  display: flex;
  margin-top: 30px;
  /* align-items: center; */
  gap: 20px;
}

.images,
.details {
  width: 45%;
}

.description img {
  width: 100%;
}

.increaseQuantity {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-block: 15px;
}

.more-images {
  display: flex;
  gap: 10px;
}

.products {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

h3,
h4 {
  color: #1570fa;
}

p {
  margin-block: 15px;
  text-align: justify;
}

button {
  border: 2px solid #1570fa;
  background: white;
  color: #1570fa;
  padding: 10px;
  border-radius: 5px;
  margin-right: 5px;
}

button.fill {
  background: #1570fa;
  color: white;
}

i.star {
  color: gold;
}

.similar {
  margin-top: 50px;
  padding-block: 30px;
}

.similar h5 {
  font-size: 20px;
  line-height: 10px;
}

.more-images {
  width: 100%;
  justify-content: space-between;
}

.more-images img {
  width: 31%;
}

@media (max-width: 480px) {
  .product-details {
    padding: 30px 20px;
  }

  .description {
    flex-direction: column;
  }

  .images,
  .details {
    width: 100%;
  }

  .more-images {
    width: 100%;
    justify-content: space-between;
  }

  .more-images img {
    width: 31%;
  }

  .products {
    gap: 10px;
  }
}
</style>
