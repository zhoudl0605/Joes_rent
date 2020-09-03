<template>
  <div>
    <!-- display images in large screen -->
    <Gallery :images="images" class="d-none d-md-flex" style="height: 700px" />
    <!-- gallery for screen smaller than md  -->
    <div class="d-flex d-md-none">
      <v-carousel show-arrows-on-hover>
        <v-carousel-item v-for="(item,i) in images" v-bind:key="i" contain :src="item.href"></v-carousel-item>
      </v-carousel>
    </div>
    <!-- content about building  -->
    <v-container>
      <v-row no-gutters justify="center" align="stretch">
        <!-- name location and apply -->
        <v-col cols="12" lg="10" xl="8" class="mt-5">
          <v-row no-gutters justify="space-between" align="center">
            <!-- building name  -->
            <v-col cols="12" sm="10" md="10" lg="10" xl="10">
              <p class="display-1 font-weight-bold">{{building.name}}</p>
              <p>{{building.address}}, {{building.city}}, {{building.province}} {{building.postal_code}}</p>
            </v-col>
            <!-- apply button  -->
            <v-col cols="12" sm="2" md="2" lg="2" xl="2">
              <Apply :building_data="building" />
            </v-col>
          </v-row>
        </v-col>
        <!-- unit type -->
        <v-col
          id="title_outside"
          cols="12"
          lg="10"
          xl="8"
          class="title font-weight-bold"
          v-if="building.units"
        >
          <span id="title">Unit Type</span>
        </v-col>
        <!-- type detials -->
        <v-col cols="12" lg="10" xl="8" v-if="building.units">
          <v-container>
            <v-row>
              <v-col v-for="(item,index) in building.units" :key="index" cols="6" sm="4">
                <v-card>
                  <v-container>
                    <p class="title">{{item.name}}:</p>
                    <p
                      class="title font-weight-bold"
                      style="color:red"
                      v-if="!item.availability"
                    >SOLD OUT</p>
                    <span>
                      <span v-for="(subitem, key, index2) in item" :key="index2">
                        <p v-if="subitem != '' && key != 'availability' && key != 'name'">
                          <span>
                            {{key}}:
                            <span v-if="key=='price'">$</span>
                            {{subitem}}
                          </span>
                        </p>
                      </span>
                    </span>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <!-- description -->
        <v-col
          id="title_outside"
          cols="12"
          sm="10"
          xl="8"
          class="title font-weight-bold"
          v-if="building.description != null"
        >
          <span id="title">More About</span>
        </v-col>
        <!-- description content -->
        <v-col cols="12" lg="10" xl="8" v-if="building.description != null">
          <v-container>
            <p>
              <br />
              <span>{{building.description}}</span>
              <br />
            </p>
          </v-container>
        </v-col>
        <!-- Amenities -->
        <v-col
          id="title_outside"
          cols="12"
          sm="10"
          xl="8"
          class="title font-weight-bold"
          v-if="building.amenities != null"
        >
          <span id="title">Amenities</span>
        </v-col>
        <!-- Amenities detail -->
        <v-col cols="12" lg="10" xl="8" v-if="building.amenities != null">
          <v-container>
            <v-row>
              <v-col v-for="(item,index) in building.amenities" v-bind:key="index" cols="12" sm="3">
                {{index.toUpperCase()}}:
                <span
                  v-for="(subitem, key, index2) in item"
                  v-bind:key="index2"
                >
                  <p v-if="subitem != '' && key != 'availability'">
                    <span>- {{subitem}}</span>
                  </p>
                </span>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <!-- google map title -->
        <v-col id="title_outside" cols="12" sm="10" xl="8" class="title font-weight-bold">
          <span id="title">Location</span>
        </v-col>
        <!-- google map -->
        <v-col cols="12" md="6" class="ma-5">
          <v-container>
            <iframe
              class="map"
              :src="'https://www.google.com/maps/embed/v1/place?key=AIzaSyABGgDJqMkSmiMDNrC-j4CbGDq0kV1cs4s&q=' + building.address +',' + building.city +',' + building.province"
              frameborder="0"
              style="border:0"
              width="100%"
              height="300px"
            ></iframe>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Gallery from 'vue-cover-gallery'
import Apply from '../components/apply'
export default {
  components: {
    Gallery,
    Apply
  },
  data () {
    return {
      JSON_: {},
      building: {},
      images: [],
      window: {
        width: 0,
        height: 0
      }
    }
  },
  mounted () {
    this.JSON_ = require('../data/properties.json')
    this.JSON_[this.$route.params.type].forEach(element => {
      if (element.address === this.$route.params.id) {
        this.building = element
      }
    })
    this.building.images.forEach(element => {
      this.images.push({ href: element })
    })
  }
}
</script>

<style scopped>
.map-image {
  width: 350px;
  height: 250px;
  border-radius: 20px;
}
p {
  margin: 0px !important;
}
#title {
  background-color: #bda87f;
  padding: 5px 14px 5px 14px;
  color: white;
}
#title_outside {
  border-bottom: 2px #bda87f solid;
  margin-top: 20px;
}
</style>
<style>
.img-main {
  background: none !important;
  padding-top: 1px;
  padding-bottom: 1px;
}
</style>
