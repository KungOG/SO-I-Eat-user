<template>
  <div>
    <div id="map" class="map"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    map: null,
    tileLayer: null,
  }),
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const defaultMarker = L.icon({
        iconUrl: require('@/assets/icons/MapPin.svg'),
        iconSize: [55, 75],
      });
      this.map = L.map('map', { scrollWheelZoom: false }).setView([56.5125283, 12.9490091], 14);
      this.marker = L.marker([56.5125283, 12.9490091], { icon: defaultMarker }).addTo(this.map);
      this.tileLayer = L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
        {
          maxZoom: 18,
          id: 'sandraottersten/ck3wsk1nr4b8o1cltzc5o0nx3',
          accessToken: 'pk.eyJ1Ijoic2FuZHJhb3R0ZXJzdGVuIiwiYSI6ImNrM3Z2c29tZjBxNzUzbW8zMHVreTNmb3IifQ.6prPUq9dCly0q4FrWnaf1w',
        },
      );
      this.tileLayer.addTo(this.map);
    },
  },
};
</script>

<style lang='scss'>
  .map {
    height: 55vh;
    z-index: 0;
    margin-top: 60px;

  @media (min-width: 768px) {
    height: 700px;
    margin-top: 0;
  }
  }
/*   .leaflet-control-container {
    visibility: hidden;
  } */

</style>
