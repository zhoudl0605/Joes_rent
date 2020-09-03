<template >
  <div :style="styleObject" id="background">
    <Carousel :items="JSON_" />
    <v-container id="background">
      <br />
      <About id="about"/>
      <CardMain />
      <!-- <v-layout row wrap>
      <v-flex xs12 sm6 lg4 v-for="(item,index) in PROPS" :key="index">
        <CardMain :image="item.cover_page" :item="item" />
      </v-flex>
    </v-layout>
      <br />-->
    </v-container>
  </div>
</template>

<script>
import Carousel from '../components/main_page_carousel'
import CardMain from '../components/main_page_card'
import About from '../components/about_section'
export default {
  components: {
    Carousel,
    About,
    CardMain
  },
  data () {
    return {
      JSON_: null,
      styleObject: {
        background: 'url("/uploads/debut_light_@2X.png")',
        backgroundSize: 'repeat'
      }
    }
  },
  mounted () {
    this.JSON_ = require('../data/main_page.json').carousel
  }
}
</script>
<style>
#background {
  background-size: auto;
}
</style>
