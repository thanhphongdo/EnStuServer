<template>
    <div id="app">
        <v-app>
            <v-content>
                <!-- <div id="nav">
                    <router-link to="/">Home</router-link> |
                    <router-link to="/about">About</router-link>
                </div> -->
                <router-view/>
            </v-content>
        </v-app>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { Actions, Getters } from "./enums";
export default {
  name: "App",
  components: {},
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods: {
    
  },
  computed: {
    
  }
};
</script>