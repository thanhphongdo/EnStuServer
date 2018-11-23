import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './select_topic.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import {Topic} from '../../models/index';
import {GetTopicBySource} from '../../interfaces/index';

@Component({
    name: 'SelectTopic',
    mixins: [template],
    computed: mapGetters(['getTopicBySource']),
    methods: {
        ...mapActions(['setTopicBySource', 'selectTopic'])
    }
})
export default class SelectTopic extends Vue {
    @Prop() private msg!: string;

    getTopicBySource!: GetTopicBySource;

    setTopicBySource: any;
    selectTopic: any;

    mounted(){
        this.setTopicBySource('source_1');
    }

    nextTopic(){
        this.$emit('selectTopicAction', {
            
        })
    }

    // selectTopic(){
    //     this.setTopicBySource('source_1');
    //     // this.$emit('selectTopicAction', {
    //     //     Topic: ''
    //     // })
    // }


}
