<template>
<div class="height-100 bg-color-gray-50">
    <v-tabs fixed-tabs class="tab-bottom height-100 bg-color-gray-50" v-model="active" color="indigo" dark slider-color="yellow">
        <v-tab v-for="n in 3" :key="n" ripple>
            Item {{ n }}
        </v-tab>
        <v-tab-item class="height-100 bg-color-gray-50" v-for="n in 3" :key="n">
            <v-card flat class="height-100 bg-color-gray-50">
                <v-card-text class="height-100 bg-color-gray-50">{{ text }}</v-card-text>
            </v-card>
        </v-tab-item>
    </v-tabs>
</div>
</template>
