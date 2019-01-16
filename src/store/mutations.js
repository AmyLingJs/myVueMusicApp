import * as types from './types'
export default {
    [types.SHOWLOADING](state) {//显示loading
        state.isLoadingShow = true;

    },
    [types.HIDLOADING] (state) { //隐藏loading
        state.isLoadingShow = false;

    }
}