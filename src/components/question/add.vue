<template>
<div>
<form method="post">
<q-card flat>

<q-input float-label="Your question" v-model="add.title"/>
<q-input float-label="Your category" v-model="add.category_id"/>

<!-- Multiple Line Input -->
<q-input
 
  type="textarea"
  float-label="Describe Your Question for better understanding (Optional)"
  :max-height="100"
  :min-rows="7"
  v-model="add.description"
/>
  
  <q-card-actions>
    <q-btn loader @click.prevent='addQuestion'>Ask</q-btn>
    
  </q-card-actions>
</q-card>
</form>
</div>
</template>

<script>
import { QCard, QCardActions, QBtn, QInput } from 'quasar'
import axios from 'axios'
export default {
  name: 'add',
  components: { QCard, QCardActions, QBtn, QInput },
  data () {
    return {
      add: {
        title: '',
        description: '',
        category_id: ''
      },

      beforeCreated: function () {
        if (localStorage.length === 0) {
          this.$router.push('/login')
        }
      },

      methods: {
        addQuestion () {
          let key = localStorage.getItem('key')
          axios.post('http://210.16.101.26/questions?api_key=' + key, this.add)
            .then((response) => {
              this.$router.push('/')
            })
            .catch((error) => {
              console.log(error)
            })
        }
      }
    }
  }
}
</script>

<style lang="stylus">

  
</style>