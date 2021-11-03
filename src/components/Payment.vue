<template>
  <div>
    <h2>Payment</h2>
    <div>
    <b-col v-show="show">
      <h3 class="my-4" ref="title">{{ text|capitalize }} ' Congratulations! </h3>
    
    </b-col>
    </div>

  </div>
</template>

<script>
import {global} from '@/mixins/global'


export default {
  name: "Payment",
  props: {
    msg: {
      type: String
    }
  },
  mixins: [global],
  data() {
    return {
      name: '',
      age: null,
      componetName: 'About',
      text: null,
      show: true
    }
  },
  computed: {
    comp() {
      const Home = () => import(`@/components/${this.componetName}`)
      if(this.name) return Home
      else return Home
    }
  },
  methods: {
    sendData() {
      // console.log(this.$refs.title.style)
      // alert(this.$refs.nameInput.value)
      // this.show = true
      this.$refs.modalInput.focus()
      this.text = this.$refs.nameInput.value
      this.$refs.title.style.color = 'blue'
      this.$refs.title.style.fontSize = '40px'
    }
  }
}
</script>

<style scoped>

</style>
