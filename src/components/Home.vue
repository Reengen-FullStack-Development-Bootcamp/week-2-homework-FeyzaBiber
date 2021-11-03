<template>
  <div id="Home">
    <div class="HotelCard d-flex flex-row justify-content-around">
      <hotel-card 
        v-for="(item, i) in Hotellist"
        :key="i"
        :info="item"
        @goToPage="goHotelPage({ value: $event, type: 'go' })"
      />
  </div>

  </div>
</template>

<script>
import HotelCard from '../components/HotelCard.vue';
import json from '../data/hotels.json'

export default {
  components: { HotelCard },
  name: "App",
  data() {
    return {
      Hotellist: json
    };
  },
  methods: {
    addChar(e) {
      this.title = e;
    },
    goToPage(e){
      console.log(e);
    }
  },
};
</script>

<style>


.HotelBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
}


</style>
