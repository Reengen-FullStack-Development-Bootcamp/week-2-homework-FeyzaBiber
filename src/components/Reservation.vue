<template>
  <div>
    <h2>Reservation to Hotel: {{ this.$route.params.hotelName }}</h2>
    <h2>Number of People to Reserve: {{ this.capacity }}</h2>
    
    <div v-for="i,index in parseInt(totalForm)" :key="index" :i="i" class="mt-5, margin-left: 10px, margin-right: 10px,padding: 10px"> 
      <h2 align-left> Person No. {{i}}: </h2>
      <reservation-form  class="mt-5, margin-left: 10px, margin-right: 10px,padding: 10px" 
      @invalid="invalid({value: $event, type: 'add'})"/> 
    </div>
    <br>
    <v-row><v-btn  color="warning"  dark  @click="goPayment">Payment</v-btn></v-row>
  </div>
</template>

<script>
import ReservationForm from "./Reservation-Form.vue";

export default {
  components: { ReservationForm },
  name: "Reservation",
  props: {},
  data() {
    return {
      capacity: this.$route.params.TotalReservation,
      name:"",
      totalForm: null
    };
  },
  created() { this.totalForm = this.$route.params.TotalReservation},
  computed: {},
  methods: {

     goPayment() {
       alert(this.$refs.nameInput.value)
       this.show = true
      this.$router.push({path: "/payment",  name: 'Payment', params: { name: this.name }});
    },

    invalid(val) {
			this.name = val
			}

  }
};
</script>

<style scoped>
</style>
