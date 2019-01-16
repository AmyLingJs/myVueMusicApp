import * as types from './types'
export default {
    showLoading({commit,state}) { //显示loading
        commit(types.SHOWLOADING)
    },
    hidLoading({commit,state}) {  //隐藏loading
        commit(types.HIDLOADING)
    }
}