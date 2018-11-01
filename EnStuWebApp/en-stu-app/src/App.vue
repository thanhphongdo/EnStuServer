<template>
<div id="app">
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
            </ul>
        </div>
    </nav>
    <div class="container">
        <div class="row">
            <div class="col s12">
                <router-view />
            </div>
        </div>
    </div>
    <!-- <v-app>
            <v-content> -->
    <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <!-- </v-content>
        </v-app> -->
</div>
</template>

<script>
import {
    mapActions
} from "vuex";
import {
    mapGetters
} from "vuex";
import {
    Actions,
    Getters
} from "./enums";
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
