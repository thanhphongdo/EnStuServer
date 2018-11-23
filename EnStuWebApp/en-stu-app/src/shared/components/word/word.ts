import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './word.vue';
declare var Swiper: any;
@Component({
    name: 'Word',
    mixins: [template]
})
export default class Word extends Vue {
    @Prop() private msg!: string;
}
