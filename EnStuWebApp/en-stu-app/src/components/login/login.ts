import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './login.vue';

@Component({
    name: 'Login',
    mixins: [template]
})
export default class Login extends Vue {
    @Prop() private msg!: string;
}
