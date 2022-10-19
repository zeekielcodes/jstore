<template>
  <nav>
    <div class="menu">
      <router-link to="/"><img src="../assets/JSTORE.png" alt="" /></router-link>
      <div class="buttons"></div>
      <div class="buttons">
        <router-link to="/favorite" class="button login"
          ><i class="fa-solid fa-heart"></i>
          <span class="quantity" v-if="$store.state.favorite.length > 0"
            >({{ $store.state.favorite.length }})
          </span></router-link
        >
        <router-link to="/cart" class="button signup">
          <i class="fa-solid fa-bag-shopping"></i>
          <span class="quantity" v-if="$store.state.bag.length > 0"
            >({{ $store.state.bag.length }})</span
          >
        </router-link>
      </div>
    </div>

    <ul>
      <li><router-link to="/store">Store</router-link></li>
      <li><a href="">Category</a></li>
      <li><router-link to="/">About</router-link></li>
      <li><a href="">Brands</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MobileNav",
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
