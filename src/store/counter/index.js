
import state from './state'
import * as mutations from './mutations'
import * as actions from './acctions'
import * as getters from './getters'

const counterStore = {

    namespaced: true,

    state,
    mutations: mutations,
    actions: actions,
    getters: getters

}

export default counterStore
