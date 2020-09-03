<template>
  <v-card>
    <v-row align="center" justify="space-around">
      <v-col cols="12" md="4">
        <v-img height="300px" contain :src="item.cover_page"></v-img>
      </v-col>
      <v-col cols="12" md="7">
        <v-container>
          <p class="font-weight-bold display-1">{{item.name}}</p>
          <p>
            <span class="font-weight-bold">
              <v-icon>location_on</v-icon>
            </span>
            {{item.address}}, {{item.city}}, {{item.province}} {{item.postal_code}}
          </p>
          <h3>{{price}}</h3>
          <p v-if="item.description != ''">
            <span class="font-weight-bold">Deacriptrion:</span>
            {{item.description}}
          </p>
          <v-btn color="#bda87f" rounded :to="'/listing/' + $route.params.type+'/'+item.address" style="color:white">Explore</v-btn>
        </v-container>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import pushRouter from '../mixins/routerpushlink.js'
export default {
  name: 'listings_card',
  mixins: [pushRouter],
  props: {
    id: Number,
    image: String,
    item: Object
  },
  data () {
    return {
      imageHeight: '0'
    }
  },
  computed: {
    price () {
      if (this.item.units.length === 1) {
        return '$' + this.item.units[0].price
      } else {
        var low = null
        this.item.units.forEach(element => {
          if (low == null) {
            low = element.price
          }
          if (low > element.price) low = element.price
        })
        return 'Start From $' + low
      }
    }
  }
}
</script>

<style scoped>
p {
  color: black;
}
.pointer {
  cursor: pointer;
}
</style>
