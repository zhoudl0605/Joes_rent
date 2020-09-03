<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent>
      <template v-slot:activator="{ on }">
        <v-btn large rounded dark v-on="on">apply</v-btn>
      </template>
      <v-form
        ref="form"
        v-model="valid"
        name="application-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
      >
        <v-card>
          <v-card-title>
            <span class="headline">Apply Form</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="First Name*"
                    v-model="form.first_name"
                    name="first_name"
                    :rules="rules.nameRules"
                    maxlength="200"
                    counter="200"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Middel Name"
                    v-model="form.middle_name"
                    name="middle_name"
                    :counter="200"
                    maxlength="200"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Last Name*"
                    v-model="form.last_name"
                    name="last_name"
                    :rules="rules.nameRules"
                    :counter="200"
                    maxlength="200"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Email*"
                    v-model="form.email"
                    name="email"
                    :rules="rules.emailRules"
                    :counter="200"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Phone*"
                    v-model="form.phone"
                    name="phone"
                    v-mask="mask"
                    :rules="rules.phoneRule"
                    placeholder="(###) ###-####"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-menu
                    v-model="dob_menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="form.date_of_birth"
                        name="date_of_birth"
                        label="Date of Birth"
                        readonly
                        prepend-inner-icon="event"
                        v-on="on"
                        :rules="[v => !!v || 'Date of birth is required']"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="form.date_of_birth" @input="dob_menu = false"></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col ols="12" sm="6" md="4">
                  <v-select
                    :items="genders"
                    v-model="form.gender"
                    name="gender"
                    label="Gender"
                    required
                    :rules="[v => !!v || 'Gender is required']"
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Building"
                    v-model="building"
                    readonly
                    required
                    name="building"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-select
                    :items="units"
                    v-model="form.unit"
                    name="unit"
                    label="Unit"
                    :readonly="units_disable"
                    required
                    :rules="[v => !!v || 'Item is required']"
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text type="submit">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-row>
</template>
<script>
import { mask } from "vue-the-mask";
import axios from "axios";
import swal from "sweetalert2";
export default {
  directives: {
    mask
  },
  data: () => ({
    valid: false,
    dialog: false,
    mask: "(###) ###-####",
    phone: null,
    dob_menu: false,
    genders: ["Male", "Female", "Other"],
    gender: null,
    form: {
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      phone: "",
      date_of_birth: "",
      gender: "",
      unit: "",
      building: ""
    },
    rules: {
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 200) || "Name must be less than 200 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      phoneRule: [
        v => !!v || "Phone number is required",
        v => (v && v.length === 14) || "Phone number is not valid"
      ]
    },
    valid: true
  }),
  props: {
    building_data: {
      type: Object
    }
  },
  computed: {
    building() {
      this.setBuilding();
      return this.form.building;
    },
    units() {
      if (this.building_data.units === undefined) return [];
      var temp = [];
      this.building_data.units.forEach(element => {
        if (element.availability) {
          temp.push(element.name);
        }
      });
      return temp;
    },
    units_disable() {
      if (this.units === undefined || this.units.length < 0) return true;
      if (this.units.length === 1) {
        this.setUnit();
        return true;
      } else return false;
    }
  },
  methods: {
    setBuilding() {
      this.form.building =
        this.building_data.address +
        ", " +
        this.building_data.city +
        ", " +
        this.building_data.province +
        " " +
        this.building_data.postal_code;
    },
    setUnit() {
      this.form.unit = this.units[0];
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      if (this.$refs.form.validate()) {
        const axiosConfig = {
          header: { "Content-Type": "application/x-www-form-urlencoded" }
        };
        axios
          .post(
            "/",
            this.encode({
              "form-name": "application-form",
              ...this.form
            }),
            axiosConfig
          )
          .then(response => {
            swal
              .fire({
                title: "Email Sent",
                text: "Thank You!",
                icon: "success"
              })
              .then(this.$router.push("/"));
          })
          .catch(err => {
            swal.fire({
              title: "Sending email Failed",
              html: `Sending email failed, That might be due to server downtime or havey load on the server. `,
              confirmButtonText: "No I will try Later",
              type: "error"
            });
          });
      }
    }
  }
};
</script>
