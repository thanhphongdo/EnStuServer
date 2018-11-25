import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './select_topic.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { Topic } from '../../models/index';
import { GetTopicBySource, SetTopicBySource } from '../../interfaces/index';

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

    setTopicBySource!: SetTopicBySource;
    selectTopic: any;

    mounted() {
        this.setTopicBySource('EoT3y7nabE');
    }

    nextTopic() {
        this.$emit('selectTopicAction', {

        })
    }

    // selectTopic(){
    //     this.setTopicBySource('EoT3y7nabE');
    //     // this.$emit('selectTopicAction', {
    //     //     Topic: ''
    //     // })
    // }


}
