<template>
  <div>
    <div style="background:#1d1d1d; padding-top:70px; padding-bottom:70px">
      <p id="header" class="display-2 font-weight-regular text-center">{{type.toUpperCase()}}</p>
      <p class="subtitle-1 font-weight-light text-center">JOE'S RENTALS</p>
    </div>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" :v-if="alert">
          <v-alert prominent type="warning" :value="alert">Currently, there is no available unit</v-alert>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="12" v-for="(item,i) in list" v-bind:key="i">
              <CardListings :item="item" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import CardListings from '../components/listings_card'
export default {
  components: {
    CardListings
  },
  data () {
    return {
      JSON_: {},
      list: []
    }
  },
  methods: {
    setList () {
      this.list = this.JSON_[this.type]
    }
  },
  mounted () {
    this.JSON_ = require('../data/properties.json')
    this.list = this.JSON_[this.$route.params.type]
  },
  computed: {
    alert () {
      if (this.list.length === 0) return true
      return false
    },
    type () {
      return this.$route.params.type
    }
  },
  watch: {
    type: function (val) {
      this.list = this.JSON_[this.$route.params.type]
    }
  }
}
</script>
<style scoped>
#header {
  color: white;
}
#header::after {
  content: "";
  border-bottom: 2px solid white;
  width: 225px;
  height: 15px;
  margin: auto;
  top: 125px;
  display: block;
}
p{
  color: white;
}
</style>
