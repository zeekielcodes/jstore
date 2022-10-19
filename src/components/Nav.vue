<template>
  <nav>
    <router-link to="/"><img src="../assets/JSTORE.png" alt="" /></router-link>

    <ul>
      <li><router-link to="/store">Store</router-link></li>
      <li><a href="">Category</a></li>
      <li><a href="#">About</a></li>
      <li><a href="">Brands</a></li>
    </ul>
    <div class="buttons">
      <router-link to="/favorite" class="button login"
        >Favorites <i class="fa-solid fa-heart"></i>&nbsp;
        <span class="quantity" v-if="$store.state.favorite.length > 0"
          >({{ $store.state.favorite.length }})
        </span></router-link
      >
      <router-link to="/cart" class="button signup">
        Bag <i class="fa-solid fa-bag-shopping"></i>&nbsp;
        <span class="quantity" v-if="$store.state.bag.length > 0"
          >({{ $store.state.bag.length }})</span
        >
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;
}

nav ul li {
  display: inline;
  margin: 0 20px;
}

.buttons {
  display: flex;
  gap: 20px;
}

.buttons button,
.buttons .button {
  padding: 10px 30px;
  border-radius: 5px;
  font-family: DM Sans;
}

a.login {
  background: #1570fa;
  color: white;
  border: 1px solid white;
  text-decoration: none;
}

a.signup {
  text-decoration: none;
  color: #1570fa;
  background: white;
  border: 1px solid #1570fa;
}

li a {
  text-decoration: none;
  color: black;
}

span.quantity {
  font-weight: 700;
}

@media (max-width: 480px) {
  nav {
    padding: 10px 20px;
    flex-direction: column;
    gap: 20px;
  }

  .buttons button,
  .buttons .button {
    padding: 5px 10px;
  }
}
</style>
