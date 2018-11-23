import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './select_level.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import {Level} from '../../models/index';
import {GetLevelBySource} from '../../interfaces/index';

@Component({
    name: 'SelectLevel',
    mixins: [template],
    computed: mapGetters(['getLevelBySource']),
    methods: {
        ...mapActions(['setLevelBySource'])
    }
})
export default class SelectLevel extends Vue {
    @Prop() private msg!: string;

    getLevelBySource!: GetLevelBySource;

    setLevelBySource: any;

    mounted(){
        this.setLevelBySource('source_1');
    }

    selectLevel(){
        this.$emit('selectLevelAction', {

        })
    }


}
