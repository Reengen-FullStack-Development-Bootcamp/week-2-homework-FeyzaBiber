<template>
  <div class="hello">
    <h1>Welcome to Hotel Page !</h1>
    <v-img
      :src="require('../assets/' + singleHotel.image)"
      class="rounded-0 imgcss HotelImage"
    
    ></v-img>
    <h2>{{ singleHotel.title }}</h2>
    <h2>Location: {{ singleHotel.location }}</h2>
    <h2>Stars: {{ singleHotel.stars }}</h2>
    <h2>Price: {{ singleHotel.price }}</h2>
    <v-card elevation="4" outlined shaped>
      <v-col>
        <v-row><input type="number" id="capacity" v-model="capacity" /></v-row>
        <v-row><v-btn  color="warning"  dark @click="gofillForm">Make A Reservation</v-btn></v-row>
      </v-col>
    </v-card>
  </div>
</template>

<script>
import json from "../data/hotels.json";

export default {
  name: "HotelPage",
  props: {},
  data() {
    return {
      capacity: 1,
      Hotellist: json,
      singleHotel: JSON.parse(JSON.stringify(json)).find(
        (singleHotel) => singleHotel.id == this.$route.params.id
      ),
    };
  },
  computed: {
    hotelId() {
      return this.$route.params.id; // From route
    },
    info() {
      return this.$route.params.info;
    },
  },
  Created() {
    this.assignSingleHotel();
  },
  methods: {
    assignSingleHotel() {
      this.Hotellist.filter((p) => p.id === this.hotelId).forEach((p) =>
        console.log(p.form)
      );
    },
    gofillForm() {

      this.$router.push({path: "/reservation/"+this.hotelId,  name: 'Reservation', params: { TotalReservation: this.capacity, id: this.hotelId, hotelName: this.singleHotel.title  }});
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.HotelImage{
    height: 100px;
    margin: 10px;

}
</style>
