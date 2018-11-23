import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './carousel.vue';
declare var Swiper: any;
@Component({
    name: 'Carousel',
    mixins: [template]
})
export default class Carousel extends Vue {
    @Prop() private msg!: string;

    mounted() {
        var swiper = new Vue.prototype.Swiper('.swiper-container');
    }
}
