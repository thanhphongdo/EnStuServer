import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './first_flow.vue';
import { AuthenAction } from '../../interfaces/index';
import { FirstFlowStep } from '../../enums';
import AuthenticationFlow from '@/components/authentication_flow/authentication_flow.ts';
import SelectLevel from '@/components/select_level/select_level.ts';
import SelectTopic from '@/components/select_topic/select_topic.ts';
import SelectWord from '@/components/select_word/select_word.ts';
import { currentUser } from '../../services/parse';

@Component({
    name: 'FirstFlow',
    components: {
        AuthenticationFlow,
        SelectLevel,
        SelectTopic,
        SelectWord
    },
    mixins: [template]
})
export default class FirstFlow extends Vue {
    @Prop() private msg!: string;
    private step: string = FirstFlowStep.AUTHEN;

    mounted() {
        if (currentUser()) {
            console.log(currentUser());
            this.step = FirstFlowStep.SELECT_LEVEL;
        }
    }

    onAuthenAction(event: AuthenAction) {
        console.log('onAuthenAction')
        if (event.success) {
            this.step = event.step;
        }
    }

    onSelectLevelAction(event: any) {
        console.log('onSelectLevelAction')
        this.step = FirstFlowStep.SELECT_TOPIC;
    }

    onSelectTopicAction(event: any) {
        this.step = FirstFlowStep.SELECT_WORD;
    }
}
