<template>
  <v-container class="mt-10">
    <!-- space for title -->
    <v-row no-gutters justify="center" align="stretch">
      <v-col id="title_outside" cols="12" class="title font-weight-bold">
        <span id="title">AVAILABLE UNIT</span>
      </v-col>
      <v-col cols="12">
        <div v-for="(item,i) in JSON_" v-bind:key="i">
          <v-row
            no-gutters
            justify="center"
            align="stretch"
            class="my-12 d-none d-md-flex"
            v-if="getIndex(i, Object.keys(JSON_))%2 == 0 && item.length >0"
          >
            <v-col sm="12" md="7" lg="7" xl="7">
              <v-carousel cycle show-arrows-on-hover hide-delimiter-background>
                <v-carousel-item
                  v-for="(unit,j) in item"
                  v-bind:key="j"
                  :src="unit.cover_page"
                  :to="'listing/'+i+'/'+unit.address"
                >
                  <v-container style="background: #2d2d2d5d">
                    <p class="font-weight-bold" style="color:white;">{{unit.name}} {{unit.address}}</p>
                    <p
                      class="font-weight-bold" style="color:white;"
                    >{{unit.city}}, {{unit.province}}, {{unit.postal_code}}</p>
                  </v-container>
                </v-carousel-item>
              </v-carousel>
            </v-col>
            <v-spacer class="d-none d-md-flex" />
            <v-col sm="12" md="4" lg="4" xl="4">
              <p class="display-1 font-weight-black" v-if="item.length<10">0{{item.length}}</p>
              <p class="display-1 font-weight-black" v-else>{{item.length}}</p>
              <p class="display-3 font-weight-bold">{{upperCase(i)}}</p>
              <p class="title font-weight-regular">{{descriptions[i]}}</p>
              <v-btn dark rounded :to="'/listing/' + i">Explore</v-btn>
            </v-col>
          </v-row>
          <v-row
            no-gutters
            justify="center"
            align="stretch"
            class="my-12 d-none d-md-flex"
            v-else-if="item.length >0"
          >
            <v-col sm="12" md="4" lg="4" xl="4">
              <p class="display-1 font-weight-black" v-if="item.length<10">0{{item.length}}</p>
              <p class="display-1 font-weight-black" v-else>{{item.length}}</p>
              <p class="display-3 font-weight-bold">{{upperCase(i)}}</p>
              <p class="title font-weight-regular">{{descriptions[i]}}</p>
              <v-btn dark rounded :to="'/listing/' + i">Explore</v-btn>
            </v-col>
            <v-spacer class="d-none d-md-flex" />
            <v-col sm="12" md="7" lg="7" xl="7">
              <v-carousel cycle show-arrows-on-hover hide-delimiter-background>
                <v-carousel-item v-for="(unit,i) in item" v-bind:key="i" :src="unit.cover_page">
                  <v-container style="background: #2d2d2d5d">
                    <p class="font-weight-bold" style="color:white;">{{unit.name}} {{unit.address}}</p>
                    <p
                      class="font-weight-bold" style="color:white;"
                    >{{unit.city}}, {{unit.province}}, {{unit.postal_code}}</p>
                  </v-container>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
          <v-row
            no-gutters
            justify="center"
            align="stretch"
            class="my-12 d-flex d-md-none"
            v-if="item.length >0"
          >
            <v-col sm="12">
              <v-carousel cycle show-arrows-on-hover hide-delimiter-background>
                <v-carousel-item v-for="(unit,i) in item" v-bind:key="i" :src="unit.cover_page">
                  <v-container style="background: #2d2d2d5d">
                    <p class="font-weight-bold" style="color:white;">{{unit.name}} {{unit.address}}</p>
                    <p
                      class="font-weight-bold" style="color:white;"
                    >{{unit.city}}, {{unit.province}}, {{unit.postal_code}}</p>
                  </v-container>
                </v-carousel-item>
              </v-carousel>
            </v-col>
            <v-spacer class="d-none d-md-flex" />
            <v-col sm="12">
              <p class="display-1 font-weight-black" v-if="item.length<10">0{{item.length}}</p>
              <p class="display-1 font-weight-black" v-else>{{item.length}}</p>
              <p class="display-3 font-weight-bold">{{upperCase(i)}}</p>
              <p class="title font-weight-regular">{{descriptions[i]}}</p>
              <v-btn dark rounded :to="'/listing/' + i">Explore</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      JSON_: {},
      counter: 0,
      descriptions: {}
    }
  },
  mounted () {
    this.JSON_ = require('../data/properties.json')
    this.descriptions = require('../data/main_page.json').description
  },
  methods: {
    upperCase (i) {
      return i.charAt(0).toUpperCase() + i.slice(1)
    },
    getIndex (type, array) {
      for (let index = 0; index < array.length; index++) {
        if (type === array[index]) return index
      }
    }
  }
}
</script>
<style scoped>
#boder {
  border: #676767 10px;
}
#title {
  background-color: #bda87f;
  padding: 5px 14px 5px 14px;
  color: white;
}
#title_outside {
  border-bottom: 2px #bda87f solid;
  margin-bottom: 20px;
}
#content {
  color: #676767;
}
p {
  color: black;
}
</style>
