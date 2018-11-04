import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './first_flow.vue';
import Login from '@/components/login/login.ts'; 

@Component({
    name: 'FirstFlow',
    components: {
        Login
    },
    mixins: [template]
})
export default class FirstFlow extends Vue {
    @Prop() private msg!: string;
}
