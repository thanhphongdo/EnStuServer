import { Component, Vue } from 'vue-property-decorator';
import SelectWord from '@/components/select_word/select_word.ts';
import template from './select_word.vue';

@Component({
  mixins: [template],
  components: {
    SelectWord
  },
  data(){
    return{
      active: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    }
  },
  destroyed: function(){
    console.log('destroyed home');
  }
})
export default class Home extends Vue { }