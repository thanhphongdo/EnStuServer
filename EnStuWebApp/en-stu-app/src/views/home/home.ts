import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/hello_world/hello_world.ts'; // @ is an alias to /src
import template from './home.vue';

@Component({
  mixins: [template],
  components: {
    HelloWorld,
  },
  data(){
    return{
      active: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    }
  }
})
export default class Home extends Vue { }