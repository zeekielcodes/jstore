<template>
  <div class="home">
    <BannerSection />
    <PopularSection />
    <NewProduct />
    <HotProduct />
  </div>
</template>

<script>
// @ is an alias to /src
import BannerSection from "@/components/Banner.vue";
import PopularSection from "@/components/Popular.vue";
import NewProduct from "@/components/New.vue";
import HotProduct from "@/components/Hot.vue";

export default {
  name: "HomeView",
  components: {
    BannerSection,
    PopularSection,
    NewProduct,
    HotProduct,
  },
};
</script>
