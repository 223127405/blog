<template>
  <section class="about">
    <header class="header">
      <h1 class="title">About Us</h1>
    </header>
    <GoogleMaps />
  </section>
</template>

<script>
import GoogleMaps from '../components/GoogleMaps.vue';

export default {
  components: {
    GoogleMaps
  }
}
</script>

<style scoped>
.header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.title {
  margin: 0;
}
</style>
