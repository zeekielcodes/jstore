<template>
  <div class="popular">
    <h2>Popular products</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit</p>
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :navigation="false"
      :loop="true"
      :autoplay="{
        delay: 1500,
        disableOnInteraction: true,
      }"
      :breakpoints="{
        '300': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="product in products" :key="product.id"
        ><EachProduct :details="product"
      /></swiper-slide>
    </swiper>

    <!-- <div class="wrapper">
      <div class="products">
        <div v-for="product in products" :key="product.id">
          <EachProduct :details="product" />
        </div>
      </div>
    </div> -->
    <!-- 
    <i class="fa-solid fa-bookmark"></i>
    <i class="fa-solid fa-bell"></i> -->
    <div class="more">
      <a href="#">See more &#62;</a>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import products from "../products.json";
import EachProduct from "./Product.vue";
export default {
  name: "PopularSection",
  components: {
    EachProduct,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay],
    };
  },
  data() {
    return {
      products: products.men,
    };
  },
  methods: {},
  // mounted() {
  //     console.log(products);
  // }
};
</script>

<style scoped>
.popular {
  padding: 50px 100px;
  margin-top: 40px;
}

p {
  margin-block: 10px;
}

.products {
  display: inline-flex;
  gap: 15px;
}

.wrapper {
  overflow-x: scroll;
  scrollbar-width: none;
}
.wrapper::-webkit-scrollbar {
  display: none;
}

/* .mySwiper {
  justify-content: center;
  align-items: center;
} */

a {
  font-size: 25px;
  color: #1570fa;
  text-decoration: none;
  /* float: right; */
}

.more {
  text-align: right;
  margin-top: 50px;
  font-weight: 700;
}

.swiper-button-next {
  background: black;
  border-radius: 50%;
  height: 50px;
  width: 50%;
}

@media (max-width: 480px) {
  .popular {
    padding: 30px 20px;
    margin-top: 20px;
  }
}
</style>
