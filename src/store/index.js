import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user_id:"325",
    name: 'Juan',
    last_name: 'Ramirez',
    products:[
      {id:1, code:'23452323', product: "Funda papel" , quantity:2, price:100},
      {id:2, code:'23443323', product: "Bandeja Carton" , quantity:2, price:200},
      {id:3, code:'24452329', product: "Papel de regalo" , quantity:2, price:500},
    ] 
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
