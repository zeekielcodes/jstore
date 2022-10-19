<template>
  <div class="hot">
    <h2>Hot products</h2>
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
          slidesPerView: 3,
          spaceBetween: 40,
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
  name: "HotProduct",
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
      products: products.hot,
    };
  },
};
</script>

<style scoped>
.hot {
  padding: 50px 100px;
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

@media (max-width: 480px) {
  .hot {
    padding: 30px 20px;
    margin-top: 20px;
  }
}
</style>
