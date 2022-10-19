<template>
  <div
    v-if="$store.state.showModal"
    :style="{ backgroundColor: modalDetails.background }"
    class="modal"
  >
    <h4>{{ modalDetails.title }}</h4>
    <p>{{ modalDetails.description }}</p>
  </div>
</template>

<script>
export default {
  name: "ModalPop",
  props: {
    modalDetails: Object,
  },
  mounted() {
    setTimeout(() => (this.$store.state.showModal = false), 2000);
  },
};
</script>

<style scoped>
.modal {
  /* background: red; */
  color: white;
  position: fixed;
  bottom: 10vh;
  right: 10px;
  padding: 20px 15px;
  border-radius: 5px;
  max-width: 70%;
}

h4 {
  margin-bottom: 5px;
  font-size: 20px;
}

.modal::after {
  content: "";
  height: 20px;
  transform: rotate(45deg);
  width: 20px;
  right: -5px;
  bottom: 10px;
  position: absolute;
  background: inherit;
}

@media (max-width: 480px) {
  .modal {
    padding: 10px 15px;
  }
}
</style>
