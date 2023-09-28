<template>
  <div id="google-map"></div>
</template>

<script>
export default {
  name: 'GoogleMaps',
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const googleMapsScript = document.createElement('script');
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCRzAvLB4OtxEsZvXoMnqj0KDHno2Y_9nI&callback=initMap`;
      googleMapsScript.async = true;
      googleMapsScript.defer = true;
      window.initMap = this.loadMap;
      document.head.appendChild(googleMapsScript);
    },
    loadMap() {
      new window.google.maps.Map(document.getElementById('google-map'), {
        center: { lat: 40.7128, lng: -74.0060 },
        zoom: 12,
      });
    },
  },
};
</script>

<style>
#google-map {
  width: 300px;
  height: 300px;
  position: fixed;
  bottom: 20px;
  left: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
}
</style>
