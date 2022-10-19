<template>
  <div class="banner">
    <div class="overlay">
      <h1>Nothing Less But <span>Quality</span></h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      </p>
      <div class="cta">
        <button class="shop" @click="$router.push('/store')">Shop now</button>
        <button class="download">Download App</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerSection",
};
</script>

<style scoped>
.banner {
  background: url("../assets/image.png");
  height: 100vh;
  position: relative;
  color: white;
}

.overlay {
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cta {
  display: flex;
  gap: 30px;
}
.cta button {
  padding: 10px 30px;
  border-radius: 5px;
  font-family: DM Sans;
}

button.shop {
  background: #1570fa;
  color: white;
  border: 1px solid #1570fa;
}

button.download {
  color: #1570fa;
  background: white;
  border: 1px solid #1570fa;
}

h1 {
  font-size: 48px;
}

p {
  font-size: 20px;
  margin-block: 20px;
  width: 60%;
  text-align: center;
}

span {
  color: #1570fa;
}

@media (max-width: 480px) {
  .banner {
    height: 60vh;
    background-size: cover;
    padding: 20px;
  }

  .overlay {
    text-align: center;
  }

  h1 {
    font-size: 35px;
  }

  p {
    width: 90%;
  }

  .cta {
    gap: 10px;
  }
}
</style>
