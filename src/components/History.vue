<template>
  <div >
      <h3 >History</h3>
      <ul id="list" class="list" v-for="(transaction,index) in transactions  " :key="index">
        <li v-if="transaction.amount > 0" class="plus" >
          {{transaction.text}}  :  {{transaction.date}} <span>{{transaction.amount}}</span>
        </li>
        <li v-if="transaction.amount < 0" class="minus" >
          {{transaction.text}}  :  {{transaction.date}} <span>{{transaction.amount}}</span>
        </li>
      </ul>
  </div>
</template>

<script>

import Home from '@/views/Home'
import HistoryStore from '@/store/History'

export default {
  data(){
    return{
      transactions:[],
    }
  },

  components:{
      Home
  },

  created(){
    this.fetchTransaction()

  },

  methods:{
    fetchTransaction(){
      this.transactions = HistoryStore.getters.transactions
    },
  }
}
</script>
