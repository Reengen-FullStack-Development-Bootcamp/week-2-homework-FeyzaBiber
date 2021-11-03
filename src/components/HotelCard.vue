<template>
  <div class="hello">
    <b-card
      no-body
      class="overflow-hidden"
      style="max-width: 450px"
      @click="gotoHotelPage(info)"
    >
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="require('../assets/' + info.image)"
            :alt="info.title"
            class="rounded-0 imgcss"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="info.title" class="title">
            <b-card-text class="body">
              <v-icon>mdi-map</v-icon> {{ info.location }}
            </b-card-text>

            <div>
              <span
                v-for="(el, i) in info.stars"
                :key="i"
                class="fa fa-star checked"
              />
              <span
                v-for="(el, i) in 5 - info.stars"
                :key="'empty-' + i"
                class="fa fa-star"
              />
            </div>
          </b-card-body>
        </b-col>
      </b-row>
      <b-row>
        <h4>
          <b-badge type="dark" variant="light">{{ info.price }} $</b-badge>
        </h4>
      </b-row>
      <b-row>
        <b-button pill variant="outline-secondary" @click="gotoHotelPage(info)">
          Go to Hotel Page
        </b-button>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    info: Object,
  },
  data() {
    return {
    };
  },
  methods: {
    gotoHotelPage(val) {
      this.$router.push({path: '/hotelpage/'+val.id, params:{val: val}})
    }
  }
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
</style>
