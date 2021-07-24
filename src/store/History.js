import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total:{totalIncome:150,
          totalExpense:-50,},
    
    data:[
        {text:'Cash', date:'24/07/2021', amount:150},
        {text:'Hamburger', date:'25/07/2021', amount:-50}, 
    ],
  },

  getters:{
    transactions: (state) => state.data,
    sumTotal: (state) => state.total,

  },

  mutations: {

    add(state, { payload }){
        
        if(payload.amount > 0){
          state.total.totalIncome += parseInt(payload.amount)
        }
        else{
          state.total.totalExpense += parseInt(payload.amount)
        }
        state.data.push(payload)
    },

    totalIncomeExpense(state){
        var sumIncome = 0
        var sumExpense = 0
        this.state.data.forEach(function(transaction){
            if(transaction.amount >= 0){
                sumIncome += transaction.amount
            }
            else{
                sumExpense += transaction.amount
            }
        })
        state.total.totalIncome = sumIncome
        state.total.totalExpense = sumExpense
    },
  },

  actions: {
    addTransaction({ commit }, payload){
        commit('add', { payload }) 
    },

    getTotalIncomeExpense({commit}){
        commit('totalIncomeExpense')
    },
  },
})
