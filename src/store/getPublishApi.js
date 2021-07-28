import axios from "axios"

const state = {
    items: ''
}
const mutations = {
    SET_API_LIST : (state, payload) => {
        state.items = payload.data
    },
    ADD_API_ITEM : (state, payload) => {
        state.items.push(payload)
    },
    DELETE_API_ITEM : (state, payload) => {
        state.items.splice(payload, 1)
    },
    SORT_USER_LIST : (state, payload) => {
        state.items.reverse();
    }
}
const getters = {
    ITEMS : state => {
        return state.items
    },
    USER_DETAIL: state => id => {          
        return state.items.find(item => item.id == id);  
    }
}
const actions = {
    GET_PUBLISH_API_LIST : async (context, payload) => {
        const response = await axios.get('https://reqres.in/api/users?page=1')
        setTimeout(() => context.commit('SET_API_LIST', response.data), 2000)
    },
    SORT_USER_LIST(context, payload) {
        context.commit('SORT_USER_LIST')
    },
    ADD_NEW_ITEM(context, payload) {
        context.commit('ADD_API_ITEM', payload)
    },
    DELETE_PUBLISH_API_LIST(context, payload) {
        context.commit('DELETE_API_ITEM', payload)
    }
}

export default {
    state, getters, mutations, actions
}