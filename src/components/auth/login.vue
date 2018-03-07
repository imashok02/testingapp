<template>
<div>
<q-card flat>
<q-input float-label="Email" v-model="signin.email"/>

<!-- Multiple Line Input -->
<q-input float-label="Password" type="password" v-model="signin.password"/>
  
  <q-card-actions>
    <q-btn loader @click='login'>Login</q-btn>
    
  </q-card-actions>
  </form> 
</q-card>
</div>
</template>

<script>
import { QCard, QCardActions, QBtn, QInput } from 'quasar'
import axios from 'axios'
export default {
  name: 'login',
  components: { QCard, QCardActions, QBtn, QInput },
  data () {
    return {
      signin: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    login: function () {
      axios.post('http://210.16.101.26/login', this.signin)
        .then((response) => {
          let key = response.data.api_key
          this.$store.state.apikey = key
          console.log(key)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="stylus">

  
</style>