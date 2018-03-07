<template>
<div>
<q-card v-for="q in questions" > 
  <q-card flat>
  <q-item>
    <q-item-side avatar="~assets/Saymacha.png" />
    <q-item-main>
      <q-item-tile>{{ q.user.name }}</q-item-tile>
      <q-item-tile sublabel>{{ q.category.name }} on []</q-item-tile>
    </q-item-main>
  </q-item>
</q-card>
    <q-collapsible icon="explore" :label="q.title">
    <q-item-tile sublabel> </q-item-tile>
      <div>
        
      </div>
    </q-collapsible>
    <q-collapsible sublabel="Answers">
    
      <div>
        
      </div>
    </q-collapsible>

   

  <q-card-actions>
    <q-btn flat round small></q-btn>
    <q-btn flat icon="thumb up" color="primary"></q-btn>
    <q-btn flat icon="thumb down" color="red"></q-btn>
    <q-btn flat>Improve</q-btn>
    <q-btn flat icon="bookmark" color="primary"></q-btn>
  </q-card-actions>
</q-card>
</div>
</div>
</template>

<script>
import { QCard, QCardLayout, QList, QCollapsible, QItemSide, QItem, QItemTile, QCardActions, QBtn, QItemMain, QIcon, QModal } from 'quasar'
import axios from 'axios'
export default {
  name: 'index',
  components: { QCard, QCardLayout, QList, QCollapsible, QItemSide, QItem, QItemTile, QCardActions, QBtn, QItemMain, QIcon, QModal },
  props: [ 'user', 'category' ],
  data () {
    return {
      questions: []
    }
  },

  beforeCreated: function () {
    let key = localStorage.getItem('key')
    axios.get('http://210.16.101.26?api_key=' + key)
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