
interface State {
    pagePathOptions: object[]
}
const state: State = {
    pagePathOptions: [
        {
            title: '首页',
            key: 'index'
        },
        {
            title: '内容',
            key: 'content'
        },
        {
            title: 'test',
            key: 'test'
        }
    ] 
}

const getters = {

}
const mutations = {
    changePagePath(state: State, newOption: object){
        state.pagePathOptions.push(newOption);
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations
}