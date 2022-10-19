<template>
  <div class="store">
    <h1>Store</h1>
    <div class="container">
      <div class="filters">
        <h4><i class="fa-solid fa-filter"></i> Filters</h4>
        <select name="price" @change="filterPrice()" id="price">
          <option selected>Price <i class="fa-solid fa-caret-down"></i></option>
          <option value="less10000">Below 10k</option>
          <option value="over10000">10k+</option>
        </select>
        <select name="ratings" @change="filterRatings()" id="ratings">
          <option selected>Ratings</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <select name="price" id="colors">
          <option value="" selected>Colors</option>
        </select>
        <div class="search">
          <input
            type="search"
            name="search"
            id="search"
            v-model="search"
            autocomplete="off"
            placeholder="Search product"
            @keyup="searchProduct()"
          />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <div class="products">
        <h5 v-if="products.length < 1">Nothing found</h5>
        <div v-for="product in products" :key="product.id">
          <EachProduct :details="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from "../products.json";
import EachProduct from "../components/Product.vue";
export default {
  name: "StorePage",
  components: {
    EachProduct,
  },
  data() {
    return {
      products: [...products.men, ...products.new, ...products.hot],
      search: "",
    };
  },
  mounted() {
    console.log(this.products);
  },
  methods: {
    searchProduct() {
      console.log("searching");
      this.products = [...products.men, ...products.new, ...products.hot];
      this.products = this.products.filter((item) =>
        item.name.toUpperCase().match(this.search.toUpperCase())
      );
    },
    filterPrice() {
      this.products = [...products.men, ...products.new, ...products.hot];
      console.log(this.$el.querySelector("#price").value);
      const price = this.$el.querySelector("#price").value;
      switch (price) {
        case "over10000":
          this.products = this.products.filter((item) => item.price >= 10000);
          break;

        case "less10000":
          this.products = this.products.filter((item) => item.price < 10000);
      }
    },
    filterRatings() {
      this.products = [...products.men, ...products.new, ...products.hot];
      console.log(this.$el.querySelector("#ratings").value);
      const ratings = this.$el.querySelector("#ratings").value;
      switch (ratings) {
        case "1":
          this.products = this.products.filter((item) => item.ratings === 1);
          break;

        case "2":
          this.products = this.products.filter((item) => item.ratings === 2);
          break;

        case "3":
          this.products = this.products.filter((item) => item.ratings === 3);
          break;

        case "4":
          this.products = this.products.filter((item) => item.ratings === 4);
          break;

        case "5":
          this.products = this.products.filter((item) => item.ratings === 5);
          break;
      }
    },
  },
};
</script>

<style scoped>
.store {
  padding: 50px 100px;
}

.container {
  display: flex;
  flex-direction: column;

  /* align-items: flex-start; */
  margin-top: 30px;
  width: 100%;
  gap: 20px;
}

h5 {
  font-size: 20px;
  margin-top: 25px;
}

.products {
  display: flex;
  flex-wrap: wrap;

  gap: 20px;
  justify-content: center;
}

/* option {
  padding: 10px 30px;
} */

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.search {
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  background: white;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3), 3px 3px 5px rgba(0, 0, 0, 0.1);
}

.filters h4 {
  background: #1570fa;
  color: white;
  padding: 10px 30px;
}

select {
  padding: 10px 30px;
  /* margin-block: 5px; */
  width: 200px;
  /* appearance: none; */

  border: none;
  font-size: 16px;
  outline: none;
  background: white;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
}

input {
  width: auto;

  border: none;
  outline: none;
}

@media (max-width: 480px) {
  .store {
    padding: 30px 20px;
  }

  .products {
    gap: 10px;
  }

  .filters {
    gap: 10px;
  }

  select {
    padding: 10px 15px;
    width: 150px;
  }

  .search {
    width: 100%;
  }

  input {
    height: 35px;
    width: 90%;
  }
}
</style>
