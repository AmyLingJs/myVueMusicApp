console.log(333666666)
 import  Vue  from "Vue";
import App from './App.vue'
//导入全局reset样式
import './assets/css/reset.css';
// import  MuseUI  from "muse-ui";
// import 'muse-ui/dist/muse-ui';
 import loading from "./components/loading";
 Vue.use(loading)
//Vue.use(MuseUI);
import store from './store'


//Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中
//（需调用 Vue.use(Vuex) ）：
new Vue({
    el:'#app',
   render:h=>h(App),
    //    router,
    //    components:{

    //    },
        store
    
})