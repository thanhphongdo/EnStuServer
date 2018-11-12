import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './register.vue';
import { AuthenStep } from '../../enums';

@Component({
    name: 'Register',
    mixins: [template]
})
export default class Register extends Vue {
    @Prop() private msg!: string;

    login() {
        this.$emit('registerAction', {
            success: false,
            step: AuthenStep.LOGIN
        })
    }

    register() {
        this.$emit('registerAction', {
            success: true,
            step: AuthenStep.REGISTER
        })
    }
}
