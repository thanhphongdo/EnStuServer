<template>
    <div id="app">
        <v-app>
            <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
                <v-list>
                    <v-list-tile value="true" v-for="(item, i) in items" :key="i">
                        <v-list-tile-action>
                            <v-icon v-html="item.icon"></v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title v-text="item.title"></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            <v-toolbar app :clipped-left="clipped">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-btn icon @click.stop="miniVariant = !miniVariant">
                    <v-icon v-html="miniVariant ? 'fas fa-chevron-right' : 'fas fa-chevron-left'"></v-icon>
                </v-btn>
                <v-btn icon @click.stop="clipped = !clipped">
                    <v-icon>fas fa-globe</v-icon>
                </v-btn>
                <v-btn icon @click.stop="fixed = !fixed">
                    <v-icon>fas fa-minus</v-icon>
                </v-btn>
                <v-toolbar-title v-text="title"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click.stop="rightDrawer = !rightDrawer">
                    <v-icon>fas fa-bars</v-icon>
                </v-btn>
            </v-toolbar>
            <v-content>
                <div id="nav">
                    <router-link to="/">Home</router-link> |
                    <router-link to="/about">About</router-link>
                </div>
                <router-view/>
            </v-content>
            <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed app>
                <v-list>
                    <v-list-tile @click="right = !right">
                        <v-list-tile-action>
                            <v-icon>fas fa-exchange-alt</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            <v-footer :fixed="fixed" app>
                <span>&copy; 2017</span>
            </v-footer>
        </v-app>
    </div>
</template>

<script>
    export default {
        name: "App",
        components: {},
        data() {
            return {
                clipped: false,
                drawer: false,
                fixed: false,
                items: [
                    {
                        icon: "fas fa-shapes",
                        title: "Inspire"
                    }
                ],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: "Vuetify.js"
            };
        },
        mounted() {
            console.log(this);
        }
    };
</script>

<style lang="scss">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>