<template>
<div>
  <div className="container">
    <h4>Your Balance</h4>
    <h1>{{total.totalIncome + total.totalExpense}}฿</h1>
  </div>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p class="money plus">{{total.totalIncome}}฿</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p class="money minus">{{total.totalExpense}}฿</p>
    </div>
  </div>
</div>    
</template>

<script>

import Home from '@/views/Home'
import HistoryStore from '@/store/History'

export default {
  data(){
    return{
      total:{totalIncome: 0,
            totalExpense: 0,}
      
    }
  },

  components:{
      Home,
  },

  created(){
    this.fetchTotalIncomeExpense()
  },

  methods:{
    fetchTotalIncomeExpense(){
      HistoryStore.dispatch("getTotalIncomeExpense")
      this.total = HistoryStore.getters.sumTotal
    },
    
  },

}
</script>