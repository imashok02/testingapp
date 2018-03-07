<template>
<div>
<q-card v-for="question in questions">
  
  <q-list>
    <q-collapsible  icon="explore" :label="question.title" :sublabel="question.category.name">
      <div>
        Description
      </div>
    </q-collapsible>
    <q-collapsible sublabel="Answers">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>
   </q-list>
   <q-card flat>
    <q-card-actions>
   
    <q-btn flat color="primary">Go Full</q-btn>
    
   
   
  </q-card-actions>

    <q-card-actions>
    <q-btn  round small><q-icon name="person" /></q-btn>
    <q-btn flat>Good One</q-btn>
    <q-btn flat>Not Good</q-btn>
    <q-btn flat>Improve</q-btn>
    <q-btn flat color="primary">Save</q-btn>
  </q-card-actions>
</q-card>


</q-card>
</div>
</template>

<script>
import { QCard, QCardLayout, QList, QCollapsible, QCardActions, QBtn, QIcon } from 'quasar'
import axios from 'axios'
export default {
  name: 'index',
  components: { QCard, QCardLayout, QList, QCollapsible, QCardActions, QBtn, QIcon },
  data () {
    return {
      questions: []
    }
  },

  beforeCreated: function () {
    let key = localStorage.getItem('key')
    axios.get('http://210.16.101.26/questions?api_key=' + key)
      .then((response) => {
        this.questions = response.data
        for (var i = 0; i < this.questions.length; i++) {
          var obj = this.questions[i]
          return obj
        }
        this.obj = this.questions
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style lang="stylus">

  
</style>