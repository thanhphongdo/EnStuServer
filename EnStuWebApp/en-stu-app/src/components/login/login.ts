import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './login.vue';
import { AuthenStep } from '../../enums';

@Component({
    name: 'Login',
    mixins: [template]
})
export default class Login extends Vue {
    @Prop() private msg!: string;

    login() {
        this.$emit('loginAction', {
            success: true,
            step: AuthenStep.LOGIN
        })
    }

    register() {
        this.$emit('loginAction', {
            success: false,
            step: AuthenStep.REGISTER
        })
    }
}
