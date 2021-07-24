<template>
  <div>
      <h3>Add new transaction</h3>
      <div id="form">
        <div class="form-control">
          <label for="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." v-model="form.text"/>
        </div>
        
        <div class="form-control">
            <label for="text">Date</label>
            <date-picker v-model="form.date" lang="en" type="text" format="DD-MM-YYYY" value-type="MM/DD/YYYY" placeholder="Enter Date..." >
            </date-picker>
        </div>

        <div class="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" placeholder="Enter amount..." v-model="form.amount"/>
        </div>
        <button class="btn" @click="addTransaction">Add transaction</button>
      </div>
  </div>
</template>

<script>

import Home from '@/views/Home'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import HistoryStore from '@/store/History'

export default {

    components:{
        Home,
        DatePicker,
    },
    
    data(){
      return{
        form:{
          text: '',
          date: '',
          amount: null,
        }
      }
    },
    methods:{
      clearForm(){
        this.form = {
          text: '',
          date: '',
          amount: null,
        }
      },
      addTransaction(){
        let payload = {text: this.form.text,
                       date: this.form.date,
                       amount: this.form.amount}
        
        HistoryStore.dispatch("addTransaction", payload)

        this.clearForm()
      }
    }


}
</script>

<style scoped>

.mx-datepicker {
    width: 100%;
}
</style>