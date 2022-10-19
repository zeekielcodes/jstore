<template>
  <main>
    <NavBar />
    <router-view />
    <div v-if="$store.state.showModal">
      <ModalPop :modalDetails="$store.state.modalDetails" />
    </div>

    <FooterSection />
  </main>
</template>

<script>
import NavBar from "@/components/Nav.vue";
import FooterSection from "@/components/Footer.vue";
import ModalPop from "@/components/Modal.vue";
export default {
  components: {
    NavBar,
    FooterSection,
    ModalPop,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: DM Sans;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
