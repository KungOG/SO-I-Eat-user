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
  mounted () {
    this.initMap();
  },
  methods: {
    initMap () {
      var defaultMarker = L.icon({
        iconUrl: require('@/assets/icons/Maps.svg'),
        iconSize: [25, 45]
      })
      this.map = L.map('map').setView([56.5124518, 12.9468567], 13);
      this.marker = L.marker([56.5124518, 12.9468567], { icon: defaultMarker }).addTo(this.map);
      this.tileLayer = L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
        {
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          accessToken: 'pk.eyJ1Ijoic2FuZHJhb3R0ZXJzdGVuIiwiYSI6ImNrM3Z2c29tZjBxNzUzbW8zMHVreTNmb3IifQ.6prPUq9dCly0q4FrWnaf1w',
        }
      )
      this.tileLayer.addTo(this.map);
    },
  },
};
</script>

<style lang='scss'>
  .map {
    height: 60vh;
    z-index: 0;
  }

</style>


