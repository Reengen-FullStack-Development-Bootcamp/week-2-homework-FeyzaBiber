<template>
  <div class="hello">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">
        <img
          src="../assets/hotel-icon.png"
          width="30px"
          height="30px"
          class="rounded-circle"
        />
        Hotel Booking</b-navbar-brand
      >
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>

      </b-navbar-nav>
    </b-navbar>
    <!---------->
  </div>
</template>

<script>
export default {
  name: "HeaderMenu",
  props: {
    msg: String,
  },

  watch: {
    $route(to, from) {
      console.log(to, from);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: px 40 0;
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
</style>
