import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './first_flow.vue';
import { AuthenAction } from '../../interfaces/index';
import {FirstFlowStep} from '../../enums';
import AuthenticationFlow from '@/components/authentication_flow/authentication_flow.ts'; 
import SelectLevel from '@/components/select_level/select_level.ts'; 

@Component({
    name: 'FirstFlow',
    components: {
        AuthenticationFlow,
        SelectLevel
    },
    mixins: [template]
})
export default class FirstFlow extends Vue {
    @Prop() private msg!: string;
    private step: string = FirstFlowStep.AUTHEN;

    onAuthenAction(event: AuthenAction){
        console.log('onAuthenAction')
        if(event.success){
            this.step = event.step;
        }
    }
}
